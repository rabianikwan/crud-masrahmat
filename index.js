const express = require("express");
const cors = require("cors");
const blogRouter = require("./routes/blog.router.js");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;


app.use(cors("*"));
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

app.get('/', async (req, res) => {
    const articles = await Blog.find().sort({ createdAt: 'desc' })
    res.render('views/index', { Blog: blog })
  })

app.use(blogRouter);

app.listen(PORT, () => {
  console.log(`server runnning on port: ${PORT}`);
});
