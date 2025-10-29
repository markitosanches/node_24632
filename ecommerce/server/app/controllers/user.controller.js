const db = require('../models') 
const User = db.users
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const https = require('http')


exports.findAll = (req, res) => {
    User.findAll()
    .then(data => {
        res.send(data)
    })
}

exports.create = async (req, res) => {
   if(!req.body.fullname || !req.body.email || !req.body.password ) {
    res.status(400).send({
        message: "User must have  name, email and password!"
    })
    return;
   }
//    console.log(req.body)
//    res.send('a')
   const salt = await bcrypt.genSalt(10)
   const hashPassword = await bcrypt.hash(req.body.password, salt)
   await User.create({
    fullname: req.body.fullname,
    email:  req.body.email,
    password: hashPassword
   })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not insert the data'
        })
    })
}

exports.findOne = async (req, res) => {
    const user = await User.findOne({where:{email:req.body.email}})

    // console.log(user)

    if(!user){
        return res.status(400).send({
            message: 'Username not found'
        })
    }

    if(!await bcrypt.compare(req.body.password, user.password)){
        return res.status(400).send({
            message: 'Password incorrect'
        })
    }

    console.log(user);

    const token = jwt.sign({id: user.id}, 'secret')

    res.cookie('jwt', token,{
        httpOnly:true,
        maxAge: 24 * 60 * 60 * 1000
    })

    user.update({
        token: token

    })
    const {password, ...data} = await user.toJSON()
    res.send({
        user:data
    })
    // console.log(user)
    // res.send('a')
}

exports.auth = async (req, res) => {
    try{
        const cookie = req.cookies['jwt']
        const claims = jwt.verify(cookie, 'secret')

        if(!claims){
            return res.status(401).send({
                message: 'unauthenticated'
            })
        }
        // console.log(claims.id)

        const user = await User.findOne({where:{id: claims.id}})
        const {password, ...data} = await user.toJSON()
        res.send({
            user:data
        })
    }
    catch (e){
            return res.status(401).send({
                message: 'unauthenticated 2'
            })
    }
}

exports.logout = async (req, res) => {
    res.cookie('jwt', '', {maxAge:0})

    res.send({
        message: 'success'
    })
}