
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a URL to ensure it has https:// prefix
 */
export function formatURL(url: string): string {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://${url}`;
}

/**
 * Truncates text to a specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Creates a title case string from a camelCase or snake_case string
 */
export function toTitleCase(str: string): string {
  if (!str) return '';
  
  // Handle camelCase
  const fromCamelCase = str.replace(/([A-Z])/g, ' $1');
  
  // Handle snake_case and other separators
  const withSpaces = fromCamelCase.replace(/[_-]/g, ' ');
  
  // Capitalize first letter of each word
  return withSpaces
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
