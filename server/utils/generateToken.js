import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = ( userId, res ) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:"15d",
    } );
    
    // Set cookie in response header
    res.cookie("jwt", token, {
        maxAge:15*24*60*60*1000,
        httpOnly:true, // prevent access from client side script or  XSS attacks  
        sameSite:"strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development", 

    });
}

export default generateTokenAndSetCookie;