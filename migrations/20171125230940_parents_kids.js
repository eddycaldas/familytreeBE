exports.up = function(knex, Promise) {
    return knex.schema.createTable('parents_kids', (table) => {
      table.integer('kids_id')
      .references('kids.id')
      .onDelete('CASCADE')
      table.integer('parents_id')
      .references('parents.id')
      .onDelete('CASCADE')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('parents_kids')
};
