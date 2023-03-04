const fcns = {
	mediaQueries: function (size) {
		return window.matchMedia(`(${size})`)
	},
	ease: function (start, end, ease) {
		return start + (end - start) / ease
	},
	clamp : function(max, min, nbr){
		return Math.max(min, Math.min(max, nbr))
	},
	random : function(max, min){
		return Math.floor(Math.random() * (max - min + 1) + min)
	},
    fade : function(el, start, end, ease){
        (function run(){
            if(start > end){
                start-=ease
                el.style.opacity = start.toFixed(1)
                requestAnimationFrame(run)
            }
        })()
    },
    promiseTl : function(time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, time)
        })
    },
	getEl: function (el, target) {
		const a = target || document
		return a["querySelector"](el)
	},
	getEls: function (el, target) {
		const a = target || document
		return a['querySelectorAll'](el)
	},
	getId: function (el, target) {
		const a = target || document
		return a['getElementById'](el)
	},
	createEl: function (tag, className, parentAppend, content) {
		const tagElement = document.createElement(tag)
		tagElement.className = className
		tagElement.textContent = content
		parentAppend.appendChild(tagElement)
		return tagElement
	},
	offsetEl: function (el) {
		const offset = el.getBoundingClientRect()
		return {
			top: offset.top,
			left: offset.left,
			height: offset.height,
			width: offset.width,
		}
	},
	animationFixe: function (elTop, heightParent, boo) {
		const topEl = window.pageYOffset - elTop.offsetTop
		const calcVh =
			(topEl <= 0 ? 0 : topEl) /
			(heightParent - (boo ? window.innerHeight : false))
		return calcVh < 1 ? calcVh : 1
	},

	cloneEl: function (el, findEl, className, parentAppend) {
		const findImg = fcns.getEl(el, findEl)
		const clone = findImg.cloneNode(true)
		clone.className = className
		parentAppend.appendChild(clone)
	}
}

export { fcns }


