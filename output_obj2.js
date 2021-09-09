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
      output('First name', person[prop]);
    } else if (prop == 'lastName') {
      output('Last name', person[prop]);
    } else if (prop == 'age') {
      output('Age', `${person[prop]} ages`);
    } else {
      output('Where to find', person[prop]);
    }
  }
  
