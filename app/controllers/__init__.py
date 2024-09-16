from app import app, db_session
from app.models import Message
from flask import render_template, json, jsonify, request, redirect, session, url_for
from hashlib import sha256
import os

BASE_DIR = os.getcwd()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translations/<lang>/', methods=['GET'])
def translations(lang):
    translations_path = os.path.join(BASE_DIR, 'app', 'translations', 'translations.json')
    with open(translations_path, 'r', encoding='utf-8') as file:
        _translations = json.load(file)

    response_datas = {
        'lang': lang,
        'translations': _translations
    }

    return jsonify(response_datas)

@app.route('/client-message', methods=['POST'])
def client_message():
    form_fields = request.get_json()
    name = form_fields.get('name').title()
    email = form_fields.get('email')
    company = form_fields.get('company')
    subject = form_fields.get('message')
    new_message = Message(name, email, subject, company)
    db_session.add(new_message)
    db_session.commit()
    return jsonify(True)

@app.route('/admin/<password>')
def admin_access(password: str):
    admin_password_path = os.path.join(BASE_DIR, 'storage', 'admin.json')
    with open(admin_password_path, 'r') as json_file:
        admin_password_file = json.load(json_file)

    hashed_password = sha256(password.encode()).hexdigest()
    if hashed_password == admin_password_file['password']:
        session['admin_authorization'] = True
        return redirect(url_for('admin_messages'))

    else:
        return render_template('admin.html', messages=None, access_error=True)

@app.route('/admin/messages')
def admin_messages():
    admin_authorization = session.get('admin_authorization')
    if admin_authorization:
        messages = db_session.query(Message).all()
        return render_template('admin.html', messages=messages, access_error=False)

    else:
        return render_template('admin.html', messages=None, access_error=True)
