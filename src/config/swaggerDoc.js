import usersController from '../controllers/users.controller.js'
/**
 * @swagger
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       required:
 *         - _id
 *         - first_name
 *         - last_name
 *         - email
 *         - password
 *       properties:
 *         _id:
 *           type: string
 *           required: true
 *           description: ObjectId del usuario, asignado por mongoose
 *         first_name:
 *           type: string
 *           required: true
 *           description: Nombre del usuario
 *         last_name:
 *           type: string
 *           required: true
 *           description: Apellido del usuario
 *         email:
 *           type: string
 *           required: true
 *           unique: true
 *           description: Email del usuario
 *         password:
 *           type: string
 *           required: true
 *           description: Contraseña del usuario
 *         role:
 *           type: string
 *           default: 'user'
 *           description: Rol del usuario
 *         pets:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: ObjectId de las mascotas del usuario, asignado por mongoose
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [users]
 *     responses:
 *       200:
 *         description: una lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 required:
 *                   - _id
 *                   - first_name
 *                   - last_name
 *                   - email
 *                   - password
 *                 properties:
 *                   _id:
 *                     type: string
 *                     required: true
 *                     description: ObjectId del usuario, asignado por mongoose
 *                   first_name:
 *                     type: string
 *                     required: true
 *                     description: Nombre del usuario
 *                   last_name:
 *                     type: string
 *                     required: true
 *                     description: Apellido del usuario
 *                   email:
 *                     type: string
 *                     required: true
 *                     unique: true
 *                     description: Email del usuario
 *                     password:
 *                       type: string
 *                       required: true
 *                       description: Contraseña del usuario
 *                     role:
 *                       type: string
 *                       default: 'user'
 *                       description: Rol del usuario
 *                     pets:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                       _id:
 *                         type: string
 *                         description: ObjectId de las mascotas del usuario, asignado por mongoose
 */
 
router.get('/', usersController.getAllUsers);

/**
 * @swagger
 * /api/users/{uid}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 required:
 *                   - _id
 *                   - first_name
 *                   - last_name
 *                   - email
 *                   - password
 *                 properties:
 *                   _id:
 *                     type: string
 *                     required: true
 *                     description: ObjectId del usuario, asignado por mongoose
 *                   first_name:
 *                     type: string
 *                     required: true
 *                     description: Nombre del usuario
 *                   last_name:
 *                     type: string
 *                     required: true
 *                     description: Apellido del usuario
 *                   email:
 *                     type: string
 *                     required: true
 *                     unique: true
 *                     description: Email del usuario
 *                     password:
 *                       type: string
 *                       required: true
 *                       description: Contraseña del usuario
 *                     role:
 *                       type: string
 *                       default: 'user'
 *                       description: Rol del usuario
 *                     pets:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                       _id:
 *                         type: string
 *                         description: ObjectId de las mascotas del usuario, asignado por mongoose
 *       404:
 *         description: Usuario no encontrado
 */

router.get('/:uid', usersController.getUser);

/**
 * @swagger
 * /api/users/{uid}:
 *   put:
 *     summary: Actualiza un usuario
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                 type: object
 *                 required:
 *                   - _id
 *                   - first_name
 *                   - last_name
 *                   - email
 *                   - password
 *                 properties:
 *                   _id:
 *                     type: string
 *                     required: true
 *                     description: ObjectId del usuario, asignado por mongoose
 *                   first_name:
 *                     type: string
 *                     required: true
 *                     description: Nombre del usuario (podria ser actualizado)
 *                   last_name:
 *                     type: string
 *                     required: true
 *                     description: Apellido del usuario (podria ser actualizado)
 *                   email:
 *                     type: string
 *                     required: true
 *                     unique: true
 *                     description: Email del usuario (podria ser actualizado)
 *                     password:
 *                       type: string
 *                       required: true
 *                       description: Contraseña del usuario (podria ser actualizado)
 *                     role:
 *                       type: string
 *                       default: 'user'
 *                       description: Rol del usuario (podria ser actualizado)
 *                     pets:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                       _id:
 *                         type: string
 *                         description: ObjectId de las mascotas del usuario, asignado por mongoose (podria ser actualizado, agregar nueva mascota)
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       404:
 *         description: Usuario no encontrado, no se ha podido actualizar el usuario
 */

router.put('/:uid', usersController.updateUser);

/**
 * @swagger
 * /api/users/{uid}:
 *   delete:
 *     summary: Elimina un usuario
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       404:
 *         description: Usuario no encontrado
 */

router.delete('/:uid', usersController.deleteUser);