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
    for r in re:
            
        new_post = Todo(id=r['id'], title=r['title'], content=r['content'], keyword=query)
        db.session.add(new_post)
    db.session.commit()
    print(Todo.query.order_by(Todo.content).all())