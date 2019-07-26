exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          role: 1,
          first_name: "Dudley",
          last_name: "Maggio",
          email: "Dudley5@gmail.com",
          phone_number: "416-299-4341",
          avatar: "https://randomuser.me/api/portraits/men/27.jpg",
          postal_code: "M4L 1V3",
          street_address: "500 Kingston Rd",
          city: "Toronto",
          bio: "When I go on vacation, I miss my animals more than my friends!"
        },
        {
          role: 2,
          first_name: "Lester",
          last_name: "Heathcote",
          email: "Lester35@yahoo.ca",
          phone_number: "416-021-1358",
          avatar: "https://randomuser.me/api/portraits/men/87.jpg",
          postal_code: "M5M 1W4",
          street_address: "315 St Germain Ave",
          city: "Toronto",
          bio: "I love all animals!"
        },
        {
          role: 2,
          first_name: "Lionel",
          last_name: "Oberbrunner",
          email: "Lionel.Oberbrunner3@yahoo.ca",
          phone_number: "647-689-1178",
          avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          postal_code: "M4V 2Z2",
          street_address: "48 St Clair Ave W",
          city: "Toronto",
          bio: "When I go on vacation, I miss my animals more than my friends!"
        },
        {
          role: 1,
          first_name: "Jude",
          last_name: "Schmidt",
          email: "Jude63@hotmail.com",
          phone_number: "416-699-4610",
          avatar: "https://randomuser.me/api/portraits/men/54.jpg",
          postal_code: "M4E 3X9",
          street_address: "59 Belleville St",
          city: "Toronto",
          bio: "What do dogs eat at the movies? Pup-eroni pizza and pup-corn!"
        },
        {
          role: 1,
          first_name: "Haley",
          last_name: "Witting",
          email: "Haley4@yahoo.ca",
          phone_number: "416-698-9608",
          avatar: "https://randomuser.me/api/portraits/women/8.jpg",
          postal_code: "M3C 4A1",
          street_address: "5 Wilket Creek Rd",
          city: "Toronto",
          bio: "No matter how bad of a day you have, pets are there to greet you and make you feel better."
        },
        {
          role: 2,
          first_name: "Simon",
          last_name: "Homenick",
          email: "Simeon_Homenick15@hotmail.com",
          phone_number: "416-699-3028",
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          postal_code: "M4J 1K5",
          street_address: "10 Hazelwood Ave",
          city: "Toronto",
          bio: "I love animals because they're amazing!"
        },
        {
          role: 1,
          first_name: "Reid",
          last_name: "Huel",
          email: "Reid52@yahoo.ca",
          phone_number: "416-698-9098",
          avatar: "https://randomuser.me/api/portraits/men/90.jpg",
          postal_code: "M1L 2R9",
          street_address: "154 Pitt Avenue",
          city: "Toronto",
          bio: "Until one has loved an animal, a part of one's soul remains unawakened."
        },
        {
          role: 1,
          first_name: "Zoe",
          last_name: "Satterfield",
          email: "Zoe50@hotmail.com",
          phone_number: "416-699-0791",
          avatar: "https://randomuser.me/api/portraits/women/50.jpg",
          postal_code: "M4H 1H4",
          street_address: "16 Thorncliffe Park Dr",
          city: "Toronto",
          bio: "My cat loves to drive my car. It's a Furrari!"
        },
        {
          role: 2,
          first_name: "Darren",
          last_name: "Collins",
          email: "Darren.Collins87@gmail.com",
          phone_number: "416-698-5039",
          avatar: "https://randomuser.me/api/portraits/men/43.jpg",
          postal_code: "M6H 4B2",
          street_address: "997 Dufferin St",
          city: "Toronto",
          bio: "Pigs are the best! They're playful, friendly, sensitive, and intelligent animals. And they will play ball with you!"
        },
        {
          role: 2,
          first_name: "Camren",
          last_name: "Zulauf",
          email: "Camren.Zulauf19@gmail.com",
          phone_number: "416-929-4598",
          avatar: "https://randomuser.me/api/portraits/men/12.jpg",
          postal_code: "M5A 2X5",
          street_address: "304 Berkeley St",
          city: "Toronto",
          bio: "The truth I do not stretch or shove When I state that the dog is full of love. I’ve also found, by actual test, A wet dog is the lovingest."
        },
        {
          role: 2,
          first_name: "Rory",
          last_name: "Cardenas",
          email: "Rory.Cardenas19@gmail.com",
          phone_number: "416-929-4598",
          avatar: "https://randomuser.me/api/portraits/men/72.jpg",
          postal_code: "M6C 2S1",
          street_address: "87 Kenwood Ave",
          city: "Toronto",
          bio: "The early bird gets the worm, but the second mouse gets the cheese."
        },
        {
          role: 2,
          first_name: "Norah",
          last_name: "Graham",
          email: "Norah.Graham@gmail.com",
          phone_number: "416-929-4598",
          avatar: "https://randomuser.me/api/portraits/women/89.jpg",
          postal_code: "M4G 3G7",
          street_address: "79 Donegall Dr",
          city: "Toronto",
          bio: "Oh?! Where do I start?! Well, I love animals because: They are brilliant company."
        },
        {
          role: 2,
          first_name: "Kelly",
          last_name: "Vaughn",
          email: "Kelly.Vaughn19@gmail.com",
          phone_number: "416-929-4598",
          avatar: "https://randomuser.me/api/portraits/women/17.jpg",
          postal_code: "M4C 5A4",
          street_address: "8 Newman Ave",
          city: "Toronto",
          bio: " I mean, I love dogs and cats and horses but I hate cockroaches and centipedes!"
        },
        {
          role: 2,
          first_name: "Xandra",
          last_name: "Arnold",
          email: "Xandra Arnold@gmail.com",
          phone_number: "416-929-4598",
          avatar: "https://randomuser.me/api/portraits/women/26.jpg",
          postal_code: "M4B 3N7",
          street_address: "17 Guillet St",
          city: "Toronto",
          bio: "I love pets because they give unconditional love and are always willing to please you."
        },
        {
          role: 2,
          first_name: "Irene",
          last_name: "Middleton",
          email: "Irene.Middleton19@gmail.com",
          phone_number: "416-929-4598",
          avatar: "https://randomuser.me/api/portraits/women/36.jpg",
          postal_code: "M6B 1Y1",
          street_address: "160 Hillmount Ave",
          city: "Toronto",
          bio: "There is nothing like the love of a pet!"
        }
      ]);
    })
    .then(function () {
      // update user records with home locations
      return knex.raw(
        'UPDATE users AS u SET \
          home_coords = c.home_coords \
        FROM (VALUES \
            (ST_SetSRID(ST_MakePoint(-79.3049261, 43.6779947), 4326), 1), \
            (ST_SetSRID(ST_MakePoint(-79.4160545, 43.7295661), 4326), 2), \
            (ST_SetSRID(ST_MakePoint(-79.3983443, 43.6878955), 4326), 3), \
            (ST_SetSRID(ST_MakePoint(-79.2910402, 43.6869824), 4326), 4), \
            (ST_SetSRID(ST_MakePoint(-79.334758, 43.719269), 4326), 5), \
            (ST_SetSRID(ST_MakePoint(-79.343914, 43.678392), 4326), 6), \
            (ST_SetSRID(ST_MakePoint(-79.2956429, 43.7084217), 4326), 7), \
            (ST_SetSRID(ST_MakePoint(-79.3518781, 43.703921), 4326), 8), \
            (ST_SetSRID(ST_MakePoint(-79.434796, 43.659224), 4326), 9), \
            (ST_SetSRID(ST_MakePoint(-79.3702709, 43.6602683), 4326), 10), \
            (ST_SetSRID(ST_MakePoint(-79.4234175, 43.6852409), 4326), 11), \
            (ST_SetSRID(ST_MakePoint(-79.3763089, 43.7071168), 4326), 12), \
            (ST_SetSRID(ST_MakePoint(-79.301626, 43.6927976), 4326), 13), \
            (ST_SetSRID(ST_MakePoint(-79.3065757, 43.715468), 4326), 14), \
            (ST_SetSRID(ST_MakePoint(-79.4401732, 43.7092055), 4326), 15) \
        ) as c(home_coords, id) \
        where c.id = u.id'
      )
    })

};
