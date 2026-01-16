/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate password strength
 * - Minimum 8 characters
 * - At least 1 uppercase letter
 * - At least 1 lowercase letter
 * - At least 1 number
 * - At least 1 special character
 */
export const isValidPassword = (password: string): { valid: boolean; message?: string } => {
    if (password.length < 8) {
        return { valid: false, message: 'Password must be at least 8 characters long' };
    }

    if (!/[A-Z]/.test(password)) {
        return { valid: false, message: 'Password must contain at least one uppercase letter' };
    }

    if (!/[a-z]/.test(password)) {
        return { valid: false, message: 'Password must contain at least one lowercase letter' };
    }

    if (!/[0-9]/.test(password)) {
        return { valid: false, message: 'Password must contain at least one number' };
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return { valid: false, message: 'Password must contain at least one special character' };
    }

    return { valid: true };
};

/**
 * Validate name
 */
export const isValidName = (name: string): { valid: boolean; message?: string } => {
    if (name.length < 2) {
        return { valid: false, message: 'Name must be at least 2 characters long' };
    }

    if (name.length > 50) {
        return { valid: false, message: 'Name must not exceed 50 characters' };
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        return { valid: false, message: 'Name can only contain letters and spaces' };
    }

    return { valid: true };
};

/**
 * Sanitize email (lowercase and trim)
 */
export const sanitizeEmail = (email: string): string => {
    return email.toLowerCase().trim();
};

/**
 * Sanitize name (trim and capitalize)
 */
export const sanitizeName = (name: string): string => {
    return name.trim().replace(/\s+/g, ' ');
};
