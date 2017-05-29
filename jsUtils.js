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
  },
  writeToFile: function() {	//this is to be ran on node.js
    var fs = require('fs');
    fs.writeFile("/tmp/test", "Hey there!", function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  },
  getScriptTagQueryString(idToSearchFor, paramToLookFor) {	//both parameters are strings
    var scripts = document.getElementById(idToSearchFor),
        index = scripts.length - 1,
        myScript = scripts[index],
        //myScript now contains our script object
        queryString = myScript.src.replace(/^[^\?]+\??/,'');
	  
    var script = document.getElementById('jsBundleId'),
        queryString = script.src.replace(/^[^\?]+\??/,''),
        keyValues = queryString.split('='),
	foundKeyFlag = false,
	paramValue = '',
	//paramToLookFor = 'noWarning',
	urlRegexHelper = new RegExp(paramToLookFor, ['ig']);
    keyValues.forEach(function(value, i) {
	if(foundKeyFlag === true) {
		paramValue = value;	
	}
	if(value.search(urlRegexHelper) !== -1) {
		foundKeyFlag = true;
	}
    });
    //now `paramValue` is set to the value of the key passed (i.e. `paramToLookFor`)
    return paramValue;
  },
  doOCR: function () {	//this function would be executed in the context of a Google App Script (see script.google.com for more)

    var image = UrlFetchApp.fetch('https://img.labnol.org/logo.png').getBlob();

    var file = {
      title: 'OCR File',
      mimeType: 'image/png'
    };

    // OCR is supported for PDF and image formats
    file = Drive.Files.insert(file, image, {ocr: true});

    // Print the Google Document URL in the console
    Logger.log("File URL: %s", file.embedLink);
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
String.prototype.decodeHTML = function() {
    var map = {"gt":">" /* , … */};
    return this.replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi, function($0, $1) {
        if ($1[0] === "#") {
            return String.fromCharCode($1[1].toLowerCase() === "x" ? parseInt($1.substr(2), 16)  : parseInt($1.substr(1), 10));
        } else {
            return map.hasOwnProperty($1) ? map[$1] : $0;
        }
    });
};

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
