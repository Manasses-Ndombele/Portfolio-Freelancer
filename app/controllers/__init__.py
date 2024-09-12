from app import app, db_session
from app.models import Message
from flask import render_template, json, jsonify, request
import os

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translations/<lang>/', methods=['GET'])
def translations(lang):
    BASE_DIR = os.getcwd()
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

@app.route('/skills-covers', methods=['GET'])
def skills_covers():
    skills = ['Python', 'Django', 'Flask', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Sass', 'Ajax', 'Json']
    skills_covers = []
    for skill in skills:
        skills_covers.append('static/images/' + skill + ' Logo.jpg')

    return jsonify(skills_covers)

@app.route('/projects-covers', methods=['GET'])
def projects_covers():
    projects = ['static/images/criptohacking project card xxl.jpg', 'static/images/borges company project card xxl.jpg', 'static/images/xshop books project card xxl.jpg', 'static/images/portfolio project card xxl.jpg']
    return jsonify(projects)
