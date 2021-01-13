import sys
from pathlib import Path

base_path = Path(__file__).parent
sys.path.append(str(base_path))

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from ddtrace import patch_all
import test


db = SQLAlchemy()
patch_all()
def create_app():

    app = Flask(__name__, instance_relative_config=False)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///main_database.db'
    #app.config.from_object('config.Config')

    db.init_app(app)

    with app.app_context():
        from . import routes
        db.create_all()

        return app
