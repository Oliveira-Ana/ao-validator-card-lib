const assert = require('assert');
const validatorNumber = require('../index');
const cardValidator = validatorNumber.cardValidator;
  
describe("cardValidator()", () => {

  it("Deveria retornar erro quando parâmetro estiver vazio", () => {
    assert.equal(cardValidator(), "Este campo esta vazio, digite o número do seu cartão");
  });

  it("Deveria retornar erro se o número for uma string", () => {
    assert.equal(cardValidator("string"), "Digite apenas números nesse campo!");
  });

  it("Deveria retornar erro se for digitado apenas 1 número", () => {
    assert.equal(cardValidator(1), "Digite o número correto do seu cartão! Ele não pode ter apenas 1 digito ou mais que 16!");
  });

  it("Deveria retornar erro se for digitado mais de 16 números", () => {
    assert.equal(cardValidator(999999999999999999), "Digite o número correto do seu cartão! Ele não pode ter apenas 1 digito ou mais que 16!");
  });

  it("Deveria retornar true para o numero 36490102462661", () => {
    assert.equal(cardValidator(36490102462661), true);
  });

   it("Deveria retornar false para o numero 36490102462662", () => {
    assert.equal(cardValidator(36490102462662), false);
  });

  it("Deveria retornar false para o numero 1245868", () => {
    assert.equal(cardValidator(1245868), false);
  });
});
