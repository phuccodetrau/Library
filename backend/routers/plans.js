import express from 'express';
import { getPlans, createPlan, updatePlan } from '../controllers/plans.js';

const router = express.Router();

router.get('/', getPlans);

router.post('/', createPlan);

router.post('/update', updatePlan);

export default router;