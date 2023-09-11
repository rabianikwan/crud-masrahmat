const TABLE_NAME = "blogs";

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, function (table) {
    table.uuid("id");
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("content").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable(TABLE_NAME)
};
