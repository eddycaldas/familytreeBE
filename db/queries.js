const knex = require('./')

module.exports = {
  
  parents: {
    getAll: function() {
      return knex('parents');
    },
    getOne: function(id) {
      return knex('parents').where('id', id).first();
    },
    create: function(parents) {
      return knex('parents').insert(parents, 'id').returning('*');
    },
    updated: function(id, parents) {
      return knex('parents').where('id', id).update(parents, '*');
    },
    delete(id) {
      return knex('parents').where('id', id).del();
    },
  },
  
  
  kids: {
    getAll: function() {
      return knex('kids');
    },
    getOne: function(id) {
      return knex('kids').where('id', id).first();
    },
    create: function(kids) {
      return knex('kids').insert(kids, 'id').returning('*');
    },
    updated: function(id, kids) {
      return knex('kids').where('id', id).update(kids, '*');
    },
    delete(id) {
      return knex('kids').where('id', id).del();
    },
  },
  
  parents_kids: {
  getKidsForParents(parents_id) {
    return knex("parents_kids").where({parents_id}).select("kids_id")
      .then((kidss) => {
        return Promise.all(
          kidss.map((kids) => knex("kids").where({id:kids.kids_id}).first()
        ))
      })
  },
  getParentsForKids(kids_id) {
    return knex("parents_kids").where({kids_id}).select("parents_id")
      .then((parentss) => {
        return Promise.all(
          parentss.map((parents) => knex("parents").where({id:parents.parents_id}).first()
        ))
      })
  },
}
  
}