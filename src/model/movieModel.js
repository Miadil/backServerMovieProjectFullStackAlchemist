const db = require('./db')

const findAll = async () => {
  try {
      const [movies] = await db.query('select * from movie')
      return  movies 
  } catch (err) {
    console.error(err)
  }
}

module.exports = {findAll}