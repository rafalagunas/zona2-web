// Token utility functions
export interface DecodedToken {
  email: string;
  sub: number;
  role: {
    id: number;
    name: string;
    description: string;
    permissions: string[];
    createdAt: string;
    updatedAt: string;
  };
  iat: number;
  exp: number;
}

export const TokenKey = 'zona2Token';

/**
 * Decode JWT token without external libraries
 */
export const decodeToken = (token: string): DecodedToken | null => {
  try {
    if (!token || typeof token !== 'string') {
      return null;
    }
    
    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }
    
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};

/**
 * Check if token is expired
 */
export const isTokenExpired = (token: string): boolean => {
  if (!token) return true;
  
  const decoded = decodeToken(token);
  if (!decoded) return true;
  
  const currentTime = Math.floor(Date.now() / 1000);
  return decoded.exp < currentTime;
};

/**
 * Get token from localStorage
 */
export const getToken = (): string | null => {
  return localStorage.getItem(TokenKey);
};

/**
 * Set token in localStorage
 */
export const setToken = (token: string): void => {
  localStorage.setItem(TokenKey, token);
};

/**
 * Remove token from localStorage
 */
export const removeToken = (): void => {
  localStorage.removeItem(TokenKey);
};

/**
 * Check if user is authenticated and token is valid
 */
export const isAuthenticated = (): boolean => {
  const token = getToken();
  if (!token) return false;
  
  return !isTokenExpired(token);
};


