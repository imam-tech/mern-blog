import express from 'express';
import { test, updateUser, deleteUser, signOut } from '../controllers/user.controller.js';
import verifyUser from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyUser, updateUser)
router.delete('/delete/:userId', verifyUser, deleteUser)
router.post('/sign-out', signOut)

export default router;