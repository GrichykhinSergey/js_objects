const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  };
  
  for (let prop in person) {
    console.log(`<${prop}>: <${person[prop]}>`);
  }
  