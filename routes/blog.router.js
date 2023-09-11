const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controllers.js");
const { getBlogs } = require("../controllers/blog.controllers")
const db = require("../config/db");
const { v4 } = require("uuid");
const prefix = "/api/v1/blogs"
const tableName = "blogs"

const getById = async (id) => {
    return db(tableName)
        .where({
            id : id
        }).select()
}

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

router.patch(prefix + "/:id", async (req, res) => {
    const { title, description, content } = req.body
    const { id } = req.params

    try {
        const searchBlog = await getById(id)
        if (!searchBlog) return res.json({
            message: `id not found`
        })
        const blogs = {
            title: title || searchBlog.title,
            description: description|| searchBlog.description,
            content: content|| searchBlog.content
        }
        await db(tableName).where({ id }).update(blogs)
        return res.json({
            message: "news created",
            data: blogs
        })
    } catch (e) {
        console.log(e)
    }
})

router.delete(prefix + "/:id", async (req, res) => {
    const {id} = req.params
    const blog = await getById(id)
    if (!blog) return res.json({
        message: `id not found`
    })
    await db(tableName).where({ id }).delete();
    return res.json({
        message: `blog has been deleted`
    })
})
module.exports = router;
