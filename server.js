const app = require("./app.js");

app.listen(process.env.PORT || 80, () => {
	console.log(`App is listening on port ${process.env.PORT || 80}`);
});