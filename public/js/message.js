const addMessages = async (req, res) => {
	const name = req.name;
	const text = req.text;

	$('#messages').append(`
      <h4> ${name} </h4>
      <p>  ${text} </p>`);
};

const sendMessage = async (event) => {
	event.preventDefault();

	const name = document.querySelector('#name').value;
	const text = document.querySelector('#message').value;
	socket.emit('message', { name, text });
};

document.querySelector('#send').addEventListener('click', sendMessage);

socket.on('chatMessage', addMessages);
