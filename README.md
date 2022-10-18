lear
# Zerodeleo

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
