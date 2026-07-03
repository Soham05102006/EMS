import {Router} from 'express';
import {getDashboardData} from '../controllers/dashboardController.js';
import {protect} from '../middleware/authMiddleware.js';

const router = Router();

router.get('/dashboard', protect, getDashboardData);

export default router;