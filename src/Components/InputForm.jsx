import { useState } from "react";

export default function InputForm() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [duration, setDurations] = useState(0);
  const [returnAmount, setReturnAmount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const principal = Number(event.target.principal.value);
    const rate = Number(event.target.rate.value);
    const duration = Number(event.target.duration.value);
    const returnAmount = principal * Math.pow(1 + rate / 100, duration);
    if (principal > 0) {
      setPrincipal(principal);
    }
    if (principal > 0 && rate > 0) {
      setRate(rate);
    }
    if (principal > 0 && duration > 0) {
      setDurations(duration);
    }

    if (principal > 0 && rate > 0 && duration > 0) {
      setReturnAmount(returnAmount);
    } else {
      alert("Please enter valid values");
    }
  };

  return (
    <form id="user-input" onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Initial Investment</label>
        <input type="number" id="principal" />
        <label>Annual Investment</label>
        <input type="number" id="amount" />
      </div>
      <div className="input-group">
        <label>Rate</label>
        <input type="number" id="rate" />
        <label>Duration</label>
        <input type="number" id="years" />
      </div>
    </form>
  );
}
