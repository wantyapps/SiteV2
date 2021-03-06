# WIP: SiteV2

## The Official Wantyapps Site written in React

Mission:

- Be user-friendly
  - Include a more "beautiful" NavBar

## Deployment

* Install the required packages with the command `npm install`

* Build the application with `npm run build`

### Configuration

* create a `.env` file

* Put:

```env
WANTYAPIUSERNAME=<username>
WANTYAPIPASSWORD=<password>
```

in the `.env` file, replacing `<username>` with the admin user name for the API, and `<password>` with the SHA256 encrypted version of the password for the admin user.

### Running

#### Node

* **Recommended**: Use [nodemon](https://npmjs.com/package/nodemon)
with `npm run build && nodemon server.js`

(If you don't have nodemon or don't want to use it: Just use node: `npm 
run build && node server.js`)

#### Serve

* Install serve with `npm i -g serve`

* Use the command `serve -s build -l 80` to run the build (with `npm run 
build`)
with Serve on port 80

### Subcommands

Here is a short table of subcommands and their meaning

| Command | Summary |
| :-------: | :-------: |
| `d`/`debug` | Enter API Debug Mode |

### API

There is a documentation file (`public/api/doc.html`) that can be viewed with a button on the NavBar.
