//Just add the code to be able to inherit here, and import the variable in the code to use and bam, there it is
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};
//then you can use it like:
// var arrayTest = [ 'A', 'B', 'D', 'E' ];
// arrayTest.insert(2, 'C');

module.exports = Array;
