function addMessages(message) {
	$(
		'#messages'.append(`
      <h4> ${message.name} </h4>
      <p>  ${message.text} </p>`)
	);
}

const sendMessage = async (event) => {
	event.preventDefault();

	const name = document.querySelector('#name').value;
	const text = document.querySelector('#message').value;

	console.log({ name, text });
	const response = await fetch('/api/messages', {
		method: 'POST',
		body: JSON.stringify({ name, text }),
		headers: { 'Content-Type': 'application/json' }
	});
	console.log('clicked');
	console.log(response.body);
	io.emit('message', response.body);
};

document.querySelector('#send').addEventListener('click', sendMessage);

var socket = io();
socket.on('message', addMessages);
