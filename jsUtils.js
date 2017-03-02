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

module.exports = Array;
module.exports = String;
