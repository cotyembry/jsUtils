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
