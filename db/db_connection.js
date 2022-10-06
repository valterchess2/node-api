const mysql = require('mysql2');


connection = (query, res) => {
    const cnnx = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'manager_db'
    });

    cnnx.query(query, (error, results, fields) => {
        if (error)
            res.json(error);
        else
            res.json(results);
        cnnx.end();
    })
};

module.exports = { connection }
