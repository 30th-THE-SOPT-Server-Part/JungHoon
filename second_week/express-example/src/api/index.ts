import express, { Router } from 'express';

const router: Router = express.Router(); // express 라우팅 시스템 받아오기!
router.use('/user', require('./user')); // 모든 요청을 매핑 시키기
 module.exports = router;