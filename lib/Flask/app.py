from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from model.Query.okapi import Okapi
import pandas as pd

path = ["./model/weight/new_model.pkl",
        "./model/weight/new_idf_vector.pkl", "./model/weight/new_word.pkl"]
file_path = ['./model/Okapi BM25/src/weight of Dataset/avgdl.pkl',
                 './model/Okapi BM25/src/weight of Dataset/dl.pkl',
                 './model/Okapi BM25/src/weight of Dataset/dltable.pkl',
                 './model/Okapi BM25/src/weight of Dataset/file2terms.pkl',
                 './model/Okapi BM25/src/weight of Dataset/files.pkl',
                 './model/Okapi BM25/src/weight of Dataset/idf.pkl',
                 './model/Okapi BM25/src/weight of Dataset/invertedIndex.pkl']

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///IR_main.db'
db = SQLAlchemy(app)

all_post = [
    {
        'id': 1,
        'content': 'Video có tiêu đề "Hãy gặp nhau ở Vũ Hán" vừa được Cục Du lịch và Văn hóa Trung Quốc phát hành,' +
        'nhằm thu hút du khách quay trở lại. Cục đăng kèm lời nhắn trên weibo: "Vũ Hán không bao giờ..',
        'title': 'Vũ Hán hiện giờ ra sao?',
        'source': 'https://vnexpress.net/vu-han-hien-gio-ra-sao-4194762.html'
    }
]


class Todo(db.Model):
    ids = db.Column(db.Integer, primary_key=True)
    keyword = db.Column(db.String(200), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    source = db.Column(db.String(300), nullable=False)
    completed = db.Column(db.Integer, default=0)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Task %r>' % self.ids


@app.route('/IR', methods=['GET', 'POST'])
def posts():
    if request.method == 'POST':
        df = pd.read_csv('Source.csv')
        keywords = request.form['cs']
        #keywords = 'Đà Lạt'
        que = Okapi(keywords, file_path)
        res, name = que.letQuery()
        # print(res)
        try:
            for r, n in zip(res, name):
                sources = df[df['Files name'] == n]['Sources'].tolist()[0]
                
                #print(sources)
                new_post = Todo(ids=r['id'], title=r['title'],
                                content=r['content'], keyword=que.query, source=sources)
                try:
                    a = Todo.query.filter_by(ids=r['id']).first()
                    #print(a)
                    a.ids = new_post.ids
                    a.title = new_post.title
                    a.content = new_post.content
                    a.keyword = new_post.keyword
                    a.source = new_post.source
                    a.date_created = new_post.date_created
                    a.completed = new_post.completed
                    db.session.commit()
                except:
                    db.session.add(new_post)
                    db.session.commit()
            return redirect('/IR')
        except (TypeError, IndexError):
            delete(Todo.query.all(), db)
            return redirect('/IR')

    else:
        all_posts = Todo.query.order_by(Todo.ids).all()
        return render_template('query.html', posts=all_posts)


@app.route('/I', methods=['GET', 'POST'])
@app.route('/')
def index():
    return render_template('CV.html')


def delete(query, db):
    for que in query:
        db.session.delete(que)
    db.session.commit()


if __name__ == '__main__':
    app.run(debug=True, use_debugger=True, use_reloader=True)
