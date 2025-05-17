import {alumnos} from "../constantes/constantes";

export const getAlumnos = async (req, res) => {
    const {rows} = await alumnos.query(
        "SELECT * FROM alumnos",
    );
    console.log("Se muestra la lista de estudiantes")

    res.status(200).json(rows);

};

export const getAlumnosById = async (req, res) => {
    const {cedula} = req.params;
    const {rows} = await alumnos.query("SELECT * FROM alumnos WHERE cedula = $1", [cedula]);
    console.log("Se muestra el estudiante")

    if (rows.length > 0)
        res.status(200).json(rows);
    else
        res.status(404).json({error: "Todo no existe"});
}

export const createAlumno = async (req, res) => {
    try{
        const{nombres, apellidos, edad, materias} = req.body;
        const cedula = 0;

        const {rows} = await alumnos.query(
            "INSERT INTO alumnos (cedula, nombres, apellidos, edad, materias) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [cedula, nombres, apellidos, edad, materias]
        );
        console.log("Se crea el estudiante")

        res.status(201).json(rows[0]);
    }catch(error)
    {
        res.status(500).json({
            mensaje: error.message
        })
    }
}

export const eliminarAlumno = async (req, res) => {
    const {id} = req.params;
    const {rows} = await alumnos.query(
        "DELETE FROM alumnos WHERE id = $1 RETURNING *", [id]);
    console.log("Se ha eliminado el estudiante")

    if (rows.length > 0)
        res.status(200).json(rows);
    else
        res.status(404).json({
            mensaje: "Todo no existe"
        })
}