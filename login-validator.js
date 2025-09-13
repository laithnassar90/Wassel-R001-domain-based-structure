import { sanitizeInput, validateEmail, validateRequired, validateMinLength } from '../../../utils/validation'

export default function LoginValidator(values, props) {
  const errors = {}
  const sanitizedEmail = sanitizeInput(values.email || '')
  const sanitizedPassword = sanitizeInput(values.password || '')

  if (!validateRequired(sanitizedEmail)) {
    errors.email = 'Required'
  } else if (!validateEmail(sanitizedEmail)) {
    errors.email = 'Invalid email address'
  }

  if (!validateRequired(sanitizedPassword)) {
    errors.password = 'Required'
  } else if (!validateMinLength(sanitizedPassword, 6)) {
    errors.password = 'Password must be at least 6 characters'
  }

  return errors
}
