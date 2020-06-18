import { Response, Request } from 'express';
import createUser from './services/CreateUser';

export function hello(req: Request, res: Response) {
  const user = createUser({
    name: 'Diego',
    email: 'diego@email.com',
    password: '123',
    techs: [
      'JavaScript',
      { title: 'NodeJs', experience: 100 }
    ]
  });
  return res.json(user);
};