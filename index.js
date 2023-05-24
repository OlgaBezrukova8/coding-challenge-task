const firstNonRepeated = (string) => {
  const stringArray = string.split("");
  return (
    stringArray.find(
      (char) => string.indexOf(char) === string.lastIndexOf(char)
    ) || ""
  );
};
