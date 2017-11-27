
exports.up = function(knex, Promise) {
  return knex.schema.createTable('kids', function(table) {
    table.increments()
    table.text('name')
    table.text('kid_place_of_birth')
    table.date('birthday')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('kids')
};
