from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import psycopg2
from urllib.parse import urlparse
import re

DB_CONFIG = {
    "host": "db", 
    "database": "todo_db",
    "user": "user",
    "password": "pass"
}

def fetch_todos():
    conn = psycopg2.connect(**DB_CONFIG)
    cur = conn.cursor()
    cur.execute("SELECT id, title, content FROM todos")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return [{"id": r[0], "title": r[1], "content": r[2]} for r in rows]

def add_todo(title, content):
    conn = psycopg2.connect(**DB_CONFIG)
    cur = conn.cursor()
    cur.execute("INSERT INTO todos (title, content) VALUES (%s, %s)", (title, content))
    conn.commit()
    cur.close()
    conn.close()

def update_todo(todo_id, title, content):
    conn = psycopg2.connect(**DB_CONFIG)
    cur = conn.cursor()
    cur.execute("UPDATE todos SET title = %s, content = %s WHERE id = %s", (title, content, todo_id))
    conn.commit()
    cur.close()
    conn.close()

def delete_todo(todo_id):
    conn = psycopg2.connect(**DB_CONFIG)
    cur = conn.cursor()
    cur.execute("DELETE FROM todos WHERE id = %s", (todo_id,))
    conn.commit()
    cur.close()
    conn.close()

class TodoHandler(BaseHTTPRequestHandler):
    def _set_headers(self, status_code=200):
        self.send_response(status_code)
        self.send_header("Content-type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        if self.path == "/todos":
            self._set_headers()
            todos = fetch_todos()
            self.wfile.write(json.dumps(todos).encode("utf-8"))
        else:
            self.send_error(404)

    def do_POST(self):
        if self.path == "/todos":
            content_length = int(self.headers["Content-Length"])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data)
            add_todo(data["title"], data["content"])
            self._set_headers(201)
            self.wfile.write(json.dumps({"message": "Todo created"}).encode("utf-8"))
        else:
            self.send_error(404)

    def do_PUT(self):
        self._set_headers()  # ←最初に呼び出すとCORSなども対応しやすい

        match = re.match(r"^/todos/(\d+)$", self.path)
        if match:
            try:
                todo_id = int(match.group(1))
                content_length = int(self.headers["Content-Length"])
                put_data = self.rfile.read(content_length)
                data = json.loads(put_data)

                title = data.get("title")
                content = data.get("content")
                if not title or not content:
                    self.send_error(400, "title and content are required")
                    return

                update_todo(todo_id, title, content)
                self.wfile.write(json.dumps({"message": "Todo updated"}).encode("utf-8"))
            except Exception as e:
                self.send_error(500, str(e))
        else:
            self.send_error(404)

    def do_DELETE(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path.startswith("/todos/"):
            try:
                todo_id = int(parsed_path.path.split("/")[-1])
                delete_todo(todo_id)
                self._set_headers()
                self.wfile.write(json.dumps({"status": "deleted"}).encode())
            except Exception as e:
                self.send_error(400, str(e))
        else:
            self.send_error(404)
    

def run(server_class=HTTPServer, handler_class=TodoHandler):
    server_address = ('', 8000)
    httpd = server_class(server_address, handler_class)
    print("Starting server at http://localhost:8000")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
