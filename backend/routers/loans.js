import express from 'express';
import { getLoans, createLoan, updateLoan } from '../controllers/loans.js';

const router = express.Router();

router.get('/', getLoans);

router.post('/', createLoan);

router.post('/update', updateLoan);

export default router;