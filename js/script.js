function person(name, age) {

    this.name = name;
    this.age = age;

    this.showPerson = function(){
        return "Name: " + name + ", Age: " + age;
    };

    this.toString = function(){
        return "Name: " + this.name + ", Age: " + this.age;
    };
}

var test = document.getElementById("test");

var person = new person("Kamil", 21);

test.innerHTML = person.showPerson();
