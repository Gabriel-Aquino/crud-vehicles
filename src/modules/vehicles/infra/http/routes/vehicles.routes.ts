import express from 'express';

const routes = express();

routes.get('/', (request, response) => response.json({ message: 'Vehicles GET here!' }));

routes.post('/', (request, response) => response.json({ message: 'Vehicles POST here!' }));

routes.put('/', (request, response) => response.json({ message: 'Vehicles PUT here!' }));

routes.delete('/', (request, response) => response.json({ message: 'Vehicles DELETE here!' }));

export default routes;
