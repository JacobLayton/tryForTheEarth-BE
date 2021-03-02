
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          googleId: '2893756295629356429',
          email: 'dingus@dingus.com',
          password: null,
          firstName: 'Dingus',
          lastName: 'Ladong',
          picture: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2014/5/24/1/original_Colleen-Herman-clown-Halloween-makeup-beauty.jpg.rend.hgtvcom.1280.960.suffix/1401383491884.jpeg',
          bio: "Hello Howdy doo",
          token: null
        }
      ]);
    });
};
