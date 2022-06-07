module.exports = (req, res, next) => {
  if (req.session.email) {
    console.log('authenticated')
    next()
  } 
  else {
    console.log('not authenticated')
  }
}