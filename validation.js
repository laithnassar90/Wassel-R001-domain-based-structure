/**
 * Sanitizes input by removing script tags and trimming whitespace
 * @param {string} input - The input string to sanitize
 * @returns {string} The sanitized input
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
}

/**
 * Validates email format using regex
 * @param {string} email - The email to validate
 * @returns {boolean} True if email is valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validates that a value is not empty
 * @param {*} value - The value to validate
 * @returns {boolean} True if value is not empty
 */
export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0
}

/**
 * Validates minimum length requirement
 * @param {*} value - The value to validate
 * @param {number} minLength - Minimum required length
 * @returns {boolean} True if value meets minimum length
 */
export const validateMinLength = (value, minLength) => {
  return value && value.toString().length >= minLength
}

/**
 * Validates maximum length requirement
 * @param {*} value - The value to validate
 * @param {number} maxLength - Maximum allowed length
 * @returns {boolean} True if value is within maximum length
 */
export const validateMaxLength = (value, maxLength) => {
  return !value || value.toString().length <= maxLength
}