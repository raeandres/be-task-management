import express from "express";
import routes from "./src/routes/userRoute.js";
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

routes(app);


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