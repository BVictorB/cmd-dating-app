# CreaLove - a CMD Project-Tech dating website
![alt text](https://raw.githubusercontent.com/BVictorB/cmd-dating-app/master/bannerimage.jpg)

This is the github repository for my dating website feature. I decided to make the signup, login and change profile settings part of the dating website. This is my job story: 
> "When I am sitting at home all alone, I want to be able to create an account with ease at a dating website to be able to match with other people and finally find someone so I won't feel alone anymore. I want to be able to do this from anywhere and any device, and also with as little effort as possible."

I decided to create a little bit more after all, I added a lot of small 'nice to have' features, that (in my opinion) really make the feature complete. Here is a list of features:
* Client side RegEx validation on forms
* Placing cookies on the users' device, to keep them signed in even when leaving the website
* A profile page where you can edit your information
* The ability to add an avatar to your profile
* Connection to a database to save all the information/files that users upload
* Different backend validation, for example to make sure that multiple users can't have the same username

To see the live version of this feature, <a href="http://157.245.68.125:1900/" target="_blank">click here</a>.


### Installation
```
$ git clone https://github.com/BVictorB/cmd-dating-app.git .
```
```
$ npm i
```

### Run
```
$ npm run dev
```
localhost:1900 in browser


### Sass
This projects uses sass/scss, the scss is structured in files for each different page and will be structured even further in the future for different components aswell.
To compile the scss to css, run this command in the terminal:
```
$ npm run sass
```

### Extensions
Please refer to my <a href="https://github.com/BVictorB/cmd-dating-app/wiki/Extensions" target="_blank">extensions wiki page</a> to find out more about the extensions that I used while creating this feature. 


### Packages
These are the different packages that I have used to create this feature:

Dependencies:
* body-parser
* connect-mongodb-session
* dotenv
* express
* express-handlebars
* express-session
* mongodb
* multer

Development dependencies:
* eslint
* node-sass
* nodemon


### Sources
Most of the information that I got from the internet and that I used to create this feature, was from the documentation of the different packages. Most of they have great documentation that is really clear and easy to pick up. I will list all the package documentation pages below:
* <a href="https://expressjs.com/en/resources/middleware/body-parser.html" target="_blank">body-parser</a> and <a href="https://www.npmjs.com/package/body-parser" target="_blank">this one</a> 
* <a href="https://www.npmjs.com/package/connect-mongodb-session" target="_blank">connect-mongodb-session</a> 
* <a href="https://www.npmjs.com/package/dotenv" target="_blank">dotenv</a> 
* <a href="https://expressjs.com/en/guide/routing.html" target="_blank">express</a> (express has really in depth documentation, I could basically find everything I needed in there)
* <a href="https://www.npmjs.com/package/express-handlebars" target="_blank">express-handlebars</a> and <a href="https://www.youtube.com/watch?v=1srD3Mdvf50" target="_blank">this video</a>
* <a href="https://www.npmjs.com/package/express-session" target="_blank">express-session</a> and <a href="https://www.youtube.com/watch?v=OH6Z0dJ_Huk" target="_blank">this video</a>
* <a href="https://docs.mongodb.com/" target="_blank">mongodb</a> and <a href="https://www.youtube.com/watch?v=Do_Hsb_Hs3c" target="_blank">this video</a>
* <a href="https://code.tutsplus.com/tutorials/file-upload-with-multer-in-node--cms-32088" target="_blank">multer</a>
* I also got quite some information from the <a href="https://github.com/cmda-bt/be-course-19-20" target="_blank">be-course-19-20 repo</a> and ofcourse the lessons that we got
