Student CRUD Form

This is a simple Student CRUD application built with Node.js, Express, MongoDB, and EJS. It allows users to create, read, update, and delete student records using a single dynamic form.

Features

Add new student records

View all students

Update existing student information

Delete student entries

Uses EJS for dynamic page rendering

Project Structure

app.js: Main server file that handles routes and middleware

db.js: MongoDB connection setup

pages/: Contains EJS template(s) for rendering HTML (form.ejs)

public/: Stores static assets like CSS (form.css)

.env: Environment variables such as MongoDB URI

package.json / package-lock.json: Node.js dependencies and scripts

How to Run

Install dependencies:

npm install


Set your MongoDB URI in .env

Start the server:

node app.js


Open http://localhost:3000 in your browser to use the app