const path = require('path');
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const hbs = exphbs.create({});

const routes = require('./controllers');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false });

io.on('connection', (socket) => {
	socket.on('message', (msg) => {
		console.log(msg);
		io.emit('chatMessage', msg);
	});
	console.log('a user connected');
});

server.listen(PORT, () => {
	console.log('listening on port');
});
