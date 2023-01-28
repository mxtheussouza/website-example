export const ToggleButton = () => {
	const icon = document.querySelector(".toggle");
	const nav = document.querySelector("nav");
	const navLink = document.querySelector(".nav-link-mobile");

	nav.addEventListener("click", () => {
		document
			.querySelectorAll(".nav-menu-mobile")
			.forEach(nav => nav.classList.toggle("toggle-show"));

		if (icon.classList.contains("toggle-active")) {
			icon.innerHTML = '<i class="fa fa-angle-down"></i>';
			icon.classList.remove("toggle-active");
		} else {
			icon.innerHTML = '<i class="fa fa-angle-up"> </i>';
			icon.classList.add("toggle-active");
		}
	});

	navLink.addEventListener("click", () => {
		document
			.querySelectorAll(".nav-menu-mobile")
			.forEach(nav => nav.classList.remove("toggle-show"));
	});
};
