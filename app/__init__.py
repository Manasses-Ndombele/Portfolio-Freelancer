from flask import Flask
from app.database import db_session, init_db

app = Flask(__name__)
init_db()
@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()

from app import controllers
