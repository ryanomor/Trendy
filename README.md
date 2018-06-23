# Trendy App

Trendy is a web app built in a React frontend using Google's Material-UI library and a Java backend built in Spring Boot.  
Trendy is a social media app that allows users to discover new music and add them to their profile. The more new music users discover and add, the more likely they will get recommended to other users who share similar interests in music. And users will be recommended events based on the music in their favorites.  
Here are some examples of different user flows.

## Landing Page
![landing-page](public/LandingPage.gif)  
Landing page flow  
![login-flow](public/LoginFlow.gif)  
Login flow  
![sign-out](public/RemoveSignOutFlow.gif)  
Remove feature & Sign out flow  

## Quick start  
Make sure Docker and NPM are installed on your local computer  
Obtain an API key from [lastfm](https://www.last.fm/api/account/create)  
Create a .env file in the root folder that looks like this:  
``` Javascript
NODE_PATH=./src
REACT_APP_LASTFM_API_KEY=key from lastFM
REACT_APP_LASTFM_SHARED_SECRET=secret from lastFM
```
Save key into your .env file as REACT_APP_LASTFM_API_KEY=yourAPIKey  

cd into spring-boot-monolith folder  
In terminal run: 
```Javascript 
idea build.gradle  
docker-compose up  
```

After this is done, open another window in terminal  
cd to the root directory:  
```Javascript
npm install  
npm start
```