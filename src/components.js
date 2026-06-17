/**
 * Vanilla JS Component Library
 * Replaces Vue components with simple JS functions
 */

/**
 * Container - max-width wrapper with horizontal padding
 * @param {string|Element|Function} content - HTML string, element, or function returning element
 * @returns {Element}
 */
export function Container(content) {
	const div = document.createElement('div');
	div.className = 'container xl:max-w-7xl mx-auto px-4';
	
	if (typeof content === 'function') {
		div.appendChild(content());
	} else if (typeof content === 'string') {
		div.innerHTML = content;
	} else if (content instanceof Element) {
		div.appendChild(content);
	}
	
	return div;
}

/**
 * Section - full-width section with padding
 * @param {string|Element|Function} content - HTML string, element, or function returning element
 * @param {Object} options - { id, classes }
 * @returns {Element}
 */
export function Section(content, options = {}) {
	const section = document.createElement('section');
	section.className = `w-full py-20 sm:py-32 ${options.classes || ''}`.trim();
	if (options.id) section.id = options.id;
	
	if (typeof content === 'function') {
		section.appendChild(content());
	} else if (typeof content === 'string') {
		section.innerHTML = content;
	} else if (content instanceof Element) {
		section.appendChild(content);
	}
	
	return section;
}

/**
 * Title - main heading
 * @param {string|Element|Function} content
 * @returns {Element}
 */
export function Title(content) {
	const h2 = document.createElement('h2');
	h2.className = 'text-3xl sm:text-4xl font-display tracking-tight';
	
	if (typeof content === 'function') {
		h2.appendChild(content());
	} else if (typeof content === 'string') {
		h2.innerHTML = content;
	} else if (content instanceof Element) {
		h2.appendChild(content);
	}
	
	return h2;
}

/**
 * SubTitle - secondary heading/paragraph
 * @param {string|Element|Function} content
 * @returns {Element}
 */
export function SubTitle(content) {
	const p = document.createElement('p');
	p.className = 'text-lg tracking-tight';
	
	if (typeof content === 'function') {
		p.appendChild(content());
	} else if (typeof content === 'string') {
		p.innerHTML = content;
	} else if (content instanceof Element) {
		p.appendChild(content);
	}
	
	return p;
}

/**
 * Button component
 * @param {Object} options - { text, isPrimary, tallyOpen, whatButton, classes }
 * @returns {Element}
 */
export function Button(options = {}) {
	const {
		text = '',
		isPrimary = false,
		tallyOpen = 'nGYAdZ',
		whatButton = 'free_strategy',
		classes = ''
	} = options;

	const a = document.createElement('a');
	
	const baseClasses = 'inline-block font-medium text-center py-2.5 px-4 rounded-full border transition-colors duration-300 cursor-pointer text-xl';
	const variantClasses = isPrimary 
		? 'bg-primary-600 text-white border-primary-600 hover:bg-primary-700 hover:border-primary-700'
		: 'border-slate-300 text-slate-900 hover:bg-slate-100';
	
	a.className = `${baseClasses} ${variantClasses} ${classes}`.trim();
	a.href = `#tally-open=${tallyOpen}&whatButton=${whatButton}`;
	a.textContent = text;
	
	a.addEventListener('click', (e) => {
		if (window.Tally) {
			e.preventDefault();
			window.Tally.openPopup(tallyOpen);
		}
	});
	
	return a;
}
