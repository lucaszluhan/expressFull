import { randomUUID } from 'crypto';
import { Request, Response, Router } from 'express';
import { todoList } from '.';

const routes = Router();

routes.post('/todo', (req: Request, res: Response) => {
   const { todo } = req.body;
   const newTodo = { todo, id: randomUUID() };
   todoList.push(newTodo);
   return res.json(newTodo);
});

routes.get('/todo', (_, res: Response) => {
   return res.json(todoList);
});

routes.delete('/todo/:id', (req: Request, res: Response) => {
   const { id } = req.params;
   const index = todoList.findIndex((todo) => todo.id == id);
   todoList.splice(index, 1);
   return res.json(todoList);
});

routes.put('/todo/:id', (req: Request, res: Response) => {
   const { id } = req.params;
   const { todo } = req.body;
   const index = todoList.findIndex((todo) => todo.id == id);
   todoList[index].todo = todo;
   return res.json(todoList[index]);
});

export default routes;
