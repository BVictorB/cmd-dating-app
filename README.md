# cmd-dating-app
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
```bash
$ git clone https://github.com/BVictorB/cmd-dating-app.git .
```
```bash
$ npm i
```

### Run
```bash
$ npm run dev
```
localhost:1900 in browser

### Sass
This projects uses sass/scss, the scss is structured in files for each different page and will be structured even further in the future for different components aswell.
To compile the scss to css, run this command in the terminal:
```bash
$ npm run sass
```

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
