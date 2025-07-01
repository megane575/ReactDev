from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import psycopg2
from urllib.parse import urlparse

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
    def do_GET(self):
        if self.path == "/api/todos":
            todos = fetch_todos()
            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(todos).encode())
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == "__main__":
    server = HTTPServer(('', 4000), TodoHandler)
    print("Server running on port 4000...")
    server.serve_forever()
