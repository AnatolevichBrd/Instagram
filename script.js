

let tabNav = Array.from(document.getElementsByClassName('page__gallaty-item'));
let tabContent = Array.from(document.getElementsByClassName('page__gallary-block'));
let tabName;

function tab() {

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav)
	});

	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('is-active');
		});
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
	}

	function selectTabContent(tabName) {
		tabContent.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
		})
	}

};

tab();




//Старый вариант через querySelectorAll
//let tabNav = document.querySelectorAll('.page__gallaty-item');
//let tabContent = document.querySelectorAll('.page__gallary-block');
//let tabName;
//
//function tab() {
//
//	tabNav.forEach(item => {
//		item.addEventListener('click', selectTabNav)
//	});
//
//	function selectTabNav() {
//		tabNav.forEach(item => {
//			item.classList.remove('is-active');
//		});
//		this.classList.add('is-active');
//		tabName = this.getAttribute('data-tab-name');
//		selectTabContent(tabName);
//	}
//
//	function selectTabContent(tabName) {
//		tabContent.forEach(item => {
//			item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
//		})
//	}
//
//};
//
//tab();
