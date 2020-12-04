import UpdatedComponent from "./Counter";
class ClickCounter extends React.Component {
  render() {
    const { incrementCount, count } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Increase</button>
        <h1>Increased {count} Times</h1>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter, 20);
