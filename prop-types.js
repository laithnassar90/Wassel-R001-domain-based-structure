import PropTypes from 'prop-types'

export const UserShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  full_name: PropTypes.string,
  avatar: PropTypes.string,
  created_at: PropTypes.string,
  last_seen_at: PropTypes.string
})

export const RideShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  start_city: PropTypes.string.isRequired,
  destination_city: PropTypes.string.isRequired,
  start_date: PropTypes.string.isRequired,
  price: PropTypes.number,
  currency: PropTypes.string,
  seats_available: PropTypes.number
})

export const CarShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  year: PropTypes.number,
  color: PropTypes.string
})

export const NotificationShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  seen: PropTypes.bool,
  created_at: PropTypes.string
})