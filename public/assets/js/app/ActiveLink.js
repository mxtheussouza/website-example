export const ActiveLink = () => {
	const sections = document.querySelectorAll("section[id]");

	const scrollActive = () => {
		const scrollY = window.pageYOffset;

		sections.forEach(current => {
			const sectionHeight = current.offsetHeight;
			const sectionTop = current.offsetTop - 300;

			const sectionId = current.getAttribute("id");

			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
				document
					.querySelector(".nav-menu a[href*=" + sectionId + "]")
					.classList.add("active-link");
			else
				document
					.querySelector(".nav-menu a[href*=" + sectionId + "]")
					.classList.remove("active-link");
		});
	};

	window.addEventListener("scroll", scrollActive);
};
