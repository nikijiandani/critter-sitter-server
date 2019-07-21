
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_images').insert([
        {
          user_id: 1,
          image: "https://assurance-chien-et-chat.com/wp-content/uploads/2019/04/_139_Animal-de-compagnie-Wikipedia-Assurance-pour-Chien.jpg"
        },
        {
          user_id: 1,
          image: "https://trupanion.com/-/media/trupanion/images/hero/tablet/hero-dog-cat-tablet.jpg"
        },
        {
          user_id: 2,
          image: "https://i.pinimg.com/736x/70/0d/87/700d870295e07e92412bd8e88560351f--blue-macaws-blue-gold.jpg"
        },
        {
          user_id: 2,
          image: "https://www.thesprucepets.com/thmb/_38eJ8mJ2EHkwi20NxFYg6OB3U4=/2576x2576/smart/filters:no_upscale()/close-up-of-gold-and-blue-macaw-perching-on-tree-962288862-5b50073e46e0fb0037c23c23.jpg"
        }
      ]);
    });
};
