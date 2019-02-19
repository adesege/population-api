const app = require('./app');

const port = process.env.PORT || 3600;

app.listen(port, () => console.log('Server started on port %d', port));
