import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css';

const ShipCard = (props) => {
  const shipName = props.ship
  return (
    <div key={props.idx}>
      <Link
        to={{
          pathname: '/details',
          state: { shipName }
        }}
      >
        {props.name}
      </Link>
    </div>
  );
}

export default ShipCard;