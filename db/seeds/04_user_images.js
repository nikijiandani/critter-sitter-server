
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_images').insert([
        {
          user_id: 1,
          image: "https://placedog.net/500/400?id=27"
        },
        {
          user_id: 1,
          image: "https://placedog.net/500/400?id=28"
        },
        {
          user_id: 1,
          image: "https://placedog.net/500/400?id=1"
        },
        {
          user_id: 2,
          image: "https://placedog.net/500/400?id=29"
        },
        {
          user_id: 2,
          image: "https://placedog.net/500/400?id=30"
        },
        {
          user_id: 2,
          image: "https://placedog.net/500/400?id=2"
        },
        {
          user_id: 3,
          image: "https://placedog.net/500/400?id=3"
        },
        {
          user_id: 3,
          image: "https://placedog.net/500/400?id=4"
        },
        {
          user_id: 3,
          image: "https://placedog.net/500/400?id=5"
        },
        {
          user_id: 4,
          image: "https://placedog.net/500/400?id=6"
        },
        {
          user_id: 4,
          image: "https://placedog.net/500/400?id=7"
        },
        {
          user_id: 4,
          image: "https://placedog.net/500/400?id=8"
        },
        {
          user_id: 5,
          image: "https://placedog.net/500/400?id=9"
        },
        {
          user_id: 5,
          image: "https://placedog.net/500/400?id=10"
        },
        {
          user_id: 5,
          image: "https://placedog.net/500/400?id=11"
        },
        {
          user_id: 6,
          image: "https://placedog.net/500/400?id=12"
        },
        {
          user_id: 6,
          image: "https://placedog.net/500/400?id=13"
        },
        {
          user_id: 6,
          image: "https://placedog.net/500/400?id=14"
        },
        {
          user_id: 7,
          image: "https://placedog.net/500/400?id=15"
        },
        {
          user_id: 7,
          image: "https://placedog.net/500/400?id=16"
        },
        {
          user_id: 7,
          image: "https://placedog.net/500/400?id=17"
        },
        {
          user_id: 8,
          image: "https://placedog.net/500/400?id=18"
        },
        {
          user_id: 8,
          image: "https://placedog.net/500/400?id=19"
        },
        {
          user_id: 8,
          image: "https://placedog.net/500/400?id=20"
        },
        {
          user_id: 9,
          image: "https://placedog.net/500/400?id=21"
        },
        {
          user_id: 9,
          image: "https://placedog.net/500/400?id=22"
        },
        {
          user_id: 9,
          image: "https://placedog.net/500/400?id=23"
        },
        {
          user_id: 10,
          image: "https://placedog.net/500/400?id=24"
        },
        {
          user_id: 10,
          image: "https://placedog.net/500/400?id=25"
        },
        {
          user_id: 10,
          image: "https://placedog.net/500/400?id=26"
        }
      ]);
    });
};
