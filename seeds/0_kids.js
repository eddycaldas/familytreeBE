
exports.seed = function(knex, Promise) {
  return knex('kids').del()
    .then(function () {
      return knex('kids').insert([
        {
          name: "Katherine Caldas",
          kid_place_of_birth: "Colorado Springs, CO",
          birthday: '11-02-2011'
        },
        {
          name: "Eddie Jr Caldas",
          kid_place_of_birth: "Aurora, CO",
          birthday: '07-14-2001'
          
        }
      ]);
    });
};
