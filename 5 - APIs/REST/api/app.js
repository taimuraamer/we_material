const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')
const cors = require('cors')
const postsRouter = require('./routes/posts')

// Middleware
app.use(cors());
app.use(bodyParser.json())
app.use('/posts', postsRouter)


// Routes
app.get('/', (req, res) => {
    res.send("We are on home...")
})

// connect
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => console.log('connected.'))


// listen
app.listen(5000, () => console.log('Connected: http://localhost:5000'));























// componentDidMount() {
//     // Simple POST request with a JSON body using axios
//     const article = { title: 'React POST Request Example' };
//     axios.post('https://reqres.in/api/articles', article)
//         .then(response => this.setState({ articleId: response.data.id }));
// }