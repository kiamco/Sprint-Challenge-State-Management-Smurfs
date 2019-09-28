import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchSmurf, addSmurf } from '../actions/index';
import SmurfForm from './smurfForm';
import "./App.css";
import 'semantic-ui-css/semantic.min.css'
import SmurfList from './smurfList'

const App = ({ fetchSmurf, addSmurf, smurf }) => {

  useEffect(() => {
    fetchSmurf();
  }, [fetchSmurf]);

  const addSomeSmurf = (item) => {
    addSmurf(item);
  }
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm addSmurf={addSomeSmurf} />
      <SmurfList smurfs={smurf} />
    </div>
  );
}

const mapToStateprops = state => {
  return {
    smurf: state || []
  };
}


export default connect(
  mapToStateprops,
  {
    fetchSmurf,
    addSmurf
  })(App);
