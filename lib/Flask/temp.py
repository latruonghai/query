from model.query import Query
from app import Todo
from app import db
if __name__ =="__main__":
    print(Todo.query.all())
    query = "du lịch"
    path = ["./model/weight/new_model.pkl",
        "./model/weight/new_idf_vector.pkl", "./model/weight/new_word.pkl"]
    que = Query(query, path)
    re = que.letQuery()
            
    new_post = Todo(ids=re[0]['id'], title=re[0]['title'], content=re[0]['content'], keyword="du lich")
    db.session.commit()
    a = Todo.query.filter_by(ids=3).first()
    print(a.ids, a.title)
    a = new_post
    db.session.commit()
    print(a.ids, a.title)