CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT
);

INSERT INTO todos (title, content) VALUES ('title1', 'conten1'),('title2', 'conten2');
