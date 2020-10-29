# Getting started with a basic Node Express Server

## 1. Create repo
Create a new repository with a readme.md file, gitignore file (chose node from the dropdown), and a Licence (we usually use MIT).

## 2. Clone to local machine and create new Branch
Clone the repository to your local machine and create a new local branch

## 3. npm init (npm init -y)
Your new repository now needs a package.json file. 
1. You have to choices on how to create this file.  
a. npm init =  this will present you with questions you need to hit y for yes or type in what you want.  
b. npm init -y = This will simply answer yes to all the questions.
2. This is what the new package.json file would look like if you do option a above

<code>
{
  "name": "web35-node-api-starter",
  "version": "1.0.0",
  "description": "Starter Server",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "\\"
  },
  "author": "Melissa Longenberger",
  "license": "ISC"
}
</code>

3. This is what the package.json file would look like doing option b above

<code>
{
  "name": "web35-starter-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/melissa-24-TL/web35-starter-server.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/melissa-24-TL/web35-starter-server/issues"
  },
  "homepage": "https://github.com/melissa-24-TL/web35-starter-server#readme"
}
</code>

## 4. npm install express
Much like in react you need node packages to run your server

1. npm i express is the first package or dependency to install

## touch index.js
Now you need your main server file.  Typically we use index.js for this.

1. Simply type touch index.js to create this file. 

## 5. add code to index.js
The following code is for the very beginning of a basic server.  To start the server as written you would type node index.js

<code>
const express = require('express')

const server = express()

server.use(express.json())

server.use('/', (req, res) => {
    res.status(200)
    .json({message: 'Hello World'})
})

const PORT = 5000

server.listen(PORT, () => {
    console.log(`Server is on port: ${PORT}`)
})
</code>

1. Lets break down the code:  
a. Like in react line 1 tells us what dependencies we want to use  
b. Line 2 we are saying from here on out we want to call this a server and we are using express  
c. Line 3 says that we are using json information  
d Line 4 is where we are saying if this is running right (status 200) please print in json format Hello World to the browser  
e. Line 5 here we are setting what the localhost port number we want to use  
f. Finally line 6 is saying when I run this file please listen on that port.

2. If we were to node index.js this file our terminal would say Server is on port: 5000
3. Once it does say this I can now open a browser and naviate to http://localhost:5000 and if it's running right you should see the following:  
a. (In json format) message: "Hello World"

## 6. Down side to the above code
The above code isn't bad, however if you have the server up and running and you make a change to the index.js file the new changes will not be applied to the running server.

1. To fix this we need to do the following:  
a. npm install nodemon -D  
b. Edit package.json file with the following lines:  
<code>
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "server": "nodemon index.js"
  },
</code>

Now every time you make a change to your server files while the server is running they will update the live server.  
1. You will now start your server 1 of the following ways:  
a. npm start  
b. npm run server  
2. You terminal will look different but your browser will not, unless you make changes to the server files. 
3. Every time you make a change to any server files you should see your terminal basically refresh and tell you again that it is on port 5000.  
4. The start line in your package.json file is very important if you want to deploy your app to heroku.
