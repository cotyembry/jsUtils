var jsUtil = {
  getScrollbarWidth: function() {
	var inner = document.createElement('p');
	inner.style.width = '100%';
	inner.style.height = '200px';
	var outer = document.createElement('div');
	outer.style.position = 'absolute';
	outer.style.top = '0px';
	outer.style.left = '0px';
	outer.style.visibility = 'hidden';
	outer.style.width = '200px';
	outer.style.height = '150px';
	outer.style.overflow = "hidden";
	outer.appendChild(inner);
	document.body.appendChild(outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 == w2) w2 = outer.clientWidth;
	document.body.removeChild(outer);
	  
	return (w1 - w2);
  },
	
  //hasHorizontalBar will return true or false depending on the answer
  hasHorizontalBar: function(DOMElementToCheck) {
	//this checks the element to see if a scrollbar is present
	var hasVerticalScrollbar = DOMElementToCheck.scrollHeight > DOMElementToCheck.clientHeight;
	return hasVerticalScrollbar;
  },
  //hasVerticleBar will return true or false depending on the answer
  hasVerticalBar: function(DOMElementToCheck) {
	//this checks the element to see if a scrollbar is present
	var hasHorizontalScrollbar = DOMElementToCheck.scrollWidth > DOMElementToCheck.clientWidth;
	return hasHorizontalScrollbar;
  },
  noSelectStyle: {
    WebkitTouchCallout: 'none', // iOS Safari
    WebkitUserSelect: 'none',  // Safari
    KhtmlUserSelect: 'none',  // Konqueror HTML
    MozUserSelect: 'none',   // Firefox
    MsUserSelect: 'none',   // Internet Explorer/Edge
    userSelect: 'none'     // Non-prefixed version, currently supported by Chrome and Opera	  
  }
}


//Just add the code to be able to inherit here, and import the variable in the code to use and bam, there it is
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};
//then you can use it like:
// var arrayTest = [ 'A', 'B', 'D', 'E' ];
// arrayTest.insert(2, 'C');


//to use make sure jquery is included and do the following:
//$.urlParam('urlVariablename')
$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

String.prototype.withCommas = function() {
	var fullString = '';
	for(var i = 0; i < this.length; i++) {
		fullString += this[i];
	}
	return fullString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

Date.prototype.mmddyyyy = function(separator) {							//jce added function prototype 3160715
	var year = this.getFullYear();
	var month = this.getMonth() + 1;
	if(month.toString().length === 1) month = '0' + month;
	var day = this.getDate();
	if(day.toString().length === 1) day = '0' + day;
	var returnVal =  month + separator + day + separator + year;    
	return returnVal;
}

module.exports = Array;
module.exports = Date;
module.exports = String;
module.exports = jsUtil;
