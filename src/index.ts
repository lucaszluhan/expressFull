import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(routes);
// Criar uma lista - todo:string
// listar todos

interface TodoProps {
   todo: any;
   id: string;
}

export let todoList: TodoProps[] = [];

const port = 8085;
app.listen(port, () => console.log(`🚀 App rodando na porta ${port} 🚀`));
