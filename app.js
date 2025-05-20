import express from "express";
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});


// test Routest
// Get route with sample return
app.get('/api/courses', (req, res) => {
    const courses = ['english','math','science'];
    res.send(courses);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});