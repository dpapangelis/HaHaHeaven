// vector animation

var text = document.getElementById("text");
var flower = document.getElementById("flower");
var yellow = document.getElementById("yellow");
var greenLeaf = document.getElementById("green-leaf");

var scrollFunction = function () {

	var value = window.scrollY;	
	text.style.marginTop = value * 2.5 + 'px';
	flower.style.top = value * -1.5 + 'px';
	yellow.style.left = value * -1.5 + 'px';    
	greenLeaf.style.left = value * 1.5 + 'px';    
	
if (value >= 3500) {	
	window.removeEventListener('scroll', scrollFunction);
	text.style.marginTop = "auto";
	flower.style.top = 1 + 'px';
	yellow.style.left = "auto";    
	greenLeaf.style.left = "auto";	
}
}

window.addEventListener('scroll', scrollFunction);


// hobbies slideshow

var items = document.querySelectorAll(".slitem");
var active = 0;

function showActiveCard(){    

	for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }

    items[active].style.display = "block";   
    
}

var next = document.getElementById("next");
var prev = document.getElementById("prev");

var nextClickAction = function() {
	
	active++
	if (active >= items.length){
		active=0;
	}

		
	showActiveCard();
}

var prevClickAction = function() {
	active--
	
	if (active < 0 ){
		active = items.length - 1;
	}
	
	showActiveCard();
}

showActiveCard();
next.addEventListener("click", nextClickAction);
prev.addEventListener("click", prevClickAction);


