
exports.up = function(knex) {
    return Promise.all([
        knex.schema.table('reviews', function(table) {
            table.timestamps('created_at');
        })
    ])
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.table('reviews', function(table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    ]) 
};