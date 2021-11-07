import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handleReset}
          className="btn btn-warning btn-sm"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            selected={true}
            onDelete={this.props.handleDelete}
            handleIncrement={this.props.handleIncrement}
          >
            <h4>Counter#{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
