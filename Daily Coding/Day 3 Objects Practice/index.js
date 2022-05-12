// Encapsulation, Abstraction, Inheritance, and Polymorphism

class Contractor {
  constructor(name, role) {
    this._name = name;
    this._role = role;
  }

  get name() {
    return this._name;
  }
  get role() {
    return this._role;
  }
  sayHello() {
    console.log(`Hello, I am on the ${this._role} team at IBM!`);
  }
}

class BackEnd extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    console.log(
      `Hello, I am on the ${this._role} team at IBM and i use ${this._tech}!`
    );
  }
}
class FrontEnd extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    console.log(
      `Hello, I am on the ${this._role} team at IBM and i use ${this._tech}!`
    );
  }
}

////
// !Method 1 to Store

// const bob = new Contractor('Bob', 'Front-end');
// const simba = new FrontEnd('Simba', 'Front-end', 'React');
// const machi = new BackEnd('The Machine', 'Back-end', 'Node');

// const agency = [bob, simba, machi];

// for (person of agency) {
//   person.sayHello();
// }

////
// !Method 2 to Store

// const agency1 = [];
// // prettier-ignore
// function pushContractor(typeClass,nameOfContractor,roleOfContractor,techOfContractor) {
//     const contractor = new typeClass(nameOfContractor,roleOfContractor,techOfContractor);
//     agency1.push(contractor);
// }

// pushContractor(Contractor, 'Bob', 'Back-end');
// pushContractor(FrontEnd, 'Simba', 'Front-end', 'React');
// pushContractor(BackEnd, 'The Machine', 'Back-end', 'Node');

// for (person of agency1) {
//   person.sayHello();
// }

////
// !Method 3 to Store

class Agency {
  #agency = [];

  constructor(name) {
    this._name = name;
  }

  // prettier-ignore
  storeContractor(typeClass,nameOfContractor,roleOfContractor,techOfContractor) {
          const contractor = new typeClass(nameOfContractor,roleOfContractor,techOfContractor);
        this.#agency.push(contractor);
      }

  get agencyName() {
    return this._name;
  }

  get agencyContractors() {
    return this.#agency;
  }
}

const agencyIBM = new Agency('IBM');

agencyIBM.storeContractor(Contractor, 'Bob', 'Back-end');
agencyIBM.storeContractor(FrontEnd, 'Simba', 'Front-end', 'React');
agencyIBM.storeContractor(BackEnd, 'The Machine', 'Back-end', 'Node');

//

const agencyCatalin = new Agency('Catalin');

agencyCatalin.storeContractor(Contractor, 'Catalin', 'Back-end Baby');
agencyCatalin.storeContractor(
  FrontEnd,
  'Cristian',
  'Front-end Baby',
  'React Baby'
);
agencyCatalin.storeContractor(
  BackEnd,
  'Petrovici',
  'Back-end Baby',
  'Node Baby'
);

console.log(agencyIBM.agencyName);
for (person of agencyIBM.agencyContractors) {
  person.sayHello();
}

console.log('########');

console.log(agencyCatalin.agencyName);
for (person of agencyCatalin.agencyContractors) {
  person.sayHello();
}
