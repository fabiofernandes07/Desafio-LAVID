const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

//Metdodos http : get, post, put ,delete

//Tipos de parâmetros
//Query Params: req.query(Filtros, Ordenaçao ,Paginação);
//Route Params:request.params(Identificar um recurso na alteração ou remoção)
//Body: request.body(Dados para criaçãopou alteraçao de um registro)

//MongoDB (Não-Relacional)

routes.get('/list', UserController.index);
routes.post('/register', UserController.store);
routes.post('/authent', UserController.Authent);




module.exports = routes;