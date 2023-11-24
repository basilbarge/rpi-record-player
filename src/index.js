console.log("In JS");
const searchForm = document.getElementById("searchbar");

searchForm.addEventListener("submit", searchSongs);

async function searchSongs(event) {
	event.preventDefault();
	const results = await fetch(`http://localhost:8080/api/v1/search/${document.getElementById('song').value}`);
	console.log(await results.json());
}

