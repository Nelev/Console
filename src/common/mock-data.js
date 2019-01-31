var faker = require("faker");

// fake data exported for test only
// TO-DO --use a mockserver--
export const userInfo = {
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    address: { city: faker.address.city(), street: faker.address.streetName() },
    company: { name: faker.company.companyName() }
};

const statusList = ["DONE", "IN_PROGRESS", "FAILED"];

const generateTicketsInfo = () => {
    const index = Math.floor(Math.random() * 100);
    const items = [];
    for (let i = 0; i < index; i++) {
        items.push({
            id: i,
            user: faker.name.firstName(),
            tickedId: faker.random.number(),
            status: statusList[Math.floor(Math.random() * statusList.length)],
            progress: Math.floor(Math.random() * 100)
        });
    }
    return items;
};

export const ticketsInfo = generateTicketsInfo();
