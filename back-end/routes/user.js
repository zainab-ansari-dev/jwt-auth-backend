const express = require('express');
const router = express.Router()
const {handleUserSignup,handleUserLogin} = require('../controllers/user');

router.post('/signup',handleUserSignup);
router.post('/login',handleUserLogin);

router.post('/logout',(req,res)=>
{
    res.clearCookie('token',{
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    });
    return res.json({message:"successfully logged out from the server"})
})


module.exports = router;