// actions
import { checkUserEmailUniqueness } from '../../actions/users'

export const asyncValidate = (values, dispatch) => {
  if (!values.email) {
    return Promise.resolve()
  }
  
  return dispatch(checkUserEmailUniqueness(values.email))
    .then((json) => {
      if (json && json.errors && json.errors.length > 0) {
        throw { email: 'This email is taken' }
      }
    })
    .catch((error) => {
      if (error.email) {
        throw error
      }
      throw { email: 'Unable to validate email' }
    })
}
