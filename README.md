#  mail-service 
## What is this ?
-  This project is an express application to send emails. 

## How to Run ?
- clone the application using  :- ` git clone `
- create an env file and place it in 📁 root directory of app
   ```
   PORT=<--port you want to run the app on-->
   EMAIL=<--email from which you want to send mail-->
   APP_PASSWORD=<--app password generated from google-->
   ```
   steps to generate app password :- [ 🌐 link](https://hotter.io/docs/email-accounts/app-password-gmail/)

- Run the application either in local env or Docker
 -to run in local env 💻 or docker 🐋

 ## To run in Local env 💻

 - install required modules uisng :- `yarn install`

 - build the javascript files using :- `yarn run build`

 - run the build files using :- `yarn run start`

 ## To run in Docker 🐋

 - use docker build command to build the image ( ❗ please note that you should run this command in 📁 root directory where docker file is present ) )
 - ❗❗❗ **Important** :- While using docker the port is hardcoded in docker file as 5000 so in env file you need to set is as 5000 only to change it you can change port number in dockerfile manually 
```
docker build --tag <image_name>:latest .
```
- run the image either from docker dashboard or using cli 
```
docker run --name <image_name> -d -p 5000:5000 <imagge_name>:latest

```

## API Reference 
### This application contains following api endpoints
### 1)  `/send-mail` 
- This is endpoint accepts only post request , sample allowed input is as following :- 
```
{
    "to": <-- email address of reciver -->,
    "subject": <-- subject of mail -->,
    "text": <-- body of mail -->
}
```
