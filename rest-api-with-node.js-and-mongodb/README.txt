Node.js MongoDB API

This project is a simple Node.js and Express application that connects to MongoDB and exposes an API endpoint to fetch data from a collection.

Features

Uses Express.js to create a server

Connects to MongoDB using the official MongoDB driver

Loads environment variables using dotenv

Provides a GET API to read data from MongoDB

Requirements

Node.js installed

MongoDB instance (local or cloud)

npm or yarn

Installation

Clone the repository

Run npm install to install dependencies

Create a .env file in the root directory

Environment Variables

MONGODB_URL MongoDB connection string

DATABASE_NAME Name of the database

PORT Port number for the server

Running the Project

Start the server using node app.js or nodemon app.js

Server will run on http://localhost:PORT

API Endpoint

GET /api

Returns all documents from the firstCollection collection

Notes

Ensure MongoDB is running before starting the server

This project is intended for learning and basic CRUD practice