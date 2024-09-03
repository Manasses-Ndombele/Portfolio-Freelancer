from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker, declarative_base

engine = create_engine('sqlite:///database.db')
db_session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))
base = declarative_base()
base.query = db_session.query_property()

def init_db():
    import app.models
    base.metadata.create_all(bind=engine)
