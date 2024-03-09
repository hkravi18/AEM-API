//utils
const prisma = require('../utils/prismaClient');
const { verifyToken } = require('../utils/handleJWT');

const authMiddleware = async(req, res, next) => {
    const { authorization } = req.headers;
    
    if (!authorization) {
        return res.status(401).json({
            ok: false, 
            error: "Authorization token is required",
            data: {}
        });
    }
    
    const token = authorization.split(' ')[1];
    try { 
        const { email } = verifyToken(token);
        req.user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        req.recievedToken = token;

        if (!req.user) {
            return res.status(404).json({
                ok: false, 
                error: "User does not exist",
                data: {}
            });
        }

        next();
    } catch (err) {
        return res.status(401).json({
            ok: false, 
            error: "Request is not authorized",
            data: {}
        });
    }
};

module.exports = authMiddleware;