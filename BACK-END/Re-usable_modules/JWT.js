const JWT = require('jsonwebtoken');         


//A middleware function for JWT    
function verifyToken(req,res,next){                                                             if(!req.headers.authorization){                                                                 return res.status(401).send("Unauthorized requrst");                            }                                                                                       let token = req.headers.authorization;                                                  if(token === 'null'){                                                                           return res.status(401).send("Unauthorized requrst");                            }                                                                                                                                                                                try{                                                                                                   let payload=JWT.verify(token,'secretKey');                                              req.userId = payload.subject;                                                              next();                                                              }                                                                                       catch(err){                                                                                     return res.status(401).send("Unauthorized requrst");                            }                                                                                       }                                                                               module.exports = verifyToken;
