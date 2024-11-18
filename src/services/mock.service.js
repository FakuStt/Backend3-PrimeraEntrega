import { faker } from "@faker-js/faker";
import userModel from "../dao/models/User.js";
import petModel from "../dao/models/Pet.js";
import { createHash } from "../utils/index.js";
import { use } from "chai";

class MockService {

    static async generateMockingPets(cant){
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

    static async generateMockingUsers(cant){
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

    static async generateData(cantUsers, cantPets) {
        const users = await this.generateMockingUsers(cantUsers);
        const pets = await this.generateMockingPets(cantPets);

        const addPets = await petModel.insertMany(pets);
        const addUsers = await userModel.insertMany(users);
        return{users: addUsers, pets: addPets};
    }

}

export default MockService;