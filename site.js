// Mobile menu toggle — shared across all pages
// Expects elements: #mobile-menu-toggle, #mobile-menu, #mobile-menu-overlay, #icon-bars, #icon-x
const mobileToggle = document.getElementById('mobile-menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const mobileOverlay = document.getElementById('mobile-menu-overlay')
const iconBars = document.getElementById('icon-bars')
const iconX = document.getElementById('icon-x')

if (mobileToggle) {
	mobileToggle.addEventListener('click', () => {
		mobileMenu.classList.toggle('hidden')
		mobileOverlay.classList.toggle('hidden')
		iconBars.classList.toggle('hidden')
		iconX.classList.toggle('hidden')
	})
	mobileOverlay.addEventListener('click', () => {
		mobileMenu.classList.add('hidden')
		mobileOverlay.classList.add('hidden')
		iconBars.classList.remove('hidden')
		iconX.classList.add('hidden')
	})
}
