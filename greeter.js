var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullname = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
//Scope Global no pintará ya que no esta dentro del scope de la funcion
var ScopeGlobal = /** @class */ (function () {
    function ScopeGlobal(carName) {
        this.carName = carName;
    }
    ScopeGlobal.prototype.myCar = function () {
        console.log(this.carName);
    };
    return ScopeGlobal;
}());
function greeter(person) {
    var scope = new ScopeGlobal('Volvo');
    scope.myCar();
    myCar2();
    myCar3();
    RestParameter('uno', 'dos', 'tres', 'cuatro', 'cinco');
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = new Student('James', ' ', 'Welcome');
document.body.innerHTML = greeter(user);
//Scope Function
function myCar2() {
    var carName = 'Nissan';
    console.log(carName);
}
//Scope Block
function myCar3() {
    var carName = 'Peugeot';
    if (true) {
        var carName_1 = 'Ford';
        console.log(carName_1);
    }
    console.log(carName);
}
//Rest Parameter
function RestParameter(a, b) {
    var manyMoreArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        manyMoreArgs[_i - 2] = arguments[_i];
    }
    console.log(a);
    console.log(b);
    console.log('manyMoreArgs', manyMoreArgs);
}
