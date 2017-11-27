
exports.seed = function(knex, Promise) {
  return knex('parents_kids').del()
    .then(function () {
      return knex('parents_kids').insert([
        {
          parents_id: knex('parents').where('name', 'Eddy Caldas').select('id'),
          kids_id: knex('kids').where('name', 'Katherine Caldas').select('id'),
        },
        {
          parents_id: knex('parents').where('name', 'Erica Caldas').select('id'),
          kids_id: knex('kids').where('name', 'Katherine Caldas').select('id'),
        },
        {
          parents_id: knex('parents').where('name', 'Eddy Caldas').select('id'),
          kids_id: knex('kids').where('name', 'Eddie Jr Caldas').select('id'),
        },
        {
          parents_id: knex('parents').where('name', 'Erica Caldas').select('id'),
          kids_id: knex('kids').where('name', 'Eddie Jr Caldas').select('id'),
        },
        
      ]);
    });
};


