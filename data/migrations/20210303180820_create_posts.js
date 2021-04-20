
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
        tbl.enum('category', ['product_reviews', 'lifestyle', 'for_the_home', 'minimalism']).notNull();
        tbl.integer('category_int').notNull();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts')
  };