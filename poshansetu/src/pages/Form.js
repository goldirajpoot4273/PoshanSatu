const Form = () => {
    return (
      <form className="form">
        <div>
          <label htmlFor="baby-age">Baby Age</label>
          <input type="number" id="baby-age" placeholder="Enter age in months" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select id="gender">
            <option value="">Select Gender</option>
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
          </select>
        </div>
        <div>
          <label htmlFor="weight">Weight (kg)</label>
          <input type="number" id="weight" placeholder="Enter baby weight" />
        </div>
        <div>
          <label htmlFor="skin-color">Skin Color</label>
          <input type="text" id="skin-color" placeholder="e.g. Pale" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default Form;
  