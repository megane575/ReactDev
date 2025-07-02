from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import psycopg2
from urllib.parse import urlparse, parse_qs

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

class TodoHandler(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

    def do_GET(self):
        if self.path == "/todos":
            self._set_headers()
            todos = fetch_todos()
            self.wfile.write(json.dumps(todos).encode("utf-8"))
        else:
            self.send_error(404)

def run(server_class=HTTPServer, handler_class=TodoHandler):
    server_address = ('', 8000)
    httpd = server_class(server_address, handler_class)
    print("Starting server at http://localhost:8000")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
