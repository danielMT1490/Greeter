//la clase student comparte las variables de interface
interface Person{
    firstName : string;
    lastName : string;
}

class Student{
    fullname : string;
    constructor(
        public firstName : string, 
        public middleInitial: string, 
        public lastName : string
        ) {
        this.fullname = `${firstName} ${middleInitial} ${lastName}`;
    }
}

//Scope Global no pintará ya que no esta dentro del scope de la funcion
class ScopeGlobal{
    constructor(public carName : string){}

    myCar() {
        console.log(this.carName);
    }
}


function greeter(person: Person) {
    var scope = new ScopeGlobal('Volvo');
    scope.myCar();
    myCar2();
    myCar3();
    RestParameter('uno','dos','tres','cuatro','cinco');
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}

var user = new Student('James', ' ', 'Welcome');
document.body.innerHTML = greeter(user);

//Scope Function
function myCar2() {
    let carName ='Nissan';
    console.log(carName);
}

//Scope Block
function myCar3(){
    let carName = 'Peugeot';
    if (true){
        let carName = 'Ford';
        console.log(carName);
    }
    console.log(carName);
}

//Rest Parameter
function RestParameter(a,b, ...manyMoreArgs){
    console.log(a);
    console.log(b);
    console.log('manyMoreArgs', manyMoreArgs);
}
