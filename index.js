const express = require("express");
const cors = require("cors");
const blogRouter = require("./routes/blog.router.js");
const bodyParser = require("body-parser");

const app = express();

const PORT = 5000;

app.set('view wngine', 'ejs')

app.get('/', async (req, res) => {
    const articles = await Blog.find().sort({ createdAt: 'desc' })
    res.render('views/index', { Blog: blog })
  })

app.use("/blog", blogRouter);
app.use(bodyParser.json());
app.use(cors("*"));

app.listen(PORT, () => {
  console.log(`server runnning on port: ${PORT}`);
});
