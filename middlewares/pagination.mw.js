const MAX_LIMIT = 40;

module.exports.pagination = async (req,res,next)=>{
  try{
    const {query:{limit, offset}} = req;    
    const newLimit = limit > MAX_LIMIT || limit <= 0 ? MAX_LIMIT:limit;
    req.pagination ={
      limit: newLimit,
      offset: offset <=0 ? 0 : offset
    };
    next();
  }catch(error){
    next(error);
  }

}