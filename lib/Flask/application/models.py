from . import db
from datetime import datetime


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
