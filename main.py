from flask import Flask, render_template, session

app = Flask(__name__, static_folder='./static', template_folder='./templates')

app.config.update(TEMPLATES_AUTO_RELOAD=True)

@app.route('/', methods=['GET'])
def home():
  return render_template(
    'index.html'
  )


@app.after_request # only for development
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='3000')
