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
10:10 - 11:00: 

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
- Installing Docker
- Using Docker to download the latest PostgreSQL container.



