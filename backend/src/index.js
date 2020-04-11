const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */

/**
 * Métodos Http:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de Parâmetros
 * 
 * Query Params: Parãmetros nomeados enviados na rota após "?" (Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * 
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**   
   * Driver : Selec * FROM users
   * Query Builder: table('users').select('*').where()
   */


app.listen(4000);