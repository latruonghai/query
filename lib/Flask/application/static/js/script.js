element = document.querySelectorAll(['button', 'input']);

element.forEach((a) => {
	a.addEventListener('mousemove', () => {
	  a.style['background-color'] = '#e4e4e4';
	});
	a.addEventListener('mouseleave', ()=>{
	  a.style['background-color'] = '#ffffff';
	});
	a.addEventListener('click', ()=>{
	  a.style['background-color'] = '#777777';
	  setTimeout(() =>{
	    a.style['background-color'] = '#ffffff';
	  }, 200);
	});
})

// el = document.querySelector((''))
NodeList.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}
b = a.randomElement();