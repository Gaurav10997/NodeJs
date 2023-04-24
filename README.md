## What is Node.js?

- Node.js is an open source server environment
- Node.js is free
- Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
- Node.js uses JavaScript on the server

---

## Why Node.js?

**Node.js uses asynchronous programming!**

A common task for a web server can be to open a file on the server and return the content to the client.

Here is how PHP or ASP handles a file request:

1. Sends the task to the computer's file system.
2. Waits while the file system opens and reads the file.
3. Returns the content to the client.
4. Ready to handle the next request.

Here is how Node.js handles a file request:

1. Sends the task to the computer's file system.
2. Ready to handle the next request.
3. When the file system has opened and read the file, the server returns the content to the client.

Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

---

## What Can Node.js Do?

- Node.js can generate dynamic page content
- Node.js can create, open, read, write, delete, and close files on the server
- Node.js can collect form data
- Node.js can add, delete, modify data in your database

---

## What is a Node.js File?

- Node.js files contain tasks that will be executed on certain events
- A typical event is someone trying to access a port on the server
- Node.js files must be initiated on the server before having any effect
- Node.js files have extension ".js"

# **MUST DO ASSIGMENTS IN NODEJS**

## NODEJS - CALCULATOR

- Create an argument based calculator in nodejs
- the code takes arguments from terminal and then depending on arguments gives output
- eg `node index.js add 1 2` will return 3
- support following operations:
- add, sub, mult, divide, sin, cos, tan, random
- eg `node index.js random` will just generate random number for you
- use `crypto` module to generate random number. you can also decide to get length from args

## NODEJS - FILE EDITOR

- create a simple nodejs program to edit files, based on arguments passed.
- the program will support basic file reading, deleting, creating and appending operations
- `node index.js read test.txt` will output the content of file
- similarly `append CONTENT test.txt` will append the 'content' at the end of the file
- `delete test.txt` will delete the file
- `create test.txt` will create a new file
- `rename test.txt new.txt` will rename the file
- `list .` will list everything in current directory. (other paths should also support)

## NODEJS - FILE SERVER

- Create a file server in nodejs using `http`
- when user visits site, he should see the list of all files and folders in current directory
- user should be able to ask for different directory content by routes
- eg:
- `/` shows directories: data, src, public etc
- `/public` will show content of public directory
- `/public/other` will show content of other directory inside public and so on
- listing should appear on URL change you can enter URL manuall

PART 2:

- make the listing with proper UI and Icons and anchor tags
- hints: / serves an html response. you will have to manipulate `li` tags as strings yourself
- when user clicks on li tag, take them on proper URL `/public` etc.
- in backend handle `/public` route dynamically it cannot be hardcoded.
- hint: you can change request structure like `/api/public` will ask for contents of public directory etc. just to know which request is for data and which request is for frontend etc

## NODEJS - BENCHMARKING

- create a basic http nodejs server with following routes
- have a large at least 1mb of a text file
- /textsync reads the file synchronously and returns response
- /textasync reads the file async and returns response
- /textstream reads the file as stream and returns
- Benchmark the application. observe the results.
- Make changes to reduce the size of the text file to only few bytes. (around 10- 15words)
- benchmark the application again, try observing results, understand why that happened.

Part 2:

- there's one more way to read a file in Nodejs
- a specific module called as `fs/promise`.
- it lets you use `promise` based api (async await or .then/catch) to read/write files
- create a one more route `/textpromise`, which uses `fs/promise` module to read file
- observe the benchmarks

## EXPRESS - TODO CRUD

- Create a TODO API server in express
- Use any frontend you want, either some TODO frontend you created with React or API testing tools like Postman etc
- If you use react frontend you will get clear idea about a full stack application
- The todo server will have only 1 route. `/`
- It will accept 4 different methods, GET, POST, PUT, DELETE.
- you can use a simple file based storage if you want.
- alternatively you can also explore some embdedd databases like `lowedb` or `leveldb` or `nedb`. you will find enough examples for using those online. this is optional but it will make saving. retrieving etc very easy

Please note :

1. Use express, you are not allowed to use any other library other than Express, Nodemon and Node Built-in Modules.
2. You can solve both questions in the same app, no need to create two different apps.
3. Don't forget to add `app.use(express.json())` in your express server (even if you haven't learnt it yet)

## EXPRESS - VALIDATION MIDDLEWARE

- create a custom validation middleware for express
- the middleware should check for data validation before request reaches to routes
- To test this middleware create a POST route for 'movies' database
- this route will accept:
  - ID: number
  - Name: string
  - Rating: number
  - Description: string
  - Genre: string
  - Cast: string[]
- Your job is to check if all the fields exists or not
- if they exist check if they are correct type or not.
- If some data is incorrect, the status code for bad request is 400. send that

## EXPRESS - FILE UPLOADER

- when you upload a file, it goes as a special type of request known as `multipart/formdata`
- You cannot upload a file as a json.
- there's a special middlewares to accept a file uploaded by frontend called as `multer`
- checkout multer and implement a route `/upload` to receive a file from `any` frontend and store it on your machine on server under 'uploads' directory

Hint:

- the multer middleware is pretty easy to use.
- from frontend when you upload a file you create something called as `Form Data`.
- a formdata is basically named key-value storage, sent over HTTP.
- from frontend if you are uploading a file like this

```html
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>
```

(observe it's not react, browser is handling file upload) server will receive this file on `/profile` route as a POST request of type multipart/form-data (not json)

then Multer can easily access this file with `multer.single('avatar')`.

## EXPRESS - LOGGER MIDDLEWARE

- Configure a middleware called as 'morgan' for express
- Look for docs to learn how to configure it
- Print following data on every single request on server:
  - Method
  - status
  - content-length
  - time taken
  - date
  - http version
  - url accesed
  - newline at the end
- after that try out, already created configurations in morgan
