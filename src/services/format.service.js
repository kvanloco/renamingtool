function FormatService(input, rules) {
  /* *** formatService ****
   * @params input string
   * @params rules object
   * @return formatted_input
   *
   * [x] trim
   * [x] replace space to underscore
   * [x] to uppercase
   * [ ] set default values
   * [ ] reset values
   */
  let formatted_input = input;
  // remove trailing spaces
  formatted_input = input.trim();
  // replace spaces to _
  formatted_input = formatted_input.replace(/\s/g, "_");
  // if rules.uppercase, set to uppercase
  if (rules.uppercase === true) {
    formatted_input = formatted_input.toUpperCase();
  }
  console.log(formatted_input);
  //return formatted_input;
  return formatted_input;
}
export default FormatService;
