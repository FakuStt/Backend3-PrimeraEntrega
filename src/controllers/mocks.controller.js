import MockService from "../services/mock.service.js"

const generateMockingPets = async (req, res) => {
    const cantPets = parseInt(req.params) || 100;
    console.log(cantPets);
    const pets = await MockService.generateMockingPets(cantPets);
    return res.send({ status: 'success', pets });
}

const generateMockingUsers = async (req, res) => {
    const cantUsers = parseInt(req.params) || 50;
    console.log(cantUsers);
    const users = await MockService.generateMockingUsers(cantUsers);
    return res.send({ status: 'success', users });
}

const generateData = async (req, res) => {
    const cantUsers = parseInt(req.params.cantusers) || 50;
    const cantPets = parseInt(req.params.cantpets) || 100;
    console.log(cantUsers);
    console.log(cantPets);
    const data = await MockService.generateData(cantUsers, cantPets);
    return res.send({ status: 'success', data });
}

export default {
    generateMockingPets,
    generateData,
    generateMockingUsers
}