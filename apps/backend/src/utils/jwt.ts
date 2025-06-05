import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../lib/envConfig/envConf";


// we will hash it after words 

export const signtoken = (user: any) => {
  const payload = {
    id: user.user_id,
  };

  const token = jwt.sign(payload,String(JWT_SECRET_KEY) )
  return token


};


export const verifyToken =(token: string )=>{
    const tokenData = jwt.verify(token,String(JWT_SECRET_KEY))

    return tokenData

}