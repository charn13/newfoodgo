const express = require('express');
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try {
        console.log(global.FoodCategory);
        res.send([global.food_items])
    } catch (error) {
        console.log(error.message);
        res.send('Server Error')
    }
})
module.exports = router;


