
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pet_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('pet_types').insert([
        {
          name: "Dog",
          icon: "🐶"
        },
        {
          name: "Cat",
          icon: "🐱"
        },
        {
          name: "Bird",
          icon: "🐦"
        },
        {
          name: "Rabbit",
          icon: "🐰"
        },
        {
          name: "Porcupine",
          icon: "🦔"
        },
      ]);
    });
};