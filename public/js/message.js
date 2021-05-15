function addMessages(message) {
	$('#messages').append(`
      <h4> ${message.name} </h4>
      <p>  ${message.text} </p>`);
}

const sendMessage = async (event) => {
	event.preventDefault();

	const name = document.querySelector('#name').value;
	const text = document.querySelector('#message').value;

	socket.emit('message', { name, text });
};

document.querySelector('#send').addEventListener('click', sendMessage);

socket.on('chatMessage', addMessages);
