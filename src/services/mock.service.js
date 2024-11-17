import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";

class MockService {

    async generateMockingPets(cant){
        const mockingPets = [];

        for(let i = 0; i < cant; i++){
            let newPet = {
                name: faker.person.firstName(),
                specie: faker.animal.type(),
                owner: null,
            };
            mockingPets.push(newPet)
        };

        return mockingPets;
    }

    async generateMockingUsers(cant){
        const mockingUsers = [];
        const roles = ["user", "admin"];

        for(let i = 0; i < cant; i++){
            let newUser = {
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash('coder123'),
                role: roles[Math.floor(Math.random() * roles.length)],
                pets: []
            };
            mockingUsers.push(newUser)
        };

        return mockingUsers;
    }

    async generateData(cantUsers, cantPets) {
        const users = await this.generateMockingUsers(cantUsers);
        const pets = await this.generateMockingPets(cantPets);

        return{users, pets}
    }

}

export default MockService;