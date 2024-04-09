const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require( 'bcryptjs' );
const jwt = require( "jsonwebtoken" ) ;
const jwtSecret = "mynameFileThisCodeFileWeAreGoTheYouTube" 

router.post("/creatuser",
    // Validation middleware for email, name, and password
    body('email').isEmail().withMessage('Invalid email format'),
    body('name').isLength({ min: 8 }).withMessage('Name must be at least 5 characters'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 5 characters'),

    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

          const salt = await bcrypt.genSalt(10)
          let secPassword = await bcrypt.hash(req.body.password,salt)
        try {
            // Create a new user based on request body
            const newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
                location: req.body.location
            });

            res.json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    }
);

router.post("/loginuser", [
    body('email').isEmail(),
    body("password", 'Incorrect Password').isLength({ min: 6 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email
        try {
            let userData = await User.findOne({ email })
            if (!userData) {
                return res.status(400).json({ error: 'try logging with correct credentials' })
            }
             const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
            if (!pwdCompare) {
                return res.status(400).json({ errors: "try logging with with correct credentials" })
            }
            const data  = {
                user:{
                    id:userData.id
                }
            }
            const authToken = jwt.sign(data,  jwtSecret)
            return res.json({ success: true, authToken: authToken })
        } catch (error) {

            console.log(error);
            res.json({ success: false })
        }
    })

// router.post("/loginuser",async(req, res)=>{
//     let email = req.body.email;
//     try{
//         let useremail = await User.findOne({email});
//         if(!useremail){
//             return res.status(400).json({error:"Try login with correct credentials"})
//         } else

//       if(req.body.password !== userData.password){
//         return res.status(400).json({error:"Try login with correct credentials"})
//       }

//              return res.json({ success:true})
//     }catch(error){
//         console.log(error);
//         res.json({success:false})
//     }
// })



module.exports = router;
