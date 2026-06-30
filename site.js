// Mobile menu toggle — shared across all pages
// Expects elements: #mobile-menu-toggle, #mobile-menu, #mobile-menu-overlay, #icon-bars, #icon-x
const mobileToggle = document.getElementById('mobile-menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const mobileOverlay = document.getElementById('mobile-menu-overlay')
const iconBars = document.getElementById('icon-bars')
const iconX = document.getElementById('icon-x')

if (mobileToggle) {
	const openMenu = () => {
		mobileMenu.classList.remove('hidden')
		mobileOverlay.classList.remove('hidden')
		iconBars.classList.add('hidden')
		iconX.classList.remove('hidden')
		mobileToggle.setAttribute('aria-expanded', 'true')
		mobileToggle.setAttribute('aria-label', 'Close main navigation')
		mobileMenu.setAttribute('aria-hidden', 'false')
	}

	const closeMenu = () => {
		mobileMenu.classList.add('hidden')
		mobileOverlay.classList.add('hidden')
		iconBars.classList.remove('hidden')
		iconX.classList.add('hidden')
		mobileToggle.setAttribute('aria-expanded', 'false')
		mobileToggle.setAttribute('aria-label', 'Open main navigation')
		mobileMenu.setAttribute('aria-hidden', 'true')
	}

	mobileToggle.addEventListener('click', () => {
		if (mobileMenu.classList.contains('hidden')) {
			openMenu()
		} else {
			closeMenu()
		}
	})

	mobileOverlay.addEventListener('click', () => {
		closeMenu()
		mobileToggle.focus()
	})

	mobileMenu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			closeMenu()
		})
	})

	document.addEventListener('keydown', event => {
		if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
			closeMenu()
			mobileToggle.focus()
		}
	})
}
