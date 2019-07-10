import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Grid, Row, Col } from "react-flexbox-grid";
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar'
import LocationList from "./components/LocationList";
import "./App.css";

const cities = [
  "Buenos Aires,ar",
  "Cordoba,ar",
  "Montevideo,uy",
  "Santiago,cl"
];
class App extends Component {
  handleSelectedLocation = city => {};
  render() {
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
              <LocationList cities={cities}>
                onSelectedLocation={this.handleSelectedLocation}
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
            <Paper zDepth={4}>
            <div className='detail'></div>
            </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
