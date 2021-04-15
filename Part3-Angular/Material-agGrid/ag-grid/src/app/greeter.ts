class Student {
fullName: string;
constructor(public firstname: string, public middle: string, public lastname)
{
    this.fullName = firstname + " " + middle + " " + lastname
}
}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello " +person.firstName + "" + person.lastName;
}
let user = new Student('Chaman', 'Roshan', 'Bharti');
document.body.textContent = greeter(user)