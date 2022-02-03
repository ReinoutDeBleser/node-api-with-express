# Title: Node API with express project. 
Inspiration: [Sicco Smit](https://github.com/Sick-0)
Inspiration link: [Use TypeScript to Build a Node API with Express](https://developer.okta.com/blog/2018/11/15/node-express-typescript)

- Repository: `node-api-with-express`
- Type of Challenge: `Self`
- Duration:`1.5 days`
- Deployment strategy: `TBD`
- Team: `solo`

## Description of project/challenge

Sicco mentioned an article he believed would make a good challenge. 

Challenge is summarized in the tutorial as follows. 
"In this tutorial, you are going to create a new Node.js application to keep track of an inventory of guitars. In a nutshell, this tutorial uses Node.js with Express, EJS, and PostgreSQL on the backend, Vue, Materialize, and Axios on the frontend, Okta for account registration and authorization, and TypeScript to govern the JavaScripts!" - David Neal 

Goal is to work with these steps, then think of a way to modify or work with the steps to do something different entirely while stil achieveing a nice result. 


## Dependencies/ requirements/ disclaimers considering my own setup. For running the code on your machine: 
Quite a few steps involved but the article details them enormously better than I could for now. Will try to summarize at a later stage. 


## Personal Learning objectives  

- Create an app using Node.js with Express, EJS, and PostgreSQL on the backend 
- Vue, Materialize, and Axios on the frontend, 
- Okta for account registration and authorization, 
- and finally TypeScript to govern the JavaScripts!
- Understanding how a larger project is build from scratch and how to look at how the files are structured. 
 

## Strategy

First I wish to get the whole thing up and running. There are quite a few programs and modules I've never worked with, so it'd be nice to just finish the tutorial for starters. I don't have all too much time so simply experiencing the possibilities while working with more advanced concepts than I'm used to and getting it working would be the primary goal. 
If we get there I'll try and figure out what I could do with it that would be interesting to show or share with others or something that I could use for myself.  


## Log/Self-reflection

#### Day 1: Thursday 16/12/21  

Started in the afternoon after creating a nice Readme template for future use and finishing my previous project with Becode concerning SOLID
14:00 - 17:00 : Trying to go through the described steps in the tutorial.  Ran into some issues I spent a lot of time on due to a rename of my github account. As usual, a simple restart of my machine ende up resolving said issue.  Not before I basically deleted the project and scrapped all my steps and started over though.  This was beneficial because up until that point I had not made a Github repository and this restart allowed me to very effectively log every single step involved in the project.  

#### Day 2 : Friday 17/12/21

09:00 - 10:10: Getting started again. Using Readme template to create readme. Detailing what I've done yesterday. 
10:10 - 11:00: running into issues but starting on something else for a bit

#### Day 3: Tuesday 2/02/22

09:00 - 10:00: Rekindling interest in this project as we're now in the summer pastures before I ran into some trouble and wasn't able to finish it last time due to some bug or error. 
10:00 - 11:00: found a step where in the package.json script order gave a few unexpected results. visually everything seems to be working, now trying to fix the saving of the data to the database  
11:00 - 12:30: running into a weird situation where if i change the script js/main.js  in the guitars.ejs file to js/main.ts that the visual gets mangled and the guitar isn't saved. 

#### Day 4: Thursday 3/02/22

9:55 - 10:30: going over the entire project trying to figure out where things went wrong currently the only issue is that the guitars aren't saved or deleted when respective submits are done. 
10:30 -10:45: rebuilt the docker on a different port with a different layout than suggested in the CLI as i think because of update sit might have changed the syntax


### Lessons learned

- Using Node.js to install Express (which is used to serve web pages and implement an API). 
- Dependencies are easily installed using npm.  
- After that I used node in similar fashion to install TypeScript for my project and added a tsconfig.json to my project for compilation (*transpilation*).  
- Therafter I installed tslint used for *linting* (=is a code analysis tool to alert you to potential problems in your code beyond syntax issues).  
- Using TypeScript declaration files from DefinitelyTyped ( found in opensource repo or original Js library).  
- Installing *Materialize* (=a modern CSS framework based on Google’s Material Design) using Embedded JavaScript Templates (EJS) also done through npm. 
- Adding a build script to the project for copying everything else apart from the JS files to the dist folder.   
- Achieved through installating of modules: ts-node, shelljs, fs-extra, rimraf, npm-run-all & nodemon.  
- Safe environment variable management through dotenv module.
- Easy authentication with Okta,  
  - after creating a free developer account,  
  - installing Okta CLI and enabling and saving Directory>Self-Service-Registration on the Okta Admin Console.  
  - Configure Express to use the Okta OIDC middleware (*OIDC*=OpenId Connect).  
- This should make the Node.js application secure. 
- Understanding that routes need a separate folder. 
- passing the user profile object < userinfo property < userContext object to the views as data to use. 
- using partials in views to create a nav bar. 
- //day2 
- Installing Docker 10:10 - 11:00
- Using Docker to download the latest PostgreSQL container. named the container guitar-db
- Note: If you restart your computer, may need to restart the Docker container. You can do that using the `docker start guitar-db` command.
- Installing the PostgreSQL client module and type declarations 
- adding a build script to initialize the PostgreSQL database. 
- adding api routes to create, query, update and delete guitars. 
- updating the src/routes/index.ts to include the new api module.
- and configuring src/index.ts to parse incoming json data using `app.use( express.json() );`
- 11:00 - : 
- API is ready on to UI:
- Installing and using Vue (for frontend rendering), Axios (for http-calls) and Parcel (for transpiling Ts  & bundling dependencies in a single Js file).
- Am done with the instructions but it doesn't exactly end up looking like the expected result, spending some time reviewing my steps. @ 11:25
- Appears there are some dependency vulnerabilities will ask for input in how to troubleshoot, new to me. 



