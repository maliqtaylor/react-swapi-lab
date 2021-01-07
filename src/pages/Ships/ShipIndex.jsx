import React, { Component } from 'react';
import { getShipsList } from '../../services/sw-api';
import ShipCard from '../../components/ShipCard'
import { Card, Row } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css'

class ShipIndex extends Component {
  state = {
    results: []
  }

  async componentDidMount() {
    const shipsData = await getShipsList()
    this.setState({ results: shipsData.results })
  }

  render() {
    return (
      <div className='container'>
        <Row>
          {this.state.results.map((ship, idx) => (
            <div className='col s8 offset-s2' key={idx}>
              <Card>
                <div className="card-image waves-effect waves-block waves-light">
                  <img src="https://sacredicon.files.wordpress.com/2019/02/starfighters-e1549479582387.jpg?w=789" alt="ships icon" />
                </div>
                <ShipCard idx={idx} name={ship.name} ship={ship} />
              </Card>
            </div>
          ))}
        </Row>
      </div>

    );
  }
}

export default ShipIndex;

