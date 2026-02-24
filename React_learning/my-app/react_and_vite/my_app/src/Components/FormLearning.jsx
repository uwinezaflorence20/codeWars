export default function FormLearning() {
  //   function signUp(formData){
  //     event.preventDefault();
  //     const formEl = event.currentTarget;
  //     const formData = new FormData(formEl)
  //     const email = formData.get("email");
  //     console.log(email);
  //     formEl.reset();
  //   }
  function signUp(formData) {
    const email = formData.get("email");
    const passWord = formData.get("password");
    console.log(passWord);
    console.log(email);
    const employmentStatus = formData.get("employmentStatus");
    console.log(employmentStatus);
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    console.log(dietaryRestrictions);
  }
  return (
    <section className="start">
      <h1 className="font-bold text-2xl pb-10">Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue="joe@schmoe.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          className="border-3"
          name="description"
          id="description"
          defaultValue="enter the text for description"
        ></textarea>

        <fieldset className="">
          <legend>
            <label>
              <input type="radio" name="employmentStatus" value="unemployed" />
              Label text
            </label>
            <label>
              <input type="radio" name="employmentStatus" value="employed" />
              Label text
            </label>
            <label>
              <input type="radio" name="employmentStatus" value="married" />
              Label text
            </label>
          </legend>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              defaultChecked={true}
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <button>Submit</button>
      </form>
    </section>
  );
}
