const client = require('../database');

const usersModels = {
    validateUser: async (user) => {
        const result = await client.query({
            text: 'SELECT users.lastname,users.firstname,users.id,users.email FROM users WHERE email = $1 AND password = $2;',
            values: [user.email, user.password],

        })
        return result.rows[0];

    },



}

module.exports = usersModels