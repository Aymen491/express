module.exports = function valitime(req,res,next){
   
   const time = Date.now;
  if(time < '09:00:00' && time > '17:00:00' ){
      res.status(200);
      next() ;
  }
  else{
      res.status(400).json ("page non dsponible actuellement")
  }
}

// module.exports = function valiiday(req , res , next){
//     const date = getday();
//     if ( date == '0' && date == '1' ){
//         res.status (200);
//         next() ;

//     } else{
//         res.status (500).json ()

//     }

// }