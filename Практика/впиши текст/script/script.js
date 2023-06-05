let main = document.querySelector('#main');
let links  = main.querySelectorAll('.tab .link a');
		
	for (let link of links) {
		link.addEventListener('click', function(event) {
			let activeTab = main.querySelector('.tab.active');
			if (activeTab) {
				activeTab.classList.remove('active');
			}
			let newTab = link.closest('.tab');
			if (newTab !== activeTab) {
				newTab.classList.add('active');
			}
				
			event.preventDefault();
			});
		}