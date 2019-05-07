module.exports = {

  cpfValidator: (cpf) => {
    if (!(typeof cpf === "string" && cpf.length === 11)) {
      return false;
    }
    const array = cpf.split("");
    const arrayFirstDigit = array.slice(0, 9);
    const arraySecondDigit = array.slice(0, 10);

    const sum = arrayFirstDigit.map((value, index) =>
      parseInt(value) * (10 - index)).reduce((accumulate, item) =>
      accumulate += item);
    const firstDigit = sum % 11;
    const validFirstDigit = firstDigit === (0 || 1) ? 0 : (11 - firstDigit);

    const sum2 = arraySecondDigit.map((value, index) =>
      parseInt(value) * (11 - index)).reduce((accumulate, item) =>
      accumulate += item);
    const secondDigit = sum2 % 11;
    const validSecondDigit = secondDigit === (0 || 1) ? 0 : (11 - secondDigit);

    return validFirstDigit.toString() === cpf[9] && validSecondDigit.toString() === cpf[10];
  }
};