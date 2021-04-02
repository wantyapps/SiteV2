# WIP: SiteV2

## The Official Wantyapps Site written in React

Mission:

- Be user-friendly
  - Includes a more "beautiful" NavBar

## Deployment

* Install the required packages with the command `npm install`

* Build the application with `yarn build`

### Running

#### Node

* **Recommended**: Use [nodemon](https://npmjs.com/package/nodemon)
with `yarn build && nodemon server.js`

(If you don't have nodemon or don't want to use it: Just use node: `yarn build && node server.js`)

#### Serve

* Install serve with `npm i -g serve`

* Use the command `serve -s build -l 80` to run the build (with `yarn build`)
with Serve on port 80