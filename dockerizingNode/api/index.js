const express=require('express');
const app = express();

app.get('/api', (req, res) => {
    const obj = {
        data: [
            {
                country: 'Germany',
                currency: 'Euro'
            },
            {
                country: 'India',
                currency: 'INR'
            }
        ]
    }
    res.json(obj);
});

app.listen(3001, () => {
    console.log('API server ready at 3001');
});
