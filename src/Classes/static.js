class Token {
  static stringRegex = /^[A-Za-z]+$/g;
  static digitRegex = /^\d+$/g;

  static typeUnknown = 'unknownType';
  static typeDigit = 'digitToken';
  static typeString = 'stringToken';

  static regexTypeMap = {
    digitToken: Token.digitRegex,
    stringToken: Token.stringRegex,
  };

  constructor(value) {
    this.value = value;
    this.type = Token.typeUnknown;

    this.checkType();
  }

  checkType() {
    /** @constant {string} tokenType */
    for (const tokenType in Token.regexTypeMap) {
      /** @constant {RegExp} tokenRegex */
      const tokenRegex = Token.regexTypeMap[tokenType];

      if (!tokenRegex.test(this.value)) {
        continue;
      }

      this.type = tokenType;
    }
  }

  printType() {
    console.log(`Token with value ${this.value} is of type ${this.type}`);
  }

  get isStringToken() {
    return (this.type === Token.typeString);
  }

  get isDigitToken() {
    return (this.type === Token.typeDigit);
  }

  /**
   * @param {string} value
   */
  static isDigit(value) {
    return Token.digitRegex.test(value);
  }
}

const digitToken = new Token('98');

digitToken.printType();
console.log(digitToken.isDigitToken);

const stringToken = new Token('ifjisadjfiaJAIJFIA');

stringToken.printType();
console.log(stringToken.isStringToken);

const unknownToken = new Token('()(!U""()(!');

unknownToken.printType();
console.log(unknownToken.isDigitToken);
console.log(unknownToken.isStringToken);

console.log('Is digit?', Token.isDigit('281892'));
