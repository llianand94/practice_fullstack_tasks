module.exports.errorCatcher = async (err,req,res,next)=>{
  const statusError = err.status || 500;
  res.status(statusError).send({
    errors: [{message: err.message || 'Error occure on Server point'}]
  })
};