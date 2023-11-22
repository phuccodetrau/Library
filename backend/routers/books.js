import express from 'express';
import { getBooks, createBook, updateBook } from '../controllers/books.js';

const router = express.Router();

router.get('/', getBooks);

router.post('/', createBook);

router.post('/update', updateBook);

export default router;