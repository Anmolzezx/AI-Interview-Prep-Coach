import { Request, Response } from 'express';
import * as authService from '../services/authService';
import { RegisterRequest, LoginRequest, RefreshTokenRequest, AuthRequest } from '../types';

/**
 * Register user
 */
export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, name } = req.body as RegisterRequest;

        if (!email || !password || !name) {
            return res.status(400).json({
                status: 'error',
                message: 'Missing required fields',
            });
        }

        const result = await authService.registerUser(email, password, name);

        return res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            data: result,
        });
    } catch (error: any) {
        return res.status(400).json({
            status: 'error',
            message: error.message || 'Registration failed',
        });
    }
};

/**
 * Login user
 */
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body as LoginRequest;

        if (!email || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Missing email or password',
            });
        }

        const result = await authService.loginUser(email, password);

        return res.status(200).json({
            status: 'success',
            message: 'Login successful',
            data: result,
        });
    } catch (error: any) {
        return res.status(401).json({
            status: 'error',
            message: error.message || 'Login failed',
        });
    }
};

/**
 * Refresh token
 */
export const refresh = async (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.body as RefreshTokenRequest;

        if (!refreshToken) {
            return res.status(400).json({
                status: 'error',
                message: 'Refresh token is required',
            });
        }

        const result = await authService.refreshAccessToken(refreshToken);

        return res.status(200).json({
            status: 'success',
            data: result,
        });
    } catch (error: any) {
        return res.status(401).json({
            status: 'error',
            message: error.message || 'Invalid refresh token',
        });
    }
};

/**
 * Get current user profile
 */
export const getProfile = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                status: 'error',
                message: 'Not authenticated',
            });
        }

        const user = await authService.getUserById(req.user.id);

        return res.status(200).json({
            status: 'success',
            data: { user },
        });
    } catch (error: any) {
        return res.status(404).json({
            status: 'error',
            message: error.message || 'User not found',
        });
    }
};

/**
 * Logout (client-side only for JWT, but good to have endpoint)
 */
export const logout = async (_req: Request, res: Response) => {
    return res.status(200).json({
        status: 'success',
        message: 'Logged out successfully',
    });
};
