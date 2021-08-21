const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.post('/api/cutVideo', (req, res) => { 
    if(!req.file) {
        res.status(400).send("Error: No files found")
    }

    const blob = '5'//firebase.bucket.file(req.body)

    res.send({ 
        express: `Hello From Express ${blob}`
    });
    
});

app.get('/api/mensagem', (req, res) => { 
    res.send({ express: 'Hello From Express teste' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));


