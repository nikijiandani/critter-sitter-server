
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_pet_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_pet_types').insert([
        {
          user_id: 1,
          pet_type_id: 1
        },
        {
          user_id: 1,
          pet_type_id: 2
        },
        {
          user_id: 1,
          pet_type_id: 3
        }
      ]);
    });
};
