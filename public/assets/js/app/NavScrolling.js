export const NavScrolling = () => {
	const nav = document.querySelector("nav");

	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 100) nav.classList.add("nav-scrolling");
		else nav.classList.remove("nav-scrolling");
	});
};
