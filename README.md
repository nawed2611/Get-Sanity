<h1 align="center">Get Sanity</h1>

<p align="center">
  <img src="https://user-images.githubusercontent.com/83456083/174928173-b7dbf685-62b8-40ea-874b-3c95e3e76238.png" />
</p>

## Introduction
GetSanity is an app that allows a user to tell about their day and detects in which mood they are in. It also helps to detect users who might be suffering due to some mental illness and guides them. This app is built with React and Flask backend with integration of Kommprehend's API and a KNN Machine Learning model

## Folder Structure
1. This app follows a mono-repo structure i.e, Front-End and Back-End is hosted on the same repository
2.  It uses Tailwind CSS, Material UI for building the client side of the project
3. The App uses Auth0 login method to keep it secure

## How to run this app

1. Fork and Clone the repository from GitHub
2. Install required packages
3. Switch to the backend directory and install required packages through pip
  ```
    cd backend && pip install
   ```
4. Switch to the frotend repository and install required packages through npm
   ```
    cd .. 
    cd client
    npm install
   ```
5. Run the Flask backend in its directory
  ```
    python -m flask run
  ```
6. Run the React frontend built using Vite
  ```
  npm run dev
  ```
7. Open  ```http://localhost:3000``` and voila!
