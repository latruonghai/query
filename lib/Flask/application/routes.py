from flask import request, render_template, make_response, url_for, redirect
from datetime import datetime
from flask import current_app as app
from .models import db, Todo
import pandas as pd
from model.Query.okapi import Okapi


file_path = ['./model/Okapi BM25/src/weight of Dataset/avgdl.pkl',
                 './model/Okapi BM25/src/weight of Dataset/dl.pkl',
                 './model/Okapi BM25/src/weight of Dataset/dltable.pkl',
                 './model/Okapi BM25/src/weight of Dataset/file2terms.pkl',
                 './model/Okapi BM25/src/weight of Dataset/files.pkl',
                 './model/Okapi BM25/src/weight of Dataset/idf.pkl',
                 './model/Okapi BM25/src/weight of Dataset/invertedIndex.pkl']

@app.route('/IR', methods=['GET', 'POST'])
def posts():
    if request.method == 'POST':
        df = pd.read_csv('Source_new.csv')
        keywords = request.form['cs']
        #keywords = 'Đà Lạt'
        que = Okapi(keywords, file_path)
        res, name = que.letQuery()
        # print(res)
        try:
            for r, n in zip(res, name):
                sources = df[df['Files name'] == n]['Sources'].tolist()[0]

                # print(sources)
                new_post = Todo(ids=r['id'], title=r['title'],
                                content=r['content'], keyword=que.query, source=sources)
                try:
                    a = Todo.query.filter_by(ids=r['id']).first()
                    # print(a)
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


# @app.route('/I', methods=['GET', 'POST'])
@app.route('/')
def index():
    return render_template('CV.html')

@app.route('/Crawl')
def crawl():
    

def delete(query, db):
    for que in query:
        db.session.delete(que)
    db.session.commit()


if __name__ == "__main__":
    app.run(debug=True, use_debugger=True, use_reloader=True)
