from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from model.query import Query

path = ["./model/weight/new_model.pkl",
        "./model/weight/new_idf_vector.pkl", "./model/weight/new_word.pkl"]
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///IR_new.db'
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
    #source = db.Column(db.String(100), nullable=False)
    completed = db.Column(db.Integer, default=0)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Task %r>' % self.id


@app.route('/IR', methods=['GET', 'POST'])
def posts():
    if request.method == 'POST':
        keywords = request.form['cs']
        #keywords = 'Đà Lạt'
        que = Query(keywords, path)
        res = que.letQuery()
        #print(res)
        for r in res:
            
            new_post = Todo(ids=r['id'], title=r['title'], content=r['content'], keyword=keywords)
            db.session.add(new_post)
        db.session.commit()
        return redirect('/IR')

    else:
        all_posts = Todo.query.order_by(Todo.ids).all()
        return render_template('query.html', posts=all_posts)

@app.route('/I', methods=['GET', 'POST'])


@app.route('/')
def index():
    return render_template('CV.html')


if __name__ == '__main__':
    app.run(debug=True, use_debugger=True, use_reloader=True)
