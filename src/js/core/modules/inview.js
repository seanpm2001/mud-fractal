import * as R from 'ramda'

export const inview = R.curry((root, events, options = {}) => {
	if (!events) return

	const defaults = {
		rootMargin: '0px',
		threshold: 0,
		...options
	}

	const destroy = () => observer.unobserve(root) // eslint-disable-line no-use-before-define

	const onIntersection = entry => {
		const item = R.head(entry)
		log(entry)
		const { isIntersecting } = item
		const type = isIntersecting ? 'enter' : 'exit'
		if (events[type]) {
			events[type]({
				item,
				destroy
			})
		}
	}

	const observer = new IntersectionObserver(onIntersection, defaults)

	R.forEach(item => {
		observer.observe(item)
	})([...document.querySelectorAll('[data-element]')])

	return {
		destroy
	}
})

export const InviewMixin = superclass =>
	class extends superclass {
		init() {
			this.$$inview = inview(
				this.$el,
				this.viewport,
				this.registerObserverOptions || {}
			)

			if (super.init) super.init()

			return this
		}

		destroy() {
			// this.$$inview.destroy()
			if (super.destroy) super.destroy()
		}
	}
