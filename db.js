const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'vsvirskiy',
    password: '12345678'
});

pool.on('error', (err, client) => {
    console.log(err);
})

module.exports = pool