const allButtons = document.querySelector(".js-expand");
const menuClosed = document.querySelector(".menu-button");
const menuList = document.querySelector(".menu-content");

// allButtons.forEach((button:not(".menu-button")) => {
// 	button.addEventListener("click", function () {
// 		console.log(button);
// 		button.parentElement.classList.toggle("expand");
// 	});
// });

if (menuClosed) {
	menuClosed.addEventListener("click", () => {
		menuList.classList.toggle("open");
	});

	menuList.addEventListener("click", () => {
		menuList.classList.toggle("open");
	});
}
