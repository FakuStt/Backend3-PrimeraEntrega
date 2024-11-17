import MockService from "../services/mock.service"

const generateMockingPets = (req, res) => {
    const {cantPets} = req.params || 100;
    console.log(cantPets);
    const pets = MockService.generateMockingPets(cantPets);
    return res.send({ status: 'success', pets });
}

const generateMockingUsers = (req, res) => {
    const {cantUsers} = req.params || 50;
    console.log(cantUsers);
    const users = MockService.generateMockingUsers(cantUsers);
    return res.send({ status: 'success', users });
}

const generateData = (req, res) => {
    const {cantUsers, cantPets} = req.params;
    console.log(cantUsers);
    console.log(cantPets);
    const users = MockService.generateMockingUsers(cantUsers);
    const pets = MockService.generateMockingPets(cantPets);
    const data = MockService.generateData(users, pets);
    return res.send({ status: 'success', data  });
}

export default {
    generateMockingPets,
    generateData,
    generateMockingUsers
}