changeStyle(window.location.hash);
eventOnWebSite();

function changeStyle(hashElem){
	var els = document.getElementsByTagName("a"),
	els_length = els.length;
	for (var i = 0, l = els_length; i < l; i++) {
		var el = els[i];
		if (el.hash === hashElem) {
			el.className = el.className + "activate";
		}else{
			el.className = "";
		}
	}
}

function eventOnWebSite(){
	var x = document.getElementsByTagName("input");
	var y = document.getElementsByTagName("select");
	var z = document.getElementsByTagName("textarea");
	x_length = x.length;
	y_length = y.length;
	z_length = z.length;
	for (var i = 0, l = x_length; i < l; i++) {
		x[i].addEventListener("focusin", myFocusFunction);
	}
	for (var i = 0, l = y_length; i < l; i++) {
		y[i].addEventListener("focusin", myFocusFunction);
	}
	for (var i = 0, l = z_length; i < l; i++) {
		z[i].addEventListener("focusin", myFocusFunction);
	}
	if ("onhashchange" in window) { // event supported?
		window.onhashchange = function () {
			changeStyle(window.location.hash)
		}
	}
}


function myFocusFunction(event){
	event.target.parentElement.style.opacity = "1";
}

function loadPage(href, idDiv){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", href, true);
	xmlhttp.onload = function (e) {
	  if (xmlhttp.readyState === 4) {
		if (xmlhttp.status !== 200) {
		  console.error(xmlhttp.statusText);
		}
	  }
	};
	xmlhttp.onerror = function (e) {
	  console.error(xmlhttp.statusText);
	};
	xmlhttp.send(null)
	xmlhttp.onloadend=function(){
		document.getElementById(idDiv).innerHTML = xmlhttp.responseText;
    }
}