var faker = require("faker");

// fake data exported for test only
// TO-DO --use a mockserver--
export const userInfo = {
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    address: { city: faker.address.city(), street: faker.address.streetName() }
};
