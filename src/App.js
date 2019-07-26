import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Grid, Row, Col } from "react-flexbox-grid";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtended from "./components/ForecastExtended";

import "./App.css";

const cities = [
  "Buenos Aires,ar",
  "Cordoba,ar",
  "Montevideo,uy",
  "Santiago,cl"
];

class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <AppBar title="weatherApp" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities}>
              </LocationListContainer >
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  {city && <ForecastExtended city={city} />}
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}



export default App
