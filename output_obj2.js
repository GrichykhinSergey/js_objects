const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  };
  
  function output(key, val) {
    console.log(`${key}: ${val}`); 
  }
  
  for (let prop in person) {
    if (prop == 'firstName') {
      person['First name'] = person.firstName;
      delete person.firstName;
      output('First name', person['First name']);
    } else if (prop == 'lastName') {
      person['Last name'] = person.lastName;
      delete person.lastName;
      output('Last name', person['Last name']);
    } else if (prop == 'age') {
      person['Age'] = person.age + ' ages';
      delete person.age;
      output('Age', person['Age']);
    } else {
      person['Where to find'] = person.location;
      delete person.location;
      output('Where to find', person['Where to find']);
    }
  }