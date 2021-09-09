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
  
  const person2 = person;
  
  function compareObjects(obj1, obj2) {
    return obj1 == obj2;
  }
  
  console.log( compareObjects(person, person1) );
  console.log( compareObjects(person, person2) );
  
