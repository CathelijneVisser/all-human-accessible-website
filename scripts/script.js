const allButtons = document.querySelector(".js-expand");
const menuClosed = document.querySelector(".menu-button");
const menuList = document.querySelector(".menu-content");

// allButtons.forEach((	button) => {
// 	button.addEventListener("click", function () {
// 		console.log(button);
// 		button.parentElement.classList.toggle("expand");
// 	});
// });

console.log(menuClosed);

if (menuClosed) {
	menuClosed.addEventListener("click", () => {
		menuList.classList.toggle("open");
		console.log("test");
	});
}
