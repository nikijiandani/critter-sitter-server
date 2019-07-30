
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          from_id: 1,
          to_id: 2,
          content: "Hey, I'm looking for a dog sitter for this weekend. Are you available on both Saturday and Sunday?",
          read: true,
          created_at: new Date('July 30, 2019 12:24:00'),
          updated_at: new Date('July 30, 2019 12:24:00')
        },
        {
          from_id: 2,
          to_id: 1,
          content: "Sure! I don't mind. What kind of dog do you have?",
          read: true,
          created_at: new Date('July 30, 2019 12:30:00'),
          updated_at: new Date('July 30, 2019 12:30:00')
        },
        {
          from_id: 1,
          to_id: 2,
          content: "Georgie is a spitz. How much do you charge?",
          read: false,
          created_at: new Date('July 30, 2019 12:35:00'),
          updated_at: new Date('July 30, 2019 12:35:00')
        },
        {
          from_id: 3,
          to_id: 4,
          content: "Hey, I'm looking for a sitter for New Year's eve this year. Are you available?",
          read: true,
          created_at: new Date('December 17, 1995 03:24:00'),
          updated_at: new Date('January 17, 2019 03:24:00')
        },
        {
          from_id: 4,
          to_id: 3,
          content: "Sure! I don't mind. Looks like you're in my area too!",
          read: true,
          created_at: new Date('December 17, 1995 05:24:00'),
          updated_at: new Date('January 17, 2019 05:24:00')
        },
        {
          from_id: 3,
          to_id: 4,
          content: "Great! Talk to you soon! :)",
          read: false,
          created_at: new Date('December 17, 1995 06:24:00'),
          updated_at: new Date('January 17, 2019 06:24:00')
        },
        {
          from_id: 5,
          to_id: 6,
          content: "Hey, I'm looking for a sitter for New Year's eve this year. Are you available?",
          read: true,
          created_at: new Date('December 17, 1995 03:24:00'),
          updated_at: new Date('January 17, 2019 03:24:00')
        },
        {
          from_id: 6,
          to_id: 5,
          content: "Sure! I don't mind. Looks like you're in my area too!",
          read: true,
          created_at: new Date('December 17, 1995 05:24:00'),
          updated_at: new Date('January 17, 2019 05:24:00')
        },
        {
          from_id: 5,
          to_id: 6,
          content: "Great! Talk to you soon! :)",
          read: false,
          created_at: new Date('December 17, 1995 06:24:00'),
          updated_at: new Date('January 17, 2019 06:24:00')
        },
        {
          from_id: 7,
          to_id: 8,
          content: "Hey, I'm looking for a sitter for New Year's eve this year. Are you available?",
          read: true,
          created_at: new Date('December 17, 1995 03:24:00'),
          updated_at: new Date('January 17, 2019 03:24:00')
        },
        {
          from_id: 8,
          to_id: 7,
          content: "Sure! I don't mind. Looks like you're in my area too!",
          read: true,
          created_at: new Date('December 17, 1995 05:24:00'),
          updated_at: new Date('January 17, 2019 05:24:00')
        },
        {
          from_id: 7,
          to_id: 8,
          content: "Great! Talk to you soon! :)",
          read: false,
          created_at: new Date('December 17, 1995 06:24:00'),
          updated_at: new Date('January 17, 2019 06:24:00')
        },
        {
          from_id: 9,
          to_id: 10,
          content: "Hey, I'm looking for a sitter for New Year's eve this year. Are you available?",
          read: true,
          created_at: new Date('December 17, 1995 03:24:00'),
          updated_at: new Date('January 17, 2019 03:24:00')
        },
        {
          from_id: 10,
          to_id: 9,
          content: "Sure! I don't mind. Looks like you're in my area too!",
          read: true,
          created_at: new Date('December 17, 1995 05:24:00'),
          updated_at: new Date('January 17, 2019 05:24:00')
        },
        {
          from_id: 9,
          to_id: 10,
          content: "Great! Talk to you soon! :)",
          read: false,
          created_at: new Date('December 17, 1995 06:24:00'),
          updated_at: new Date('January 17, 2019 06:24:00')
        },
        {
          from_id: 11,
          to_id: 12,
          content: "Hey, I'm looking for a sitter for New Year's eve this year. Are you available?",
          read: true,
          created_at: new Date('December 17, 1995 03:24:00'),
          updated_at: new Date('January 17, 2019 03:24:00')
        },
        {
          from_id: 12,
          to_id: 11,
          content: "Sure! I don't mind. Looks like you're in my area too!",
          read: true,
          created_at: new Date('December 17, 1995 05:24:00'),
          updated_at: new Date('January 17, 2019 05:24:00')
        },
        {
          from_id: 11,
          to_id: 12,
          content: "Great! Talk to you soon! :)",
          read: false,
          created_at: new Date('December 17, 1995 06:24:00'),
          updated_at: new Date('January 17, 2019 06:24:00')
        },
        {
          from_id: 13,
          to_id: 14,
          content: "Hey, I'm looking for a sitter for New Year's eve this year. Are you available?",
          read: true,
          created_at: new Date('December 17, 1995 03:24:00'),
          updated_at: new Date('January 17, 2019 03:24:00')
        },
        {
          from_id: 14,
          to_id: 13,
          content: "Sure! I don't mind. Looks like you're in my area too!",
          read: true,
          created_at: new Date('December 17, 1995 05:24:00'),
          updated_at: new Date('January 17, 2019 05:24:00')
        },
        {
          from_id: 13,
          to_id: 14,
          content: "Great! Talk to you soon! :)",
          read: false,
          created_at: new Date('December 17, 1995 06:24:00'),
          updated_at: new Date('January 17, 2019 06:24:00')
        }
      ]);
    });
};
