 function cardValidator(numberCard){
  try{
    if(numberCard === '' || !numberCard){
      throw new Error("Este campo esta vazio, digite o número do seu cartão");
    }
    if (typeof numberCard === "string") {
      throw new Error("Digite apenas números nesse campo!");
      }
      else {
        if (numberCard.toString().length === 1 || numberCard.toString().length > 16) {
          throw new Error("Digite o número correto do seu cartão! Ele não pode ter apenas 1 digito ou mais que 16!");
        } else {
          return validatorCard(numberCard);
        }
      } 
    } catch (error) {
      return error.message;
    }
  }

  function validatorCard(num) {
    let valueNumberString = num.toString();
    let arrayReverseNumber = [];
    for (let a in valueNumberString) {
      arrayReverseNumber.unshift(parseInt(valueNumberString[a]));
    }
    for (let o = 1; o < arrayReverseNumber.length; o = o + 2) {
      if (arrayReverseNumber[o] * 2 > 9) {
        arrayReverseNumber[o] = (arrayReverseNumber[o] * 2) - 9;
      } else {
        arrayReverseNumber[o] *= 2;
      }
    }
    let sum = arrayReverseNumber.reduce((acum, item) => acum + item)
    return (sum % 10 === 0) ? true : false;
  }
  module.exports.cardValidator = cardValidator;