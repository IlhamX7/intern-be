# Backend Intern-BE Data with Express.js and MySQL

## Requirements
For running this project please install nodejs and mysql.
NodeJS:
```
node --version
v14.17.6
```
MySQL:
```
mysql --version
mysql  Ver 8.0.27 for macos10.15 on x86_64 (Homebrew)
```

## Getting Started
Install npm package:
```
npm install
```

Config data in file .env:
```
Example:

DB_USERNAME=root
DB_PASSWORD=your_password
DB_HOSTNAME=127.0.0.1
DB_NAME=your_database
DB_DIALECT=mysql
```

Create database specified by configuration:
```
sequelize db:create 
```

Run migrations:
```
npx sequelize-cli db:migrate
```

Run every seeds:
```
npx sequelize-cli db:seed:all
```

Run the server:
```
npm run dev
```

Test example endpoints at postman:
```
http://localhost:3000/users

http://localhost:3000/users/mojombo
```

## Steps :
- Clone this repo
- Install dependencies
- Config setting at .env
- Follow the steps sequelize
- Running project on development 