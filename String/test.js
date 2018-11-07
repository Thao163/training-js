//1.1
function isBlank(data) {
	if(data.length > 0) {
		return false;
	}
	else {
		return true;
	}
};

function isBlank2(data) {
	return data.length <=0;
};

console.log("test: ", isBlank2(""));

//1.2
string_to_array = function(str) {
	return str.trim().split(" ");
};

console.log(string_to_array("Phuong Thao"));

//1.3
truncate_string = function (str) {
	var count = str.slice(0, 5);
	return count;
};
console.log(truncate_string("Phuong Thao"));

//1.4
abbrev_name = function (str) {
	var split_names = str.trim().split(" ");
	if (split_names.length > 1) {
		return (split_names[0] + " " + split_names[1].charAt(0) + ".");
	}
	else {
		return split_names[0];
	}
};

console.log(abbrev_name("Phuong Thao"));

//1.5
protect_email = function (user_email) {
	var avg, splitted, part1, part2;
	splitted = user_email.split("@");
	part1 = splitted[0];
	avg = part1.length / 2;
	part1 = part1.substring(0, (part1.length - avg));
	part2 = splitted[1];
	return part1 + "...@" + part2;
};
console.log(protect_email("nguyenvuphuongthao.92@gmail.com"));

//1.6
string_parameterize = function (str) {
	return str.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/,"").replace(/\s/g, "-");
};
console.log(string_parameterize("Nguyen Vu Phuong Thao"));

//1.7
capitalize = function (str) {
	var firstLetter = str.charAt(0).toUpperCase();
	var lastLetter = str.slice(1);
	return firstLetter + lastLetter;
};
console.log(capitalize("nguyen vu phuong thao"));

//1.8
capitalize_Words = function (str) {
	return str.replace(/(^|\s)([a-z])/g, function(m, p1 ,p2) {
    return p1 + p2.toUpperCase();
  });
}
console.log(capitalize_Words("nguyen vu phuong thao"));


//1.9
swapcase = function (letter) {
	var newLetter = "";
	for ( var i = 0 ; i < letter.length ; i++) {
		if (letter[i] === letter[i].toLowerCase()) {
			newLetter += letter[i].toUpperCase();
		}else {
			newLetter += letter[i].toLowerCase();
		}
	}
	return newLetter;
};
console.log(swapcase("Nguyen VU Phuong Thao"));

//1.10
camelize = function (str) {
	return str.replace(/\W+(.)/g, function(match, chr){
			return chr.toUpperCase();
	});
}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises")); 
console.log(camelize("JavaScriptExercises"));

//1.10.2
camelize = function (str) {
	let word = str.split(" ");
	for (var i = 0; i < word.length ; i++){
		word[i]=word[i].charAt(0).toUpperCase()+word[i].split(1);
	};
	return word.join("");
}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises")); 
console.log(camelize("JavaScriptExercises"));

//1.11
uncamelize = function(str, separator) {
	if (typeof(separator) == "undefined") {
		separator = " ";
	}
	var str = str.replace(/[A-Z]/g, function(letter){
		return separator + letter.toLowerCase();
	});
	return str.replace("/^" + separator + "/", '');
}
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));


//2.1

// var numresult;
// multiply = function(num1,num2) {
// 	// numresult = number1 * number2;
// 	document.getElementById('result').innerHTML = number1 * number2;
// }
function multiply(){
	number1 = document.getElementById('num1').value;
	number2 =  document.getElementById('num2').value;
	document.getElementById('result').innerHTML = number1 * number2;
}
function divide(){
	let number1 = document.getElementById('num1').value;
	let number2 =  document.getElementById('num2').value;
	document.getElementById('result').innerHTML = number1 / number2;
}


//if else
function print(a,b) {
	if (a == b) {
		console.log(a + "=" + b);
	}
	else if ( a > b) {
		console.log(a + ">" + b);
	}
	else {
		console.log(a + "<" + b)
	}
}
console.log(print(5,7));


// array
var breakfast = ["coffee","pizza",2,6,["item1","item2"]];

// truy xuat mang dua theo chi so
lengthBreakfast = breakfast.length;
console.log(breakfast[0]);
console.log(breakfast[lengthBreakfast - 1]);
for(let i = 0; i < lengthBreakfast ; i++) {
	console.log("element" + breakfast[i]);
}

let arrayA = ["item1","item2"];
let arrayB = ["item3","item4"];

let arrayC = arrayA.concat(arrayB);
console.log("arrayC: ", arrayC);

console.log("arrayA before: ", arrayA);
arrayA.push("new items");
console.log("arrayA after: ", arrayA);

arrayA.pop();
console.log("arrayA afetr: ", arrayA);

console.log("reverse: ", arrayA.reverse());

let arrayT = ["thao",27,"su pham","da nang","hai phong", 170, 60];

console.log("array copy: ", arrayT.copyWithin(2,4));