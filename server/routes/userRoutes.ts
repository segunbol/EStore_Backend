import express from 'express';
import { createUser, getUser, getUsers, makeAdmin, updateUser } from '../controllers/userController';
import { authenticate } from '../middlewares/authentication';

const userRoutes = express.Router();

userRoutes
    .post('/',  createUser)
    .get('/',  getUsers)
    .get('/:userId', getUser)
    .patch('/adminusers/:userId',  makeAdmin)
    .patch('/:userID', authenticate, updateUser)
    // .delete('/users/:userID', authenticate, deleteUser)
export = userRoutes;