export default class Game {
	fetchEvents() {
		return Promise.resolve(fetch('/api/events')
		.then((response) => {
			if (response.ok) return response.json();
			throw new Error("No Game data!");
		})
		.then((data) => {
			return data;
		})
		.catch(function(error) {
  			console.log('There has been a problem with your fetch operation: ' + error.message);
		}));
	}
}