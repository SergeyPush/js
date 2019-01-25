const root = document.querySelector("#root");

//  header, aside, main, section, article, footer

const home = "Home";
const contacts = "Contacts";
const about = "About";
const header = "Header"
const section = "Section title";
const article = "Article title";


root.innerHTML = `<ul>
<li><a href="#">${home}</a></li>
<li><a href="#">${contacts}</a></li>
<li><a href="#">${about}</a></li>
</ul>`;

root.innerHTML += `<section>
	<h2>${section}</h2>
	<article>
		${article}
	</article>
</section><br />`;

root.insertAdjacentHTML("beforebegin", `<div>${header}</div>`);
root.insertAdjacentHTML("afterbegin", `<h1>Hello World</h1>`);
root.insertAdjacentHTML("beforeend", `<footer>Footer</footer>`);
