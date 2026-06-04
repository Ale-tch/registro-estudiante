const mysql = require('mysql2/promise');

module.exports = async (req, res) => {

    if(req.method !== 'POST'){
        return res.status(405).json({
            mensaje: 'Método no permitido'
        });
    }

    try{

        const connection = await mysql.createConnection({
            host: process.env.MYSQLHOST,
            user: process.env.MYSQLUSER,
            password: process.env.MYSQLPASSWORD,
            database: process.env.MYSQLDATABASE,
            port: process.env.MYSQLPORT
        });

        const {
            nombre,
            apellidoP,
            apellidoM,
            matricula,
            carrera,
            semestre,
            grupo,
            correo,
            fecha,
            hora,
            motivo,
            observaciones
        } = req.body;

        await connection.execute(
            `INSERT INTO estudiantes
            (
                nombre,
                apellido_p,
                apellido_m,
                matricula,
                carrera,
                semestre,
                grupo,
                correo,
                fecha,
                hora,
                motivo,
                observaciones
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                nombre,
                apellidoP,
                apellidoM,
                matricula,
                carrera,
                semestre,
                grupo,
                correo,
                fecha,
                hora,
                motivo,
                observaciones
            ]
        );

        await connection.end();

        res.status(200).json({
            mensaje: 'Registro guardado'
        });

    } catch(error){

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};