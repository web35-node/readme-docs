# Create Backend Server

<h2>This is just an outline to get things going for a basic BackEnd.</h2>
<p>In some places you will see () if you look at the actual readme doc in a editor you will see that there may be more inside them.  These are just placeholders</p>

# Table of Conents

<a href="#step1">Step 1: Initialize your project</a><br>
<a href="#step2">Step 2: Adding Dependencies</a><br>
<a href="#step3">Step 3: .gitignore</a><br>
<a href="#step4">Step 4: Edit your package.json file</a><br>
<a href="#step5">Step 5: index.js</a><br>
<a href="#step6">Step 6: server.js</a><br>
<a href="#step7">Step 7: </a><br>


<h2 id='step1' style='font-weight:bold; text-decoration:underline'>Step 1:</h2>

## Initialize your project

<p>In your terminal</p>
<ol>
<li>npm init</li> or
<li>npm init -y</li>
</ol>
<p>This will create your pakage.json file.<br>
#1 will require input from you where you can just hit enter to say yes or change what it says.<br>
#2 will just say yes to everything - no input required</p>

<h2 id='step2' style='font-weight:bold; text-decoration:underline'>Step 2:</h2>

##  Adding Dependencies:
<p>Here is a list of some of the main dependencies you will want/need to install</p>
<p>In your terminal:</p>
<ul>npm intall
<li>nodemon -D = adds as a dev dependencies</li>
<li>cross-env -D</li>
<li>cors = allows you to connect to a react app</li>
<li>express = use of the express library</li>
<li>knex = the sql library</li>
<li>sqlite3 = another part of sql</li>
<li>dotenv = environment module</li>
<li>bcryptjs = password/auth</li>
<li>connect-session-knex</li>
<li>helmet</li>
<li>knex-cleaner</li>
<li>pg</li>
<li>express-session</li>
<li>jsonwebtoken</li>
</ul>

### optional dependencies

<ul>
<li>shortid = creates unique id's</li>
</ul>

<h2 id='step3' style='font-weight:bold; text-decoration:underline'>Step 3:</h2>

## .gitignore:

<p>In your terminal</p>
<p>npx gitignore node
<ul>
<li>creates the .gitignore file</li>
<li>This file is important as there are certain things used locally that you do not want to be pushed to github or seen publicly</li>
</ul>
</p>

<h2 id='step4' style='font-weight:bold; text-decoration:underline'>Step 4:</h2>

## Edit your package.json file

### Add some code:
<p>The following code should be added to your package.json file in the scripts section</p>

<code>
"server": "nodemon index.js", <br>
"start": "node index.js"
</code>

<h2 id='step5' style='font-weight:bold; text-decoration:underline'>Step 5:</h2>

## index.js
<p>In the main folder (same location as the package.json) create index.js

### Add the following code:

<p>This is the start of your actual server files</p>

<code>
require('dotenv').config();

const server = require('./api/server.js');

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});
</code>

<h2 id='step6' style='font-weight:bold; text-decoration:underline'>Step 6:</h2>

## server.js
<ol>
<li>Create an api folder
  <ul><li>This will contain some of the basic api items</li></ul>
</li>
<li>Create server.js inside this new api folder</li>
</ol>

### Add the following code:
<code>
const express = require("express");

const helmet = require("helmet");

const cors = require("cors");

const (<tips>)Router = require('./routers/(<tips>)Router.js');


const server = express();

server.use(helmet());

server.use(express.json());

server.use(cors());


server.use('/api/(<tips>)', (<tips>)Router);


server.use('/', (req, res) => {
    res.send(`
        <h2>Hey your API is up</h2>
    `);
  });

module.exports = server;
</code>

<h2 id='step7' style='font-weight:bold; text-decoration:underline'>Step 7:</h2>

## Create routers folder and (<routername>)Router.js file(s)
<ul>
<li>this file will have the crud operations</li>

<li>do the basics here first then after adding knex, migragte, seed files create the actual functions.</li>
</ul>

### Enter the following code in each Router file:

<p>** Note = Some of these you will not need in every Router file **</p>

