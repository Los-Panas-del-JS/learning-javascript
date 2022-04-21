/* eslint-disable max-classes-per-file */
class AbstractToken {
  /**
   * @param {string} value
   */
  constructor(value) {
    this.value = value;
  }

  print() {
    console.log(
      this.constructor.name,
      'with value:',
      this.value,
    );
  }
}

class Token extends AbstractToken {
  /**
   * @param {string} value
   * @param {RegExp} regex
   */
  constructor(value, regex) {
    super(value);

    this.regex = regex;
    this.digitType = 'DIGIT';
    this.stringType = 'STRING';
    this.operatorType = 'OPERATOR';
    this.boolToken = 'BOOLEAN';
    this.variableType = 'VARIABLE';
    this.dataTypeType = 'DATATYPE';
  }

  /**
   * @param {string} value
   */
  setValue(value) {
    this.value = value;
  }

  assert() {
    return this.regex.test(this.value);
  }

  getType() {
    return this.variableType;
  }
}

class VariableToken extends Token {
  /**
   * @param {string} value
   */
  constructor(value) {
    super(value, /^[A-Za-z_]+\d*[A-Za-z_]*$/);
  }

  getType() {
    return this.variableType;
  }
}

class NumericToken extends Token {
  /**
   * @param {string} value
   */
  constructor(value) {
    super(value, /^\d+$/g);
  }

  getType() {
    return this.digitType;
  }
}

class StringToken extends Token {
  /**
   * @param {string} value
   */
  constructor(value) {
    super(value, /^\'{1,1}[\w\W\s]+\'{1,1}$/g);
  }

  getType() {
    return this.stringType;
  }
}

class BooleanToken extends Token {
  /**
   * @param {string} value
   */
  constructor(value) {
    super(value, /^(true|false|TRUE|FALSE)$/);
  }

  getType() {
    return this.boolToken;
  }
}

class OperatorToken extends Token {
  /**
   * @param {string} value
   */
  constructor(value) {
    super(value, /^(\+|\-|\/|\*|\=){1,1}$/g);
  }

  getType() {
    return this.operatorType;
  }
}

class DataTypeToken extends Token {
  /**
   * @paran {string} value
   */
  constructor(value) {
    super(value, /^(int|string|bool)$/);
  }

  getType() {
    return this.dataTypeType;
  }
}

class TinyLexer {
  constructor() {
    this.matchers = [
      new DataTypeToken(''),
      new BooleanToken(''),
      new OperatorToken(''),
      new VariableToken(''),
      new NumericToken(''),
      new StringToken(''),
    ];

    this.skipChar = /\s{1,}/;
  }

  /**
   * @param {string} sourceCodeLine
   */
  analyze(sourceCodeLine) {
    let char = '';
    let charOffset = '';

    for (
      let charIndex = 0;
      charIndex < sourceCodeLine.length;
      charIndex += 1
    ) {
      char = sourceCodeLine.charAt(charIndex);

      if (charIndex === (sourceCodeLine.length - 1)) {
        charOffset = charOffset.concat(char);

        this.inspectCharOffset(charOffset);
      }

      if (!this.skipChar.test(char)) {
        charOffset = charOffset.concat(char);

        continue;
      }

      this.inspectCharOffset(charOffset);

      charOffset = '';
    }
  }

  /**
   * @param {string} charOffset
   */
  inspectCharOffset(charOffset) {
    let isMatcherAsserted = false;

    /** @constant {Token} matcher */
    for (const matcher of this.matchers) {
      matcher.setValue(charOffset);

      if (isMatcherAsserted) {
        return;
      }

      if (!matcher.assert()) {
        continue;
      }

      matcher.print();

      this.printCharOffset(
        charOffset,
        matcher.getType(),
      );

      isMatcherAsserted = true;
    }
  }

  /**
   * @param {string} charOffset
   * @param {string} type
   */
  printCharOffset(charOffset, type) {
    console.log(`Character Offset ${charOffset} is ${type}`);
  }
}

/**
 * 'z' + 't' = 'zt' => concat
 * a + b = c
 *
 * a (variable)
 * + (operator)
 * b (variable)
 * = (operator)
 * c (variable)
 */

const lexer = new TinyLexer();

lexer.analyze('bool a = true');
