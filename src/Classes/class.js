const STRING_REGEX = /^[A-Za-z]+$/g;
const DIGIT_REGEX = /^\d+$/g;

const TYPE_UNKNOWN = 'unknownToken';
const TYPE_STRING = 'stringToken';
const TYPE_DIGIT = 'digitToken';

const REGEX_TYPE_MAP = {
  stringToken: STRING_REGEX,
  digitToken: DIGIT_REGEX,
};

class Token {
  constructor(value) {
    this.value = value;
    this.type = TYPE_UNKNOWN;

    this.checkType();
  }

  checkType() {
    /** @constant {string} tokenType */
    for (const tokenType in REGEX_TYPE_MAP) {
      /** @constant {RegExp} tokenRegex */
      const tokenRegex = REGEX_TYPE_MAP[tokenType];

      if (!tokenRegex.test(this.value)) {
        continue;
      }

      this.type = tokenType;
    }
  }

  printType() {
    console.log(`Token with value ${this.value} is of type ${this.type}`);
  }
}

const digitToken = new Token('98');

digitToken.printType();

const stringToken = new Token('ifjisadjfiaJAIJFIA');

stringToken.printType();

const unknownToken = new Token('()(!U""()(!');

unknownToken.printType();
