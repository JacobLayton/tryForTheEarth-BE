
exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", table => {
      table.increments("id").unsigned().primary();
      table.string("googleId").notNull();;
      table.string("email").unique().notNull();;
      table.string("password");
      table.string("firstName");
      table.string("lastName");
      table.string("picture");
      table.text("bio");
      table.string("token");
    });
  };

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};

