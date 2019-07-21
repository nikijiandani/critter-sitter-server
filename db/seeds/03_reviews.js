
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          from_id: 1,   // Dudley
          to_id: 2,     // Lester
          content: "Super responsive! My dog loved her walks with Lester. Lester is reliable, friendly, and timely. I’ve rebooked him many times and won’t hesitate to book again in the future.",
          rating: 5,
          created_at: new Date('July 18, 2019 05:24:00'),
          updated_at: new Date('July 18, 2019 05:24:00')
        },
        {
          from_id: 2,   // Lester
          to_id: 4,     // Jude
          content: "I sat Jude's puppy last weekend when he was away. Had a good time with the critter",
          rating: 4,
          created_at: new Date('July 19, 2019 07:45:00'),
          updated_at: new Date('July 19, 2019 07:45:00')
        },
        {
          from_id: 7,   // Reid
          to_id: 3,     // Lionel
          content: "Mia always has an amazing time with Lionel and enjoys all the cuddles. Lionel is very accommodating to our requests. Friendly and good service .",
          rating: 5,
          created_at: new Date('July 19, 2019 09:15:00'),
          updated_at: new Date('July 19, 2019 09:15:00')
        },
        {
          from_id: 6,   // Simeon
          to_id: 8,     // Zoe
          content: "I sat Zoe's puppy last weekend when he was away. Had a good time with the critter",
          rating: 4,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
      ]);
    });
};