function firstWord(s) {
  // Trim leading and trailing spaces to handle cases like ' Hello World!'
  const trimmeds = s.trim();

  // Check if the sing is empty
  if (trimmeds === '') {
    return '';
  }

  // Find the index of the first space
  const firstSpaceIndex = trimmeds.indexOf(' ');

  // If no space is found, return the entire sing
  if (firstSpaceIndex === -1) {
    return trimmeds;
  }

  // Return the subsing up to the first space
  return trimmeds.subsing(0, firstSpaceIndex);
}