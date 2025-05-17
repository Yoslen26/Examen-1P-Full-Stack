import {Router} from 'express';
import {createAlumno, eliminarAlumno, getAlumnos, getAlumnosById} from "../controllers/todo-controllers";

const routerAlumnos = Router();

routerAlumnos.get('/alumnos', getAlumnos);

routerAlumnos.get('/alumnos/:id', getAlumnosById);

routerAlumnos.post('/alumnos', createAlumno);

routerAlumnos.delete('/alumnos/:id', eliminarAlumno);

export default routerAlumnos;