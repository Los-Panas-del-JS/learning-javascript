/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/**
 * Write a program who can recognize if a word is palindrome or not
 * and how many palindromes can be formed
 *
 * aba = aba (1)
 * abba = baab (2)
 * abcabcabc = cbaabcabc = cbaabcabc (3)
 *
 * Expected Input
 * aba
 * abab
 * abcabcabc
 *
 * Expected Output
 * 1
 * 2
 * 3
 */

const KEY_PALINDROME = 'palindrome';
const KEY_IS_PALINDROME = 'isPalindrome';
const KEY_CAN_GENERATE = 'canGenerate';

class PalindromeGenerationSolver {
  /**
   * @param {Array} palindromes
   */
  constructor(palindromes) {
    this.palindromes = palindromes;
    this.palindromesCounters = [];
  }

  solve() {
    for (
      let palindromeIndex = 0;
      palindromeIndex < this.palindromes.length;
      palindromeIndex += 1
    ) {
      const readedPalindrome = this.palindromes[palindromeIndex];

      this.countChars(readedPalindrome);
      this.setProperties(palindromeIndex);
    }
  }

  /**
   * @param {string} palindrome
   */
  countChars(palindrome) {
    let currentChart = '';
    const palindromeCharCounters = {};

    palindromeCharCounters[KEY_PALINDROME] = palindrome;

    for (
      let charIndex = 0;
      charIndex < palindrome.length;
      charIndex += 1
    ) {
      currentChart = palindrome.charAt(charIndex);

      if (currentChart === '') {
        continue;
      }

      if (typeof palindromeCharCounters[currentChart] === 'undefined') {
        palindromeCharCounters[currentChart] = 1;
        continue;
      }

      palindromeCharCounters[currentChart] += 1;
    }

    this.palindromesCounters.push(palindromeCharCounters);
  }

  /**
   * @param {number} palindromeIndex
   * @returns {number}
   */
  calcPalindromeGeneration(palindromeIndex) {
    let palindromesNumber = 0;
    let palindromeCharCounter = 0;
    const currentPalindromeCounters = this.palindromesCounters[palindromeIndex];

    for (const palindromeChar in currentPalindromeCounters) {
      palindromeCharCounter = currentPalindromeCounters[palindromeChar];

      if ((palindromeCharCounter % 2) === 0) {
        palindromesNumber += 1;
      }
    }

    return palindromesNumber;
  }

  /**
   * @param {number} palindromeIndex
   */
  setProperties(palindromeIndex) {
    const currentPalindromeCounters = this.palindromesCounters[palindromeIndex];
    const palindromesNumber = this.calcPalindromeGeneration(palindromeIndex);

    currentPalindromeCounters[KEY_CAN_GENERATE] = palindromesNumber;
    currentPalindromeCounters[KEY_IS_PALINDROME] = (palindromesNumber > 0);
  }

  printOutput() {
    for (
      let counterIndex = 0;
      counterIndex < this.palindromesCounters.length;
      counterIndex += 1
    ) {
      const currentCounters = this.palindromesCounters[counterIndex];
      const currentPalindrome = currentCounters[KEY_PALINDROME];
      const isPalindrome = currentCounters[KEY_IS_PALINDROME];
      const palindromesNumber = currentCounters[KEY_CAN_GENERATE];

      console.log(currentPalindrome);
      console.log('is palindrome?', isPalindrome);
      console.log('how many can generate?', palindromesNumber);
    }
  }
}

const palindromeSolver = new PalindromeGenerationSolver([
  'somos o no somos',
  'isaac no ronca asi',
  'se verlas al reve',
  'amo la paloma',
  'anita lava la tina',
  'luz azul',
  'yo hago yoga hoy',
]);

palindromeSolver.solve();
palindromeSolver.printOutput();
