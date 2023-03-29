const NewExpense = () => {
  const addForm = () => {
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let amount = document.getElementById("amount").value;
    let location = document.getElementById("location").value;
    console.log([title, date, amount, location]);
  };
  return (
    <div>
      <form>
        <label>title</label>
        <input type="text" id="title"></input>
        <label>Date</label>
        <input type="date" id="date"></input>
        <label>Location</label>
        <input type="text" id="location"></input>
        <label>Amount</label>
        <input type="number" id="amount"></input>
        <br></br>
        <input type="button" value="submit" onClick={addForm}></input>
      </form>
    </div>
  );
};

export default NewExpense;
