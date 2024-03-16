import express from 'express';
import {
  createRoom,
  getRooms,
  updateRoom,
  deleteRoom,
  getRoomById,
} from '../controllers/roomController.js';

const router = express.Router();

router.route('/').post(createRoom).get(getRooms);
router.route('/:id').patch(updateRoom).get(getRoomById).delete(deleteRoom);

export default router;
