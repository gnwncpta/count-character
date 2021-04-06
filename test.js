let myCurrentArray = new Array("apple","banana","apple","orange","banana","apple");

let counts = {};

for(let i = 0; i < myCurrentArray.length; i++)
{
    let key = myCurrentArray[i];
    counts[key] = (counts[key]) ? counts[key] + 1 : 1 ;
}

// uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
// var count = {};
// uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1; });
// console.log(count);

let ktp = {}

ktp["nama"] = "Cipta";
ktp["umur"] = 17;
console.log(ktp)