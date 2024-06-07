const client = require('../database');

const dataModels = {
    async getAllCoffees() {
        const result = await client.query('SELECT coffee.*, category.category FROM coffee JOIN category ON coffee.category_id = category.id;');
        return result.rows;
    },

    async get3LastCoffees() {
        const result = await client.query('SELECT coffee.*, category.category FROM coffee JOIN category ON coffee.category_id = category.id ORDER BY date desc LIMIT 3;');
        return result.rows;
    },

    async getOneCoffee(id) {
        const result = await client.query({
            text: 'SELECT coffee.*, category.category FROM coffee JOIN category ON coffee.category_id = category.id GROUP BY coffee.id, category.category HAVING coffee.id = $1;',
            values: [id],
        });
        return result.rows[0];
    },

    async getCoffeesByCategory(categoryId) {
        const result = await client.query({
            text: 'SELECT coffee.*, category.category FROM coffee JOIN category ON coffee.category_id = category.id WHERE category.id = $1;',
            values: [categoryId],
        });
        return result.rows;
    },

    async getAllCategory() {
        const result = await client.query('SELECT * FROM category;');
        return result.rows;
    },

};

module.exports = dataModels;