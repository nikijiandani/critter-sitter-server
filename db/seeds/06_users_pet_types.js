
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
        },
        {
          user_id: 2,
          pet_type_id: 1
        },
        {
          user_id: 2,
          pet_type_id: 2
        },
        {
          user_id: 2,
          pet_type_id: 5
        },
        {
          user_id: 3,
          pet_type_id: 3
        },
        {
          user_id: 3,
          pet_type_id: 4
        },
        {
          user_id: 4,
          pet_type_id: 1
        },
        {
          user_id: 4,
          pet_type_id: 2
        },
        {
          user_id: 5,
          pet_type_id: 1
        },
        {
          user_id: 5,
          pet_type_id: 2
        },
        {
          user_id: 5,
          pet_type_id: 3
        },
        {
          user_id: 6,
          pet_type_id: 1
        },
        {
          user_id: 6,
          pet_type_id: 4
        },
        {
          user_id: 6,
          pet_type_id: 5
        },
        {
          user_id: 7,
          pet_type_id: 1
        },
        {
          user_id: 7,
          pet_type_id: 5
        },
        {
          user_id: 8,
          pet_type_id: 1
        },
        {
          user_id: 8,
          pet_type_id: 2
        },
        {
          user_id: 9,
          pet_type_id: 1
        },
        {
          user_id: 9,
          pet_type_id: 2
        },
        {
          user_id: 10,
          pet_type_id: 1
        },
        {
          user_id: 10,
          pet_type_id: 2
        },
        {
          user_id: 10,
          pet_type_id: 4
        }
      ]);
    });
};
