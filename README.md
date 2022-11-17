# zerodeleo
## 💻💻💻 MERN-STACK BOILERPLATE
Follow these easy steps and you will have a fullstack MERN application up and running within 10min.
✅ Basic authentication service
✅ Uploading images to cloudinary

This setup includes managing state asynchronously with useContext OR react-redux.

When I started coding I spent so many hours trying to figure out how to create the perfect work environment for my fullstack applications. How do I get it up and running...?

Here you have my boilerplate for a fully functional MERN-stack application with basic authentication. I use this boilerplate whenever I create my MVPs.
Kudos to Christian Ek for encrypting the password.

### This is a WIP repo.
- TS will be implemented
- ✅ Tailwind will be added
- ✅ the Redux state management will be refactored to use Redux slices
- Etc.

### These are the FAQ that I had which this boilerplate covers:
- How do I deploy my app?
- How do I connect my app to a db?
- How do I manage my db schema?
- How do I manage my state?
- How do I connect my backend with my frontend?
- How do I setup my API?
- Backend routing?
- Frontend routing?
- How do I authenticate a user?

# SETUP
## 1. Setting up mongodb
- Login to mongodb atlas
- Create new project
- Create new cluster
    - Make sure to name cluster before creating it
    - Add authentication to .env file
        - <code>ATLAS_URI="the URI you get when clicking connect after cluster is created"</code>
    - Add 0.0.0.0 IP Address access
- Connect cluster    
## 2. Setting up heroku
- Login to heroku
- Create app
- Connect to GitHub
- Enable automatic deploys
- Add .env variables to heroku config vars
- Add <code>MODE="production"</code> to heroku config vars
## 2. Setting up cloudinary
- Create account on cloudinary and follow their steps
- Add .env variables
- <code>CLOUDINARY_CLOUD_NAME</code>
- <code>CLOUDINARY_API_KEY</code>
- <code>CLOUDINARY_API_SECRET</code>
