function cardValidator(numberCard) {
  function validatorCard(num) {
    const valueNumberString = num.toString();
    const arrayReverseNumber = [];
    for (let an in valueNumberString) {
      arrayReverseNumber.unshift(parseInt(valueNumberString[an]));
    }
    for (let ol = 1; ol < arrayReverseNumber.length; ol = ol + 2) {
      if (arrayReverseNumber[ol] * 2 > 9) {
        arrayReverseNumber[ol] = (arrayReverseNumber[ol] * 2) - 9;
      } else {
        arrayReverseNumber[ol] *= 2;
      }
    }
    const sum = arrayReverseNumber.reduce((acum, item) => acum + item);
    return (sum % 10 === 0) ? true : false;
  }
  try {
    if (numberCard === '' || !numberCard) {
      throw new Error('Este campo esta vazio, digite o número do seu cartão');
    }
    if (typeof numberCard === 'string') {
      throw new Error('Digite apenas números nesse campo!');
    } else {
      if (numberCard.toString().length < 13 || numberCard.toString().length > 16) {
        throw new Error('Digite o número correto do seu cartão! Ele não pode ter menos que 13 digitos ou mais que 16!');
      } else {
        return validatorCard(numberCard);
      }
    } 
  } catch (error) {
    return error.message;
  }
}

module.exports = cardValidator;