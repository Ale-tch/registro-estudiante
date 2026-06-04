const mysql = require('mysql2/promise');

module.exports = async (req, res) => {

    try {

        const connection = await mysql.createConnection({
            host: process.env.MYSQLHOST,
            user: process.env.MYSQLUSER,
            password: process.env.MYSQLPASSWORD,
            database: process.env.MYSQLDATABASE,
            port: process.env.MYSQLPORT
        });

        const [rows] = await connection.execute(
            'SELECT * FROM estudiantes ORDER BY id DESC'
        );

        await connection.end();

        return res.status(200).json(rows);

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }

};