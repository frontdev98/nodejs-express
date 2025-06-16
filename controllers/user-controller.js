const pool = require('../db');

class UserController {
    async add(req, res) {
        const {name, surname, age} = req.body;

        const newUser = await pool.query(`INSERT INTO person (name, surname, age) 
                                        VALUES ($1, $2, $3) RETURNING *`, [name, surname, age]);
        console.log(`Created user: ${newUser.rows[0].id} ${newUser.rows[0].name} ${newUser.rows[0].surname}`);

        res.json(newUser.rows);
    }

    async getAll(req, res) {
        const allUsers = await pool.query(`SELECT * FROM person`);

        console.log(`Requested ${allUsers.rows.length} users.`);

        res.send(allUsers.rows);
    }

    async getOne(req, res) {
        const userId = req.params.id;

        const user = await pool.query(`SELECT * FROM person WHERE id=$1`, [userId]);

        console.log(`Requested user ${user.rows[0].id} ${user.rows[0].name} ${user.rows[0].surname}`)

        res.send(user.rows);
    }

    async modify(req, res) {
        const userId = req.params.id;
        const {name, surname, age} = req.body;

        const updatedUser = await pool.query(
            `UPDATE person SET name = $1, 
                                surname = $2, 
                                age = $3 
            WHERE id = $4 RETURNING *`, [name, surname, age, userId]);

        console.log(`Updated user: ${updatedUser.rows[0].id} ${updatedUser.rows[0].name} ${updatedUser.rows[0].surname}`)
        
        res.send(updatedUser.rows);
    }

    async delete(req, res) {
        const userId = req.params.id;

        const deletedUser = await pool.query(`DELETE FROM person WHERE id = $1 RETURNING *`, [userId]);

        console.log(`Remove user ${deletedUser.rows[0].id} ${deletedUser.rows[0].name} ${deletedUser.rows[0].surname}`)

        res.send(deletedUser.rows);
    }
}

const userController = new UserController();

module.exports = userController