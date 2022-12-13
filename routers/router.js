import express from 'express';
import indexcontroller from '../controllers/controller'
const router = express.router();
router.get('/usuarios', indexcontroller.controller);
exports = router;