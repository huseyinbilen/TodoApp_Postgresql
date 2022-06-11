# Todo App With PostgreSQL
## Starting

### POSTGRESQL CONFIGURATION
<li>1- CREATE DATABASE</li>
<li>2- CREATE TABLE</li>

Category Table
```
CREATE TABLE category (
	ID SERIAL PRIMARY KEY,
	title TEXT UNIQUE,
); 
```
Tasks Table
```
CREATE TABLE tasks (
	ID SERIAL PRIMARY KEY,
	title TEXT UNIQUE NOT NULL,
	description TEXT NOT NULL,
	category INTEGER,
	isFinished BOOLEAN DEFAULT FALSE,
	createdAt TIMESTAMP DEFAULT NOW(),
	FOREIGN KEY (category) REFERENCES category(ID)
);
```
### Node.js
Create .env Files
and paste
```
DB_CONNECTION_STRING=postgresql://YourName:YourPassword@localhost:5432/YourDatabaseName
```
and
```
npm install
```
then
```
npm start
```
App Started on 5000 port