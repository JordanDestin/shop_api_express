import 'dotenv/config'
import app from './app.js';
import http from 'http'

app.set('port',process.env.PORT || 8080)
const server =  http.createServer(app);

server.listen(process.env.PORT || 8080);