from sqlalchemy import Column, String, Text, Integer
from app.database import base

class Message(base):
    __tablename__ = 'messages'
    id = Column(Integer, primary_key=True)
    name = Column(String(80))
    email = Column(String(120))
    company = Column(String(150))
    message = Column(Text)

    def __init__(self, name, email, message, company=None):
        self.name = name
        self.email = email
        self.message = message
        self.company = company

    def __repr__(self):
        return f'<Mensagem de {self.email}>'
