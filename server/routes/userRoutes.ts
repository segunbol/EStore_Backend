import express from 'express';
import { createUser, getUser, getUsers, makeAdmin, updateUser } from '../controllers/userController';
import { authenticate } from '../middlewares/authentication';

const router = express.Router();

router
    .post('/',  createUser)
    .get('/users',  getUsers)
    .get('/users/:userID', getUser)
    .patch('/adminusers/:userID', authenticate, makeAdmin)
    .patch('/users/:userID', authenticate, updateUser)
    .delete('/users/:userID', authenticate, deleteUser)
export = router;