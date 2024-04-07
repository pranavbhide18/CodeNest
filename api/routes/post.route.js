import express from 'express'
const router = express.Router();
import { create, getposts, deletepost, updatepost } from '../controllers/post.controller.js';
import {verifyToken} from '../utils/verifyUser.js'

router.post('/create', verifyToken, create)
router.get('/getposts', getposts)
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost)
router.put('/updatepost/:postId/:userId', verifyToken, updatepost)

export default router