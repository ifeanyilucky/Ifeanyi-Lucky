import React from "react";

const UpdatedComponent = (IncrementComponent, Additional) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + Additional };
      });
    };

    render() {
      return (
        <IncrementComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
