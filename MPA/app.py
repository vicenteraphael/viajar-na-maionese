from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('blog.html')

@app.route('/<page>')
def go_to(page):
    return render_template(f'{page}.html')

if __name__ == '__main__':
    app.run(debug=True)