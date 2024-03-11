import Header from "./Components/Header";
import InputForm from "./Components/InputForm";

function App(props) {
  return (
    <>
      <Header />
      <InputForm
        onSubmit={handleSubmit}
        principal={props.principal}
        rate={props.rate}
        duration={props.duration}
        returnAmount={props.returnAmount}
      />
    </>
  );
}

export default App;
