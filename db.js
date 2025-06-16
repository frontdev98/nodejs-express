const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'vsvirskiy',
    password: '12345678'
});


module.exports = pool