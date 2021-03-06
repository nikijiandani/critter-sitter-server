
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
          image: "https://placekitten.com/500/400"
        },
        {
          user_id: 2,
          image: "https://images.unsplash.com/photo-1509907902456-5520a36c0fe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        {
          user_id: 2,
          image: "https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        }, 
        {
          user_id: 2,
          image: "https://images.unsplash.com/photo-1469532804526-98aa275b657c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80"
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
        },
        {
          user_id: 11,
          image: "https://placedog.net/500/400?id=27"
        },
        {
          user_id: 11,
          image: "https://placedog.net/500/400?id=28"
        },
        {
          user_id: 11,
          image: "https://placedog.net/500/400?id=29"
        },
        {
          user_id: 12,
          image: "https://placedog.net/500/400?id=30"
        },
        {
          user_id: 12,
          image: "https://placedog.net/500/400?id=31"
        },
        {
          user_id: 12,
          image: "https://placedog.net/500/400?id=32"
        },
        {
          user_id: 13,
          image: "https://placedog.net/500/400?id=33"
        },
        {
          user_id: 13,
          image: "https://placedog.net/500/400?id=34"
        },
        {
          user_id: 13,
          image: "https://placedog.net/500/400?id=35"
        },
        {
          user_id: 14,
          image: "https://placedog.net/500/400?id=36"
        },
        {
          user_id: 14,
          image: "https://placedog.net/500/400?id=37"
        },
        {
          user_id: 14,
          image: "https://placedog.net/500/400?id=38"
        },
        {
          user_id: 15,
          image: "https://placedog.net/500/400?id=39"
        },
        {
          user_id: 15,
          image: "https://placedog.net/500/400?id=40"
        },
        {
          user_id: 15,
          image: "https://placedog.net/500/400?id=41"
        }
      ]);
    });
};
