import express from 'express';
import user from './user';

const router = express.Router(); // eslint-disable-line new-cap

router.use('/test', user);

export default router;