<code>
const express = require('express').Router();
const bcrypt = require('bcryptjs);
const jwt = require('jsonwebtoken');
const secrets = require('../auth/secrets');

const Users = require('./userModel.js');
const validate = require('../auth/validate.js');

// all has /api/(<pathoftablename>) in front

router.get('/', (req, res) => {
  
});

router.get('/:id', (req, res) => {
  
});

router.post('/', (req, res) => {
  
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
</code>

<h2 id='step8' style='font-weight:bold; text-decoration:underline'>Step 8:</h2>

## create a folder for your database and db-config.js file

### Add the following Code:

<code>
const knex = require("knex");

const config = require("../knexfile.js");

const environment = process.env.NODE_ENV || "development";

module.exports = knex(config[environment]);
</code>

## in cli 
knex init =  creates the file needed with some starter information

## knexfile.js

staging section can be deleted for now 

rename the connection filename to the db name './database/(<tablename>).db3',


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/items.db3'
    },
    useNullAsDefault: true;
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './database/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/auth-test.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tablename: 'dbmigrations',
    },
    seeds: {
      directory: './database/seeds'
    },
  },

};



## in cli

knex migrate:make (<yourtablename>)-schema

will create migrations folder and a file with the timestamp_(<yourtablename>)-schema.js

## (<yourtablename>)-schema.js file
exports.up = function(knex, Promise) {
  return knex.schema.createTable('(<tablename>)', tbl => {
      tbl.increments();
      tbl.text('category').unique().notNullable();
      tbl.text('(<fieldname>)').notNullable();
      tbl.text('(<fieldname>)').notNullable();
      tbl.text('(<fieldname>)');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('(<tablename>)');
};

## in cli
create the table
knex migrate:latest

this will create the actual (<tablename>).db3 file in the data folder

### special note  in cli
knex migrate:rollback
this will remove the last migrate:latest change (deleting the table)

knex migrate:make (<tablename>)-(<newfieldname>)
this will allow you to create a  new field if the table is already created and makes a new schema type file.  


### example entries for new file
exports.up = function(knex, Promise) {
     return knex.schema.table('fruits', tbl => {
        tbl.text('color');
    });
 };

 exports.down =  function(knex, Promise) {
     return knex.schema.table('fruits', (tbl) => {
     tbl.dropColumn('color')
 });
 };

 above pulls the old table in and add new field when new migrate latest is run

## in cli
knex seed:make 01-(<tablename>)

creates seed folder and file

##  in 01-(<tablename>).js file
change .del to .truncate
change the 2 'table_name' to '(<tablename>)

remove sample data add your seed data making sure to use the same fields in your schema file.

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('(<tablename>)').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('(<tablename>)').insert([
        {category: 'basics', name: 'Tip #1', info: 'Test Data'},
        {category: 'html', name: "Tip #1", info: "More test data"},
        {category: 'css', name: 'Tip', info: 'Testing', info01: 'testing again'}
      ]);
    });
};

# in cli
knex seed:run

this will add your seed data to the database.  this can be run as many times as you want as it overwrites the data each time.


# (<tablename>)Router.js file

finish filing out the crud operations.  Making sure you have all the requests you anticipate making. 

### Get requests will have more than 1 most of the time:
the whole table
all data pertaining to specific fields could be more than one of these depedning on how you might want to pull the data in the front end

#### sample get requests
router.get('/', (req, res) => {
    db.select("*")
    .from("(<tablename>)")
    .then( <tablename> => res.status(200).json({data: (<tablename>)}))
    .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    db('(<tablename>)')
    .where("id", id)
    .first()
    .then((<tablename>) => res.status(200).json({data: <tablename>}))
    .catch((err) => console.log(err));
});

### Post request
this will typically only have 1 and it is always to the base router path

#### sample post request
router.post('/', (req, res) => {
    const <tblnm>Data = req.body;
    db('<tablename>')
    .insert(<tblnm>Data)
    .then( id => res.status(201).json({data: id}))
    .catch((err) => console.log(err));
});

### Put request
this also typically will only have 1 as well
be sure to specify the path to the field that the front end can see -  id is not always the right field as it is not always pulled buy the front end

#### sample put request
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    db('<tablename>')
    .where("id", id)
    .update(changes)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "record numbers changed:", count});
        } else {
            res.status(404).json({ message: "That id does not exist, can not update record" });
        }
    })
    .catch((err) => console.log(err));
});

### delete request
in most cases you will only want 1 of these as well to ensure that the wrong information is not removed.  having this pulled buy id if the front end does not show it could be a good idea here.

#### sample delete request
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    db('<tablename>')
    .where("id", id)
    .delete()
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "number of Records deleted", count});
        } else {
            res.status(404).json({message: "That is not a valid id. Can not delete"});
        }
    })
    .catch((err) => console.log(err));
});

# Create Front End

## in cli
To create a react app to go with your new server

npx create-react-app <name of app> --use-npm

## Install dependencies
axios
react-router-dom

