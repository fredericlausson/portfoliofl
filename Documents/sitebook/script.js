 /* recherche page actuelle */
const ratio = .3
let observer = null
/* animation détéction nav */
/**
 * 
 * @param {HTMLElement} eleme 
 */

const activatebis = function (eleme) {
	const ide = eleme.getAttribute('id')
	const anchore = document.querySelector(`a[href="#${ide}"]`)
	if (anchore === null) {
		return null
	}
	
	anchore.classList.add('active')
}

/* animation détéction section */
/**
 * 
 * @param {HTMLElement} elem 
 */
/* animation détéction section */

const activate = function (elem) {
	const id = elem.getAttribute('id')
	const anchor = document.querySelector(`section[id="${id}"]`)
	if (anchor === null) {
		return null
	}
	document
		.querySelectorAll('.active')
		.forEach(node => node.classList.remove('active'))
	anchor.classList.add('actived')
}

/**
 * 
 * @param {IntersectionObserverEntry[]} entries 
 * @param {IntersectionObserver} observer 
 */

const callback = function (entries, observer) {
	entries.forEach(function(entry) {
		if (entry.intersectionRatio > 0) {
			activate(entry.target)
			activatebis(entry.target)
		}
	})
}



const spies = document.querySelectorAll('[data-spy]')

const observe = function(elems) {
	if (observer !== null) {
		elems.forEach(elem => observer.unobserve(elem))
	}
	const y = Math.round(window.innerHeight * ratio)
	observer = new IntersectionObserver(callback, {
		rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
	})
	spies.forEach(elem => observer.observe(elem))
}

if (spies.length > 0) {
	observe(spies)
	window.addEventListener('resize', function() {
		observe(spies)
	})
}


