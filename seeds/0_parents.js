
exports.seed = function(knex, Promise) {
  return knex('parents').del()
    .then(function () {
      return knex('parents').insert([
        {
          name: "Eddy Caldas",
          place_of_birth: "Lima, Peru",
          birthday: '10-06-1973',
        },
        {
          name: "Erica Caldas",
          place_of_birth: "Ohio, USA",
          birthday: '10-20-1987',
        }
      ]);
    });
};
