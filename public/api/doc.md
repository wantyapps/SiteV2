# The Wantyapps API Documentation

## Basics

To log in to the API, add the following headers to the requests:

`username: wantyapps`

`password: password`

If you did not use the correct values, then the api request will response with the JSON object below:

```json
{
	"success": false,
	"error": "Username or password incorrect"
}
```

(This error will show up even if you didn't specify any headers.)

If you did use the correct `username` and `password` headers, you will see this:

```json
{
	"success": true,
	"error": false
}
```

(Notice that when there are no errors, `error` will be `false`.)