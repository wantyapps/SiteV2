# WIP: SiteV2

## The Official Wantyapps Site written in React

Mission:

- Be user-friendly
  - Include a more "beautiful" NavBar

## Deployment

* Install the required packages with the command `npm install`

* Build the application with `npm run build`

### Running

#### Node

* **Recommended**: Use [nodemon](https://npmjs.com/package/nodemon)
with `npm run build && nodemon server.cjs`

(If you don't have nodemon or don't want to use it: Just use node: `npm 
run build && node server.cjs`)

#### Serve

* Install serve with `npm i -g serve`

* Use the command `serve -s build -l 80` to run the build (with `npm run 
build`)
with Serve on port 80