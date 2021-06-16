const showHamburgerMenu = () => {
	let x = document.getElementById('navigation-list');
	let y = document.getElementById('hamburger-icon');

	if (x.style.display === 'block') {
		x.style.display = 'none';
		y.style.display = 'block';
	} else {
		x.style.display = 'block';
		y.style.display = 'none';
	}
}
