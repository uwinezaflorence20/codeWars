function validate(username, password) {
 
  const unsafePattern = /['";]/;

  if (
    typeof username !== "string" || typeof password !== "string" ||
    unsafePattern.test(username) || unsafePattern.test(password)
  ) {
    return "Wrong username or password!";
  }

  const database = new Database();
  return database.login(username, password);
}