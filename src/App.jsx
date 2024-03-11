import { useState } from "react";

import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import Results from "./Components/Results";

function App() {
  //Moved initially from InputForm
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <InputForm userInput={userInput} onChangeInput={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
