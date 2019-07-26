
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          from_id: 1,   // Dudley
          to_id: 2,     // Lester
          content: "Super responsive! My pet loved Lester. Lester is reliable, friendly, and timely. I’ve rebooked him many times and won’t hesitate to book again in the future.",
          rating: 5,
          created_at: new Date('July 18, 2019 05:24:00'),
          updated_at: new Date('July 18, 2019 05:24:00')
        },
        {
          from_id: 2,   // Lester
          to_id: 4,     // Jude
          content: "I sat Jude's pet last weekend when he was away. Had a good time with the critter.",
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
          content: "I sat Zoe's pet last weekend when she was away. Had a good time with the critter.",
          rating: 4,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 3,
          to_id: 2,
          content: "We were treated like royalty!",
          rating: 3,
          created_at: new Date('July 24, 2019 11:35:00'),
          updated_at: new Date('July 24, 2019 11:35:00')
        },
        {
          from_id: 1,
          to_id: 3,
          content: "Binky loved Lionel! Highly recommended sitter! A++++",
          rating: 2,
          created_at: new Date('July 20, 2019 11:35:00'),
          updated_at: new Date('July 20, 2019 11:35:00')
        },
        {
          from_id: 1,
          to_id: 4,
          content: "I had the pleasure to host Kitty Kitty Kitty. She made a real effort to leave the premises as clean as when she arrived. Would love to have her back!",
          rating: 3,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 1,
          to_id: 5,
          content: "It was a pleasure hosting Chippers and Pippers. They left the apartment clean and tidy! Sincerely and warmly recommended!",
          rating: 5,
          created_at: new Date('July 18, 2019 11:35:00'),
          updated_at: new Date('July 18, 2019 11:35:00')
        },
        {
          from_id: 2,
          to_id: 3,
          content: "Lester was very nice, polite and respectful of our home. You are welcome to sit our critter anytime!",
          rating: 4,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 2,
          to_id: 4,
          content: "Kitty Kitty Kitty followed the rules of the apartment well and was kind. I recommend her to other sitters. I welcome him anytime. Thank you Scooby.",
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
          content: "Simon was an amazing critter sitter. I wish they all were like him. I recommend him to anyone in need of a sitter.",
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
          content: "Chippers and Pippers were great guests who kept the room clean. Thank you Chippers and Pippers, see you again!",
          rating: 3,
          created_at: new Date('July 15, 2019 11:35:00'),
          updated_at: new Date('July 15, 2019 11:35:00')
        },
        {
          from_id: 3,
          to_id: 6,
          content: "Simon is highly recommended. Thank you!",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 3,
          to_id: 7,
          content: "Barky Bark was polite and respectful of our home and belongings. You are welcome back anytime!",
          rating: 4,
          created_at: new Date('July 14, 2019 11:35:00'),
          updated_at: new Date('July 14, 2019 11:35:00')
        },
        {
          from_id: 4,
          to_id: 5,
          content: "I had the pleasure to host Chippers and Pippers. They made a real effort to leave the premises as clean as when they arrived. Would love to have her back!",
          rating: 4,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 5,
          to_id: 6,
          content: "It was a pleasure to have Simon as a critter sitter! He is very welcome next time!",
          rating: 3,
          created_at: new Date('July 10, 2019 11:35:00'),
          updated_at: new Date('July 10, 2019 11:35:00')
        },
        {
          from_id: 5,
          to_id: 7,
          content: "Barky Bark was a great critter who highly respected house rules. Also he cleaned up the bedroom. Highly recommended critter.",
          rating: 2,
          created_at: new Date('July 19, 2019 11:35:00'),
          updated_at: new Date('July 19, 2019 11:35:00')
        },
        {
          from_id: 6,
          to_id: 7,
          content: "It was great sitting Barky Bark. Thanks so much for your stay, it was a pleasure having you!",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 6,
          to_id: 8,
          content: "It was a pleasure hosting Hammy. He is a very lovely critter. We would welcome him back anytime!",
          rating: 4,
          created_at: new Date('July 20, 2019 11:35:00'),
          updated_at: new Date('July 20, 2019 11:35:00')
        },
        {
          from_id: 7,
          to_id: 8,
          content: "Hammy was a very good critter. He was communicative, interesting to spend time with, friendly and very neat. Welcome to come back anytime.",
          rating: 5,
          created_at: new Date('July 21, 2019 11:35:00'),
          updated_at: new Date('July 21, 2019 11:35:00')
        },
        {
          from_id: 7,
          to_id: 9,
          content: "Darren is nice, friendly and communicative. He is respectful of my place and did a good job of looking after Professor Meowington.",
          rating: 4,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 10,
          to_id: 9,
          content: "Zeus loved Darren! Would use him to sit our critter again!",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 8,
          to_id: 9,
          content: "Georgie enjoyed her stay with Darren. He was very friendly and answered all of our questions. I would be more than happy to use him again in the future.",
          rating: 4,
          created_at: new Date('July 18, 2019 11:35:00'),
          updated_at: new Date('July 18, 2019 11:35:00')
        },
        {
          from_id: 7,
          to_id: 10,
          content: "Camren was a perfect critter sitter. I'd use him again anytime!",
          rating: 3,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 2,
          to_id: 10,
          content: "Zeus loved Camren! Would use him to sit our critter again!",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 8,
          to_id: 10,
          content: "Georgie enjoyed her stay with Camren. He was very friendly and answered all of our questions. I would be more than happy to use him again in the future.",
          rating: 4,
          created_at: new Date('July 18, 2019 11:35:00'),
          updated_at: new Date('July 18, 2019 11:35:00')
        },
        {
          from_id: 10,
          to_id: 2,
          content: "Zeus loved Lester! Would use him to sit our critter again!",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 10,
          to_id: 3,
          content: "Georgie enjoyed her stay with Lionel. He was very friendly and answered all of our questions. I would be more than happy to use him again in the future.",
          rating: 4,
          created_at: new Date('July 18, 2019 11:35:00'),
          updated_at: new Date('July 18, 2019 11:35:00')
        },
        {
          from_id: 7,
          to_id: 1,
          content: "Georgie was a perfect critter. I'd host him again anytime!",
          rating: 3,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 10,
          to_id: 1,
          content: "We would like to see Georgie again. You will always be welcome to stay with us.",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 2,
          to_id: 1,
          content: "It was a pleasure hosting Georgie. She was very friendly and left everything exceedingly clean. I would be more than happy to have her again in the future.",
          rating: 4,
          created_at: new Date('July 18, 2019 11:35:00'),
          updated_at: new Date('July 18, 2019 11:35:00')
        },
        {
          from_id: 7,
          to_id: 11,
          content: "Rory was a perfect critter sitter. I'd use him again anytime!",
          rating: 3,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 2,
          to_id: 11,
          content: "Zeus loved Rory! Would use him to sit our critter again!",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 8,
          to_id: 11,
          content: "Georgie enjoyed her stay with Rory. He was very friendly and answered all of our questions. I would be more than happy to use him again in the future.",
          rating: 4,
          created_at: new Date('July 18, 2019 11:35:00'),
          updated_at: new Date('July 18, 2019 11:35:00')
        },
        {
          from_id: 7,
          to_id: 12,
          content: "Norah was a perfect critter sitter. I'd use her again anytime!",
          rating: 3,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 2,
          to_id: 12,
          content: "Zeus loved Norah! Would use her to sit our critter again!",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 8,
          to_id: 12,
          content: "Georgie enjoyed her stay with Norah. She was very friendly and answered all of our questions. I would be more than happy to use her again in the future.",
          rating: 4,
          created_at: new Date('July 18, 2019 11:35:00'),
          updated_at: new Date('July 18, 2019 11:35:00')
        },
        {
          from_id: 7,
          to_id: 13,
          content: "Kelly was a perfect critter sitter. I'd use her again anytime!",
          rating: 3,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 2,
          to_id: 13,
          content: "Zeus loved Kelly! Would use her to sit our critter again!",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 8,
          to_id: 13,
          content: "Georgie enjoyed her stay with Kelly. She was very friendly and answered all of our questions. I would be more than happy to use her again in the future.",
          rating: 4,
          created_at: new Date('July 18, 2019 11:35:00'),
          updated_at: new Date('July 18, 2019 11:35:00')
        },
        {
          from_id: 7,
          to_id: 14,
          content: "Xandra was a perfect critter sitter. I'd use her again anytime!",
          rating: 3,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 2,
          to_id: 14,
          content: "Xandra loved Norah! Would use her to sit our critter again!",
          rating: 5,
          created_at: new Date('July 17, 2019 11:35:00'),
          updated_at: new Date('July 17, 2019 11:35:00')
        },
        {
          from_id: 8,
          to_id: 14,
          content: "Georgie enjoyed her stay with Xandra. She was very friendly and answered all of our questions. I would be more than happy to use her again in the future.",
          rating: 4,
          created_at: new Date('July 18, 2019 11:35:00'),
          updated_at: new Date('July 18, 2019 11:35:00')
        }
      ]);
    });
};
