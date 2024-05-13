const express = require('express');
const app = express();
const router = require('./router/auth-router');

app.use('/api/auth', router);



const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})