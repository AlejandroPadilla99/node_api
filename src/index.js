const app = require('./server')
require('dotenv').config()

app.listen(3001, () => {
		console.log('server listening on port 3001)');
});
