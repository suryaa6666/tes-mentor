import PropTypes from "prop-types";

function Props() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent({ test, age }) {
  return (
    <>
      <h1>{test}</h1>
      <h1>{age}</h1>
    </>
  );
}

MyComponent.propTypes = {
  test: PropTypes.string,
  age: PropTypes.number,
};

export default Props;
