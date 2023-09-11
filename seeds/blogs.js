const { v4 } = require("uuid");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex){
    // Deletes ALL existing entries
    await knex("blogs").insert([
        // Insert new menus
        {
            "id" : v4(),
            "title": "Berita",
            "description": "Berita Utama",
            "content": "Berita Utama Hari ini"
        }
        ])
}