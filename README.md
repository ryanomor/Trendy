# Trendy App
![landing-page](public/LandingPage.gif)  
![login-flow](public/LoginFlow.gif)  
![sign-out](public/RemoveSignOutFlow.gif)  
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