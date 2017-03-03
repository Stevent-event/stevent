# Stevent

Capstone 2016 project, Team Ekat  

## Platform   
**M**ongoDB  3.2.8  
**E**xpress  
**A**ngular 2.4.0  
**N**odeJS 6.10.0  

## INSTRUCTIONS FOR DEVELOPERS  

1. Install nodemon and bower: "npm install -g nodemon bower"  

2. Install dependencies: "npm install"  

4. In project directory run "nodemon server"  

5. Open another console window.  

6. In same folder run "npm start"  

7. On browser navigate to localhost:3001 (it should open automatically)  

## INSTRUCTION FOR DEPLOYMENT  

1. Push changes to Heroku  

2. "heroku local" to run local packages, or "heroku open" to open Heroku remote URL  

3. Open localhost:3000 in browser if running local instance  

## Help! I'm stuck! It doesn't work!  

1. Run "sh ./clean-project.sh" to erase all packages and compiled files. Then try again. If it still doesn't work, complain at Slack.  

2. Reinstall everything easily with "sh ./install-project.sh".

## Problems with Google Maps? Can't see it or it doesn't work?

1. Run "npm install angular2-google-maps --save" and "npm install @types/googlemaps --save-dev" to install google maps module
    and TypeScript declaration.
  