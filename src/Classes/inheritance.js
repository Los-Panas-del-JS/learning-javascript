class AbstractToken {
  static varRegex = /^[A-Za-z_]+\d*[A-Za-z_]*$/;

  /**
   * @param {string} value
   */
  constructor(value) {
    this.value = value;
  }

  isVar() {
    return AbstractToken
      .varRegex
      .test(this.value);
  }
}

class Token extends AbstractToken {
  static digitType = 'DIGIT';
  static stringType = 'STRING';
  static operatorType = 'OPERATOR';
  static variableType = 'VARIABLE';

  /**
   * @param {string} value
   * @param {RegExp} regex
   */
  constructor(value, regex) {
    super(value);

    this.regex = regex;
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
    return Token.variableType;
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
    return Token.digitType;
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
    return Token.stringType;
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
    return Token.operatorType;
  }
}

class TinyLexer {
  static skipChar = /^\s{1,}$/;

  constructor() {
    this.varMatcher = new Token('');

    this.matchers = [
      new NumericToken(''),
      new StringToken(''),
      new OperatorToken(''),
    ];
  }

  /**
   * @param {string} sourceCodeLine
   */
  analyze(sourceCodeLine) {
    for (const char of sourceCodeLine) {
      if (TinyLexer.skipChar.test(char)) {
        continue;
      }

      this.inspectChar(char);
    }
  }

  /**
   * @param {string} char
   */
  inspectChar(char) {
    this.varMatcher.setValue(char);

    if (this.varMatcher.assert()) {
      this.printChar(char, this.varMatcher.getType());

      return;
    }

    /** @constant {Token} matcher */
    for (const matcher of this.matchers) {
      matcher.setValue(matcher);

      if (matcher.assert()) {
        this.printChar(char, matcher.getType());
      }
    }
  }

  /**
   * @param {string} char
   * @param {string} type
   */
  printChar(char, type) {
    console.log(`Character ${char} is from a ${type}`);
  }
}

const lexer = new TinyLexer();

lexer.analyze('a + b = c');

class AbstractExpression {

}

class Expression extends AbstractExpression {

}

/**
 * 'z' + 't' = 'zt' => concat
 * a + b = c
 *
 * a (variable)
 * + (operator)
 * b (variable)
 * = (operator)
 * c (variable
 *
 * Expression
 *
 * (a + b) = c
 * a + b => sum
 * sum = c => assigment
 */
