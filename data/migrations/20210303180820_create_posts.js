
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', function(tbl) {
        tbl.increments('id');
        tbl.date('created_date').notNull();
        tbl.date('updated_date').nullable();
        tbl.date('deleted_date').nullable();
  
        tbl.string('title').notNull();
        tbl.text('image_url').notNull();
        tbl.text('blurb').notNull();
        tbl.text('content').notNull();
        tbl.enum('category', ['minimalism', 'lifestyle', 'forthehome']).notNull();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts')
  };