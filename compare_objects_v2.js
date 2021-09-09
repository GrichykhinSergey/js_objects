  const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  };
  
  const person1 = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  };
  
  const person2 = {
    Name: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  };
  
  const person3 = person;
  
  function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
      return false;
    }
    for (let prop in obj1) {
      if (obj1[prop] !== obj2[prop]) return false;
    }
    return true;
  }
  
  console.log( compareObjects(person, person1) );
  console.log( compareObjects(person, person2) );
  console.log( compareObjects(person, person3) );