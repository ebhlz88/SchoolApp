export default {
  isEmpty: function (value) {
    if (
      value === null ||
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0) ||
      (value instanceof Object && Object.keys(value).length === 0)
    )
      return true;
    return false;
  },
  isEmail: function (value) {
    return String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  },
  isValidMaskedInput: function (value) {
    const separator_count = (value.match(/-/g) || []).length;
    const underline_count = (value.match(/_/g) || []).length;
    // When input value is fullfilled
    if (underline_count === 0) {
      return true;
    }
    // When input value is empty
    if (underline_count + separator_count === value.length) {
      return true;
    }
    return false;
  },
  isEmptyMaskedInput: function (value) {
    const separator_count = (value.match(/-/g) || []).length;
    const underline_count = (value.match(/_/g) || []).length;
    // When input value is empty
    if (underline_count + separator_count === value.length) return true;
    return false;
  },
  isValidDate: function (value) {
    const separator_count = (value.match(/-/g) || []).length;
    const underline_count = (value.match(/_/g) || []).length;
    // When input value is empty
    if (underline_count + separator_count === value.length) return true;

    // When input value is not empty
    var dateRegex =
      /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
    return dateRegex.test(value);
  },
};
