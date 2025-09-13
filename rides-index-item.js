// utils
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { FaLongArrowAltRight } from 'react-icons/fa'
import pluralize from 'pluralize'
import Timestamp from 'react-time'

// components
import { RenderUserAge } from '../../../components/shared/render-user-age/render-user-age'
import { Stars } from '../../../components/shared/stars/stars'
import { RideShape } from '../../../utils/prop-types'

const RidesIndexItem = ({ ride }) => {
  const tooltipComfort = (
    <Tooltip id='tooltip-comfort'>{ride.comfort}</Tooltip>
  )

  return (
    <Link to={`/rides/${ride.id}`}>
      <div className='ride'>
        {/* Ride Status */}
        <div className='ride-status'>
          <div className='ride-status__label'>{ride.status}</div>
        </div>

        {/* Ride Description */}
        <div className='ride-description'>
          <div className='ride-description__start_date'>
            <Timestamp value={ride.start_date} format="dddd DD MMMM - HH:mm" />
          </div>
          <div className='ride-description__start-city'>{ride.start_city}</div>
          <FaLongArrowAltRight className='ride-description__arrow' />
          <div className='ride-description__destination-city'>{ride.destination_city}</div>

          <div className='ride-description__car'>
            <div className='ride-description__car-label'>Car:</div>
            <div className='ride-description__car-name'>{ride.car.full_name}</div>
            <Stars stars={ride.car.comfort_stars} label={ride.car.comfort} />
          </div>
        </div>

        {/* Ride Driver */}
        <div className='ride-driver'>
          <div className='ride-driver__avatar'>
            <img src={ride.driver.avatar} alt={ride.driver.full_name} />
          </div>
          <div className='ride-driver__info'>
            <div className='ride-driver__name'>{ride.driver.full_name}</div>
            <div className='ride-driver__age'><RenderUserAge user={ride.driver} /></div>
          </div>
        </div>

        {/* Ride Offer */}
        <div className='ride-offer'>
          <div className='ride-offer__price'>
            <div className='ride-offer__price-value'>{ride.price}</div>
            <div className='ride-offer__price-currency'>{ride.currency}</div>
            <div className='ride-offer__price-label'>per person</div>
            <div className='ride-offer__savings'>Save on fuel costs!</div>
          </div>
          <div className='ride-offer__places'>
            <div className='ride-offer__places-free'>{ride.free_places_count}</div>
            <div className='ride-offer__places-label'>
              / {ride.places} {pluralize('seat', ride.free_places_count)} available
            </div>
            <div className='ride-offer__transport'>{ride.transport_type === 'bus' ? '🚌 Bus' : '🚗 Car'}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

RidesIndexItem.propTypes = {
  ride: RideShape.isRequired
}

export default memo(RidesIndexItem)
