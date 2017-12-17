// var result = "<table>";
//
// for(var i =1; i<=15; i++) {
//     result += "<tr>";
//
//     for(var j = 1; j<=15; j++) {
//
//         result += "<td>" + i*j + "</td>";
//
//     }
//     result += "<tr>";
// }
//
// result += "</table>"
//
// document.getElementById("multipleTable").innerHTML = result;

// alert("22" === 22)
// alert("22" == 22)

// var person = {
//     name: "Kamil",
//     surname: "Serafin",
//     toString: function() {
//         return "Name: " + this.name + ", Surname: " + this.surname;
//     }
// };
//
// for(var property in person) {
//     if(typeof(person[property]) !== "function")
//          break;
//     alert(typeof(person[property]));
// };

// person["age"] = 16;


// var liArray = list.getElementsByTagName("li");
// alert(liArray[0].innerHTML);

function addNumbers() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

alert(addNumbers(2,5,10,7,8))


