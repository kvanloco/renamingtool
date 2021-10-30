export default function ValidateService(input, rules) {
  /* *** validationService ****
   * @params input string
   * @params rules object
   * @return validated_input, messages[]
   *
   * [ ] required
   * [ ] minlength
   * [ ] maxlength
   * [ ] REGEX format
   * [ ] Numeric
   * [ ] Alfanumeric
   * [ ] InList (predefined list)
   */
  let messages = [];
  // set message if optional = false && input is empty
  if (rules.required && rules.required === true && input === "") {
    messages.push("field should not be empty");
  }
  if (rules.minLength && rules.minLength > input.length) {
    messages.push("text should be longer then " + rules.minLength + "!");
  }
  if (rules.maxLength && rules.maxLength < input.length) {
    messages.push("text may not be longer then " + rules.maxLength + "!");
  }
  return { input, messages };
}
