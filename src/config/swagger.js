import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const PORT = process.env.PORT || 8080;

const swaggerConfig = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de usuarios",
            version: "1.0.0",
            description: 'Api CRUD para gestionar usuarios',
        },
        servers: [{ url: `http://localhost:${PORT}` }],
    },
    apis: ['./src/config/swaggerDoc.js'],
};

const swaggerDoc = swaggerJSDoc(swaggerConfig);

export default (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};