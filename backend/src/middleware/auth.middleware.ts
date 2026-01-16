import { Response, NextFunction } from 'express';
import { verifyAccessToken } from '../utils/jwt';
import { AuthRequest } from '../types';

/**
 * Middleware to authenticate requests using JWT
 */
export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                status: 'error',
                message: 'No token provided',
            });
        }

        const token = authHeader.split(' ')[1]; // Bearer <token>

        if (!token) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid token format',
            });
        }

        const payload = verifyAccessToken(token);

        // Attach user info to request
        req.user = {
            id: payload.userId,
            email: payload.email,
            name: '', // We don't have name in token, but id is enough for most things
        };

        return next();
    } catch (error) {
        return res.status(401).json({
            status: 'error',
            message: 'Invalid or expired token',
        });
    }
};
