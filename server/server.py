#TESTING
import os.path
from flask import Flask, send_file, send_from_directory

BASE_URL = os.path.abspath(os.path.dirname(__file__))
print BASE_URL
CLIENT_APP_FOLDER = os.path.abspath(os.path.join(BASE_URL, "../client/dist/"))
print CLIENT_APP_FOLDER

APP_FOLDER = os.path.abspath(os.path.join(BASE_URL, "../client/dist/app"))
print APP_FOLDER

app = Flask(__name__, static_url_path='')

@app.route('/')
def hello_world():
     return send_from_directory(CLIENT_APP_FOLDER, 'index.html')

@app.route('/client/<path:path>')
def send_client(path):
    return send_from_directory(CLIENT_APP_FOLDER, path)

@app.route('/app/<path:path>')
def send_app(path):
    return send_from_directory(APP_FOLDER, path)

if __name__ == "__main__":
    app.run()