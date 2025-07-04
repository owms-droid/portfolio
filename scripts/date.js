// This script displays the current date in a specific format
// using the Intl.DateTimeFormat API for localization.
const full = document.querySelector("#date-time");

const today = new Date();

full.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "long",
	}
).format(today)}</span>`;