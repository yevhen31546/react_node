This is for Datatable CRUD functionality project.
* Looking for a developer to create a simple 
Node.js registration website with records database.<br>
Website must have two main views - Sales and Warranty.
Features must include Adding new entry, editing/updating previous entry, 
attaching files, pagination for main views, 
PDF creation from entry record, searching for records, date format validation *

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br/>

Also Backend is node express.<br/>

## Front end

Create new react project<br/>

### `npx create-react-app client`

Runs the app in the development mode.<br />

### `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.<br />

### `npm install react-bootstrap bootstrap`
Using react bootstrap.

#### `npm install react-bootstrap-table --save`
Using react bootstrap table

## Back end
Create new express project by cmd <br />

### `npx express-generator backend`

Open [http://localhost:9000](http://localhost:9000) to view it in the browser. <br />

### `npm run start` or `npm run dev`


### `Configuring a new route in the Express API`

* On backend/routes, create a sales and warranty.js file <br />
* On the api/app.js file, insert a new route :<br />
app.use('/sales', salesRouter); <br />
app.use('/warranty', warrantyRouter);

#### `npm i multer uuid`
For file uploading, npm multer install <br />

## Connect DB
### `npm install mysql`
Install mysql module



