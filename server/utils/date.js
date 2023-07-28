function isValidDateFormat(dateString) {
  // Regular expression for "yyyy-MM-dd" format
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  // Test if the dateString matches the regex pattern
  return regex.test(dateString);
}

module.exports = isValidDateFormat;
