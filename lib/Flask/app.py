from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///IR1.db'
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
    id = db.Column(db.Integer, primary_key=True)
    keyword = db.Column(db.String(200), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    source = db.Column(db.String(100), nullable=False)
    completed = db.Column(db.Integer, default = 0)
    date_created = db.Column(db.DateTime, default =datetime.utcnow)
    
    def __repr__(self):
        return '<Task %r>' % self.id
@app.route('/IR', methods=['GET', 'POST'])
def posts():
    if request.method == 'POST':
        keyword = request.form['search-box']
        print(title)
        new_post = Todo(title=title, content=content, source = source)
        db.session.add(new_post)
        db.session.commit()
        return redirect('/IR')
        
    else:
        all_posts = Todo.query.order_by(Todo.id).all() 
        return render_template('query1.html', posts=all_post)
@app.route('/')
def index():
    return render_template('CV.html')


if __name__ == '__main__':
    app.run(debug=True)
