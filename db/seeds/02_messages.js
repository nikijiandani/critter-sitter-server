
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          from_id: 1,
          to_id: 2,
          content: "Hey, I'm looking for a sitter for New Year's eve this year. Are you available?",
          read: true,
          created_at: new Date('December 17, 1995 03:24:00'),
          updated_at: new Date('January 17, 2019 03:24:00')
        },
        {
          from_id: 2,
          to_id: 1,
          content: "Sure! I don't mind. Looks like you're in my area too!",
          read: true,
          created_at: new Date('December 17, 1995 05:24:00'),
          updated_at: new Date('January 17, 2019 05:24:00')
        },
        {
          from_id: 1,
          to_id: 2,
          content: "Great! Talk to you soon! :)",
          read: false,
          created_at: new Date('December 17, 1995 06:24:00'),
          updated_at: new Date('January 17, 2019 06:24:00')
        },
        {
          from_id: 9,
          to_id: 2,
          content: "Hey Lester! I'm looking for a sitter for this coming weekend. Are you available?",
          read: false,
          created_at: new Date('December 17, 1995 03:24:00'),
          updated_at: new Date('January 17, 2019 11:24:00')
        },
        {
          from_id: 3,
          to_id: 2,
          content: "Hello Lester! How did it go last weekend? I sat a cute parrot last weekend. It was awesome!!!",
          read: false,
          created_at: new Date('December 17, 1995 03:24:00'),
          updated_at: new Date('January 17, 2019 10:24:00')
        }
      ]);
    });
};
