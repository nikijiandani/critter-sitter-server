
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
          content: "We were treated like royalty!",
          rating: 4,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 1,
          to_id: 2,
          content: "Clawford S. Turkeyforth was a great guest who highly respected house rules as well as my neighborhood. Also he cleaned up the bedroom same as it was at check in. Highly recommended critter.",
          rating: 3,
          created_at: new Date('July 24, 2019 11:35:00'),
          updated_at: new Date('July 24, 2019 11:35:00')
        },
        {
          from_id: 1,
          to_id: 3,
          content: "It was a pleasure to welcome Binky. He was very nice and more, very discreet, clean and respectful during his stay. He is very welcome next time!",
          rating: 2,
          created_at: new Date('July 20, 2019 11:35:00'),
          updated_at: new Date('July 20, 2019 11:35:00')
        },
        {
          from_id: 1,
          to_id: 4,
          content: "I had the pleasure to host Paws. She made a real effort to leave the premises as clean as when she arrived. Would love to have her back!",
          rating: 3,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 1,
          to_id: 5,
          content: "It was a pleasure hosting Mr. Wiffles. He left the apartment clean and tidy and was very mindful of the place! Sincerely and warmly recommended!",
          rating: 5,
          created_at: new Date('July 18, 2019 11:35:00'),
          updated_at: new Date('July 18, 2019 11:35:00')
        },
        {
          from_id: 2,
          to_id: 3,
          content: "Lammy was very nice, polite and respectful of our home and belongings. You are welcome back anytime!",
          rating: 4,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 2,
          to_id: 4,
          content: "Scooby followed the rules of the apartment well and was kind. I recommend Scooby to other sitters. I welcome him anytime. Thank you Scooby.",
          rating: 3,
          created_at: new Date('July 19, 2019 11:35:00'),
          updated_at: new Date('July 19, 2019 11:35:00')
        },
        {
          from_id: 2,
          to_id: 5,
          content: "Chippers and Pippers were wonderful guests and left the apartment as clean as it was when they arrived. Definitely recommend Chippers and Pippers to other sitters!",
          rating: 4,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 2,
          to_id: 6,
          content: "Mr. Whiskers was an amazing guest. I wish they all were like him. He left my home immaculately clean. I recommend him to all sitters.",
          rating: 2,
          created_at: new Date('July 21, 2019 11:35:00'),
          updated_at: new Date('July 21, 2019 11:35:00')
        },
        {
          from_id: 3,
          to_id: 4,
          content: "It was really nice to host Kitty Kitty Kitty.I can highly recommended her to any Critter Sitter without any hesitation.",
          rating: 5,
          created_at: new Date('July 20, 2019 11:35:00'),
          updated_at: new Date('July 20, 2019 11:35:00')
        },
        {
          from_id: 3,
          to_id: 5,
          content: "Professor Meowington was a great guest who kept the room clean. He is a very considerate critter. Thank you Professor Meowington, see you again!",
          rating: 3,
          created_at: new Date('July 15, 2019 11:35:00'),
          updated_at: new Date('July 15, 2019 11:35:00')
        },
        {
          from_id: 3,
          to_id: 6,
          content: "Doctor Scruffles was a very nice critter: Quiet, clean and respectful. Highly recommended. Thank you!",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 3,
          to_id: 7,
          content: "Oinker was polite and respectful of our home and belongings. You are welcome back anytime!",
          rating: 4,
          created_at: new Date('July 14, 2019 11:35:00'),
          updated_at: new Date('July 14, 2019 11:35:00')
        },
        {
          from_id: 4,
          to_id: 5,
          content: "I had the pleasure to host Sally Mander. She made a real effort to leave the premises as clean as when she arrived. Would love to have her back!",
          rating: 4,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 5,
          to_id: 6,
          content: "It was a pleasure to welcome Pig Newton. He was very discreet, clean and respectful during his stay. He is very welcome next time!",
          rating: 3,
          created_at: new Date('July 10, 2019 11:35:00'),
          updated_at: new Date('July 10, 2019 11:35:00')
        },
        {
          from_id: 5,
          to_id: 7,
          content: "Barky Bark was a great critter who highly respected house rules as well as my neighborhood. Also he cleaned up the bedroom. Highly recommended critter.",
          rating: 2,
          created_at: new Date('July 19, 2019 11:35:00'),
          updated_at: new Date('July 19, 2019 11:35:00')
        },
        {
          from_id: 6,
          to_id: 7,
          content: "It was great hosting Princess Caroline. She was extremely easy to communicate with! Thanks so much for your stay, it was a pleasure having you!",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 6,
          to_id: 8,
          content: "It was a pleasure hosting Meowycat. He is a very lovely critter. We would welcome him back anytime!",
          rating: 4,
          created_at: new Date('July 20, 2019 11:35:00'),
          updated_at: new Date('July 20, 2019 11:35:00')
        },
        {
          from_id: 7,
          to_id: 8,
          content: "Hammy was a very good critter. He was communicative, friendly, interesting to spend time with just chatting, friendly and very neat. Welcome to come back anytime.",
          rating: 5,
          created_at: new Date('July 21, 2019 11:35:00'),
          updated_at: new Date('July 21, 2019 11:35:00')
        },
        {
          from_id: 7,
          to_id: 9,
          content: "It was really nice to host Arford. He is nice, friendly, communicative and independent. He is respectful of my place and kept it clean and tidy.",
          rating: 4,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 7,
          to_id: 10,
          content: "Oscar was a perfect critter. I'd host him again anytime!",
          rating: 3,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 10,
          to_id: 2,
          content: "We would like to see Zeus again. You will always be welcome to stay with us.",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 10,
          to_id: 3,
          content: "It was a pleasure hosting Georgie. She was very friendly and left everything exceedingly clean. I would be more than happy to have her again in the future.",
          rating: 4,
          created_at: new Date('July 18, 2019 11:35:00'),
          updated_at: new Date('July 18, 2019 11:35:00')
        },
      ]);
    });
};
