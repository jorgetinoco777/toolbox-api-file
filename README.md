# Project name: toolbox-api-file 

## Toolbox TV - Code Challenge

**Important:** This project works correctly with version `14.21.3`

***

##### DEV INFO
**Name:** Jorge Tinoco

**Email:** jorgeluis238@hotmail.com

**Phone:** +593 9 6764 7864


#
***

##### RUN PROJECT

Go to the directory where you clone the project.

1. Install dependencies

    <code style="font-size: 12px">`$ npm install`</code>

2. Create the `.env` file with the following variables

    >PORT=3000

    >EXTERNAL_API=url external api rest

    >SECRET_KEY=secret key value


3. Run project: node-api-toolbox

    <code style="font-size: 12px">`$ npm start`</code>

<br />

**Important:** This api will be running on port 3000.



***

##### RUN UNIT TEST

Go to the directory where you clone the project.

1. Install dependencies

    <code style="font-size: 12px">`$ npm install`</code>

2. Create the .env file with the following variables

    >PORT=3000
    
    >EXTERNAL_API=url external api rest

    >SECRET_KEY=secret key value

3. Execute unit test

    <code style="font-size: 12px">`$ npm test`</code>    


#
***

#### RUN PROJECT - Docker

Go to the directory where you clone the project.

1. Install dependencies

    <code style="font-size: 12px">$ npm install</code>

2. Create the .env file with the following variables

    >PORT=3000
    
    >EXTERNAL_API=url external api rest

    >SECRET_KEY=secret key value

3. Create docker image

    <code style="font-size: 12px">`$ docker build . -t node-api-file-toolbox:latest`</code>

4. Run docker image 

    <code style="font-size: 12px">`docker run --rm -d -p 3000:3000/tcp node-api-file-toolbox:latest`</code>

5. Open the following url in the browser

    <code>`http://localhost:3000/files/data`</code>

#
***


#### Important!

<span style="font-size: 14px"><b>Message: </b>If you've made it this far, I hope everything worked well. Thank you, I had fun doing this challenge.</span>