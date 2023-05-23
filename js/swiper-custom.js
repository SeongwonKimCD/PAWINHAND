var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	autoplay: {
    delay: 2000,
		disableOnInteraction: false
  },
	loop: true,
	watchSlidesProgress: true
});

// document.addEventListener('mouseenter', event => {
// 	const el = event.target;
// 	if (el && el.matches && el.matches('.swiper-container')) {
// 		el.swiper.autoplay.stop();
// 		el.classList.add('swiper-paused');
		
// 		const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
// 		activeNavItem.style.animationPlayState="paused";
// 	}
// }, true);

document.addEventListener('mouseleave', event => {
	const el = event.target;
	if (el && el.matches && el.matches('.swiper-container')) {
		el.swiper.autoplay.start();
		el.classList.remove('swiper-paused');

		const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
		
		activeNavItem.classList.remove('swiper-pagination-bullet-active');

		setTimeout(() => {
			activeNavItem.classList.add('swiper-pagination-bullet-active');
		}, 10);
	}
}, true);