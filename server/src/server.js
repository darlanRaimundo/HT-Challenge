const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.post('/api/cutVideo', (req, res) => { 
    // if(!req.body) {
    //     res.status(400).send("Error: No files found")
    // }

    // const blob = firebase.bucket.file(req.file.filename)

    res.send({ 
        express: 'Hello From Express'
    });
    
});

app.get('/api/mensagem', (req, res) => { 
    res.send({ express: 'Hello From Express teste' });
});

// app.post('/api/cutVideo', (req, res) => {
//     res.send({ express: 'Hello From Express' });
// });

app.listen(port, () => console.log(`Listening on port ${port}`));


