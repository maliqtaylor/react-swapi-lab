import React, { Component } from 'react';
import { getDetails } from '../../services/sw-api'

class ShipDetails extends Component {
  state = {
    url: this.props.location.state.shipName.url,
    shipDetails: {}
  }

  async componentDidMount() {
    const shipDetails = await getDetails(this.state.url)
    this.setState({ shipDetails })
  }

  render() {
    console.log(this.state);
    const { shipDetails } = this.state;
    return (
      <div>
        {shipDetails.name ?
          <>
            <h2> {shipDetails.name} </h2>
          </>
          :
          <>
            <p>Loading Ship Details...</p>
            
          </>

        }
      </div>
    );
  };
}

export default ShipDetails;