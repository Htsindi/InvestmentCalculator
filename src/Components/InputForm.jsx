export default function InputForm() {
  return (
    <form>
      <div className="user-input">
        <label htmlFor="principal">Principal</label>
        <input type="number" id="principal" />
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" />
      </div>
      <div className="user-input">
        <label htmlFor="rate">Rate</label>
        <input type="number" id="rate" />
        <label>Years</label>
        <input type="number" id="years" />
      </div>
    </form>
  );
}
