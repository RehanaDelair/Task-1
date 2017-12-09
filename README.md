# Task-1
This project is to demonstrate following tasks:

1) A simple hello-world at http://localhost:8080/ that displays a simple string like "Hello World - Arpit"; replace "Arpit" with your own first name).
2) Add a route, for e.g. http://localhost:8080/authors , which: 
  a) fetches a list of authors from a request to https://jsonplaceholder.typicode.com/users
  b) fetches a list of posts from a request to https://jsonplaceholder.typicode.com/posts
  c) Respond with only a list of authors and the count of their posts (a newline for each author).
3) Set a simple cookie ( if it has not already been set ) at http://localhost:8080/setcookie with the following values: name=<your-first-name> and age=<your-age> .
4) Fetch the set cookie with http://localhost:8080/getcookies and display the stored key-values in it.
5) Deny requests to your http://localhost:8080/robots.txt page. (or you can use the response at http://httpbin.org/deny if needed)
6) Render an HTML page at http://localhost:8080/html or an image at http://localhost:8080/image .
7) A text box at http://localhost:8080/input which sends the data as POST to any endpoint of your choice. This endpoint should log the received the received to
stdout .

# Execute
To Execute this project, you will need to install following:

1) Install nodejs from https://nodejs.org/en/download/
2) Install http-server using command
   npm install http-server -g
3) You will also need to install different packages
   a) express using command npm install express -g
   b) request using command npm install request -g
   c) express-session using command npm install express-session -g
   d) path using command npm install path -g
   e) body-parser using command npm install body-parser -g
   
Now, To start a server follow steps:

  1) Open a command prompt/ terminal
  2) cd "path of directory"
  3) node app.js
  
Your server is ready and is listening on port 8080, You can go ahead and mae request to different URLs.
