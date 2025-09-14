from flask import Flask, render_template, abort
from markdown import markdown
import frontmatter
import os

app = Flask(__name__)

POSTS_DIR = "SSR/posts"

def get_posts():
    posts = []
    for filename in os.listdir(POSTS_DIR):
        if filename.endswith('.md'):
            filepath = os.path.join(POSTS_DIR, filename)
            post = frontmatter.load(filepath)
            posts.append(post)
    return posts

def get_post(id):
    filepath = os.path.join(POSTS_DIR, f"{id}.md")
    if not os.path.exists(filepath):
        return None
    post = frontmatter.load(filepath)
    post.content = markdown(post.content)
    return post

@app.route('/')
def blog_index():
    posts = get_posts()
    return render_template('blog.html', posts=posts)

@app.route('/<id>')
def blog_post(id):
    post = get_post(id)
    if post is None:
        abort(404)
    return render_template('post.html', post=post)

if __name__ == "__main__":
    app.run(debug=True)