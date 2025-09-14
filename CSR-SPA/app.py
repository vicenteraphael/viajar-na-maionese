from flask import Flask, render_template, abort, jsonify
from markdown import markdown
import frontmatter
import os

app = Flask(__name__)

POSTS_DIR = "CSR-SPA/posts"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/posts')
def get_posts():
    posts = []
    for filename in os.listdir(POSTS_DIR):
        if filename.endswith('.md'):
            filepath = os.path.join(POSTS_DIR, filename)
            post = frontmatter.load(filepath)
            posts.append({
                'id' : post['id'],
                'title' : post['title'],
                'date' : post['date'],
                'author' : post['author']
            })
    return jsonify(posts)

@app.route('/api/post/<id>')
def get_post(id):
    filepath = os.path.join(POSTS_DIR, f"{id}.md")
    if not os.path.exists(filepath):
        return None
    post = frontmatter.load(filepath)
    post.content = markdown(post.content)

    if post is None:
        abort(404)
        
    return jsonify({
        'title' : post['title'],
        'author' : post['author'],
        'date' : post['date'],
        'content' : post.content
    })

if __name__ == "__main__":
    app.run(debug=True)