from flask import Flask
from app.database import db_session, init_db

app = Flask(__name__)
app.config['SECRET_KEY'] = '0b7f22b287442aa79f3557a35b280d92142e53e598fb6fa9c47f6108e9ee5814'
init_db()
@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()

from app import controllers
