import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.listen(5000, () => console.log(`Listening on port 5000.`));