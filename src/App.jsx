import { useState } from "react";

import Header from "./Components/Header";
import UserInput from "./Components/InputForm";
import Results from "./Components/Results";

function App() {
  //Moved initially from InputForm
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  //Validating values to be above zero
  /* const inputIsValid = (userInput) => {
    return (
      userInput.initialInvestment > 0 &&
      userInput.annualInvestment > 0 &&
      userInput.expectedReturn > 0 &&
      userInput.duration > 0
    );
  };*/
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <div>Invalid Input Duration must be at least 1</div>}
      {inputIsValid && <Results input={userInput} />}
    </>
    /* {inputIsValid ? <Results input={userInput} /> : <div>Invalid Input</div>} */
  );
}

export default App;
