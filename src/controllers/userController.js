const router = require('express').Router();
const {User} = require('./../models/user')
const Sequelize = require('sequelize')

router.post('/api/v1/register_user', async (req, res) => {
    console.log(req.body)
    let {firstName, lastName, phone, email, gander, dob, image, deviceId} = req.body

    const jane = await User.create({ firstName: "Jane", lastName: "Doe" });

    if (jane) {
        res.json({success: true, message: "user created successfully"}).status(201)
    } else {
        res.json({error: true, message: reqError.message}).status(400)
    }
})

module.exports = router;
