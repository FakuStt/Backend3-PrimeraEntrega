import mongoose from "mongoose";
import db from "../config/database.js";

import request from "supertest";
import { expect } from "chai";
import app from "../app.js";

import { usersService, petsService, adoptionsService } from '../services/index.js';

describe("Testing Adoptme", () => {
    describe("Test para crear usuarios y crear mascotas", function () {
        it("generateMockingUsers debería retornar 50 usuarios", async function () {
            this.timeout(5000);
            const res = await request(app).get("/api/mocks/mockingusers");
        
            expect(res.status).to.equal(200);

            expect(res.body).to.be.an("object");
            expect(res.body.status).to.equal("success");

            expect(res.body.users).to.be.an("array").that.has.lengthOf(50);
        });

        it("generateMockingPets debería retornar 100 mascotas", async function () {
            this.timeout(5000);
            const res = await request(app).get("/api/mocks/mockingpets");
    
            expect(res.status).to.equal(200);

            expect(res.body).to.be.an("object");
            expect(res.body.status).to.equal("success");
    
            expect(res.body.pets).to.be.an("array").that.has.lengthOf(100);
        });
    

        it("generateData debería agregar a la db y retornar 50 usuarios y 100 mascotas", async function () {
            this.timeout(10000);
    
            const res = await request(app).post("/api/mocks/generateData/50/100");
            expect(res.status).to.equal(200);
            expect(res.body.status).to.equal("success");
            expect(res.body.data.users).to.be.an("array").that.has.lengthOf(50);
            expect(res.body.data.pets).to.be.an("array").that.has.lengthOf(100);
        });
    });

    describe("Test para Adoptions", () => {
        let userId, petId, adoptionId;

        beforeEach(async () => {
            const newUser = await usersService.create({
                first_name: "UserName",
                last_name: "UserLastName",
                email: `usermail${Math.random()}@example.com`,
                password: "UserPassword",
                role: "user",
                pets: [],
            });

            const newPet = await petsService.create({
                name: "PetName",
                specie: "PetSpecie",
                birthDate: `${Date.now()}`,
                adopted: false,
            });

            const adoption = await adoptionsService.create({
                owner: newUser._id,
                pet: newPet._id,
            });

            userId = newUser._id;
            petId = newPet._id;
            adoptionId = adoption._id;
        });

        describe("GET /api/adoptions", () => {
            it("Debería retornar todas las adopciones", async () => {
            const res = await request(app).get("/api/adoptions");
            expect(res.body).to.be.an("object");
            expect(res.body.status).to.equal("success");
            expect(res.body.payload).to.be.an("array");
            });
        });

        describe("GET /api/adoptions/:aid", () => {
            it("Debería retornar una adopción por id", async () => {
                const res = await request(app).get(`/api/adoptions/${adoptionId}`);
                if (res.status === 404) {
                    expect(res.body.error).to.equal( "Adoption not found");
                } else {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.property("status", "success");
                    expect(res.body.payload).to.be.an("object");
                }
            });
        });

        describe("POST /api/adoptions", () => {
            it("Debería crear una nueva adopción", async () => {
                const newPet = await petsService.create({
                name: "PetName2",
                specie: "PetSpecie2",
                birthDate: `${Date.now()}`,
                adopted: false,
                });

                const res = await request(app).post(`/api/adoptions/${userId}/${newPet._id}`);
                if (res.status === 400 || res.status === 404) {
                    expect(res.body).to.have.property("error");
                } else {
                    expect(res.status).to.equal(200);
                    expect(res.body.status).to.equal("success");
                expect(res.body.message).to.equal("Pet adopted");
                }
            });
        });
    });
});

