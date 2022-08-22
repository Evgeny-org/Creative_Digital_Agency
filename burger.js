const hamb = document.querySelector("#hamb")
const popup = document.querySelector("#popup")
const menu_icons = document.querySelector("#menu_icons").cloneNode(1)
const body = document.body


hamb.addEventListener("click", hambHandler)

function hambHandler() {
	popup.classList.toggle("open")
	hamb.classList.toggle("active")
	body.classList.toggle("noscroll")
	popup.appendChild(menu_icons)
}

const links = Array.from(menu_icons.children)

links.forEach((link) => {
	link.addEventListener("click", closeOnClick)
})

function closeOnClick() {
	popup.classList.remove("open")
	hamb.classList.remove("active")
	body.classList.remove("noscroll")
}