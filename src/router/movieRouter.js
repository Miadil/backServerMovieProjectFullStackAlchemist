const express = require('express')
const db = require('../model/db')

const router = express.Router()

const { browse } = require("../controller/movieController")

// get http://localhost:4242/api/movie/
router.get('/', browse )

module.exports = router


// async (req,res)=> {
//   const [movies] = await db.query('select * from movie')
//   res.json(movies)
// }