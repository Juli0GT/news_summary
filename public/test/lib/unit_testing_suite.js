var assert =  {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      console.log("Failed");
    }
    else {
    	console.log("Passed");
    }
  },

  isFalse: function(assertionToCheck) {
  	if (assertionToCheck) {
  		console.log("Failed");
  	}
		else {
			console.log("Passed");
		}
  },

  toBe: function(currentValue, assertionToCheck) {
  	if (assertionToCheck === currentValue) {
  		console.log("Passed");
  	}
		else {
			console.log("Failed");
		}
  },

  notToBe: function(currentValue, assertionToCheck) {
  	if (assertionToCheck === currentValue) {
  		console.log("Failed");
  	}
		else {
			console.log("Passed");
		}
  },

  toContain: function(currentValue, assertionToCheck) {
  	if(currentValue.includes(assertionToCheck)) {
  	  console.log("Passed");
  	} else {
  		console.log("Failed");
  	}
  },

  notToContain: function(currentValue, assertionToCheck) {
  	if(currentValue.includes(assertionToCheck)) {
  	  console.log("Failed");
  	} else {
  		console.log("Passed");
  	}
  },

  toRaise: function(block, assertionToCheck) {
    try {block();}
    catch(err) {if (err === assertionToCheck) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }}
  }
};
