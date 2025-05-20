# be-task-management

A Simple RESTful web service to showcase task management using Node JS and Mongo Db containerized using docker compose

app commands
`npm start` - to start the node app webservice

Docker commands

To build the necessary things:
`docker compose build`

To run a bash inside of the app
`docker compose run —service-ports [service(inside yml)] bash`

To start the docker compose:
`docker compose up`

To gracefully put down docker compose:
`docker compose down`

To delete all container instances
`docker system prune -a`

To install npm dependencies using docker
`docker compose exec web npm install <your-dependencies>`

`docker compose exec web npm install sequelize-cli —save-dev`

`npm install --save-dev sequelize sequelize-cli`
`npx sequelize-cli init`

To access bash of the targeted service [webservice/db]
`docker compose exec db hash`
`docker compose exec web hash`
