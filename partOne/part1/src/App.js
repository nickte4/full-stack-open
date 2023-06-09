const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 19;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age={10 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
