import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./CircleSelector";
import Circles from "./Circles";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 1,
    };
  }

  componentDidMount() {
    this.setState({ selected: 1 });
    console.log(this.state.selected);
  }

  changeStateHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      selected: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            changeStateHandler={this.changeStateHandler}
            selected={this.state.selected}
          />
          <Circles selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
