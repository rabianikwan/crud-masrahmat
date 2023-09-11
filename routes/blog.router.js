const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controllers.js");
const { getBlogs } = require("../controllers/blog.controllers")
const db = require("../config/db");
const { v4 } = require("uuid");
const prefix = "/api/v1/blogs"
const tableName = "blogs"
router.get(prefix, async (req, res) => {
try {
    const blog = await db(tableName).select("*")
    return res.json({
        message: "ok",
        blog
    })
    } catch (e) {
        console.log(e)
    }
})
router.post(prefix, async (req, res) => {
    const { title, description, content } = req.body
    console.log(req.body)

    try {
        const blogs = {
            id: v4(),
            title,
            description,
            content
        }
        const blog = await db(tableName).insert(blogs);
        return res.json({
            message: "news created",
            data: blogs
        })
    } catch (e) {
        console.log(e)
    }
})

router.patch(prefix, async (req, res) => {
    const { title, description, content } = req.body
    console.log(req.body)

    try {
        const blogs = {
            id: v4(),
            title,
            description,
            content
        }
        const blog = await db(tableName).insert(blogs);
        return res.json({
            message: "news created",
            data: blogs
        })
    } catch (e) {
        console.log(e)
    }
})

router.post(prefix, (req, res) => {})


module.exports = router;
