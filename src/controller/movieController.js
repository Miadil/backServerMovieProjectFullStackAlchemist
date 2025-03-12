const {findAll} = require("../model/movieModel")

const browse = async (req,res)=> {
  try {
    const movies = await findAll()
    res.status(200).json(movies)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}
// const read = (req,res)=> {

// }
module.exports = { browse }
