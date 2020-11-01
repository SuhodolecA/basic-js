const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  var newArr;
	newArr = [];
	if(!members || !Array.isArray(members)){ 
		return false;
	}
	for(var i=0; i<members.length; i++){
	    if(typeof(members[i]) === "string") {
	    	newArr.push(members[i].trim()[0].toUpperCase());
		}
	}
	return newArr.sort().join("");
};
