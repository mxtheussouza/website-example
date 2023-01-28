export const FormSubmit = () => {
	const form = document.querySelector("#contactForm");
	const button = document.querySelector("#btnForm");
	const name = document.getElementById("contactName");
	const subject = document.getElementById("contactSubject");
	const email = document.getElementById("contactEmail");
	const message = document.getElementById("contactMessage");

	const Toast = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 3000,
		iconColor: "white",
		customClass: {
			popup: "colored-toast",
		},
	});

	form.addEventListener("submit", e => {
		e.preventDefault();

		button.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';

		const formData = {
			name: name.value,
			subject: subject.value,
			email: email.value,
			message: message.value,
		};

		const xhr = new XMLHttpRequest();

		xhr.open("POST", "/");
		xhr.setRequestHeader("content-type", "application/json");
		xhr.onload = () => {
			button.innerHTML = '<i class="fas fa-paper-plane"></i>';

			const options = {
				status: "error",
				message: xhr.response,
			};

			if (xhr.status === 200) {
				options.status = "success";

				name.value = "";
				subject.value = "";
				email.value = "";
				message.value = "";
			}

			Toast.fire({
				icon: options.status,
				title: options.message,
			});
		};

		xhr.send(JSON.stringify(formData));
	});
};
