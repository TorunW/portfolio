import  { setCookies, removeCookies } from 'cookies-next'
import md5 from 'md5'

export default async function (
    req,
    res
  ) {
    if (req.method === "POST"){
      const { username, password } = req.body
      let success = false;
      if (username === process.env.SEC_USE && md5(password) === process.env.SEC_WOR){
        setCookies(`torun-wikstrom.com:${process.env.SEC_USE}`, process.env.SEC_WOR, { req, res, maxAge: 60 * 60 * 24 });
        success = true
        // removeCookies('key', { req, res });
        // return res.status(200).json({ message: "ok" })
      } else {
        removeCookies(`torun-wikstrom.com:${process.env.SEC_USE}`, { req, res });
      }
      // console.log(getCookies({ req, res }))
      res.json({success:success})
    } else if (req.method === "DELETE"){
      removeCookies(`torun-wikstrom.com:${process.env.SEC_USE}`, { req, res });
      res.json({message:"logged out"})
    }
  }
  