/* eslint-disable max-classes-per-file */
/**
 * 42 pesos
 *
 * 3 x 10 pesos
 * 2 x 5 pesos
 * 10 x 2 pesos
 * 100 x 1 pesos
 *
 * 3 de 10
 * 2 de 5
 * 1 de 2
 */

class AbstractCoin {
  /**
   * @param {number} coinValue
   */
  constructor(coinValue) {
    this.quantity = 0;
    this.coinValue = coinValue;
  }

  /**
   * @returns {number}
   */
  getQuantity() {
    return this.quantity;
  }

  /**
   * @param {number} quantity
   */
  setQuantity(quantity) {
    this.quantity = quantity;
  }

  /**
   * @returns {number}
   */
  getCoinValue() {
    return this.coinValue;
  }

  get maxAvailable() {
    return this.quantity * this.coinValue;
  }
}

class NullCoin extends AbstractCoin {
  static get fixedValue() {
    return -1;
  }

  constructor() {
    super(NullCoin.fixedValue);
  }
}

class OneCoin extends AbstractCoin {
  static get fixedValue() {
    return 1;
  }

  constructor() {
    super(OneCoin.fixedValue);
  }
}

class TwoCoin extends AbstractCoin {
  static get fixedValue() {
    return 2;
  }

  constructor() {
    super(TwoCoin.fixedValue);
  }
}

class FiveCoin extends AbstractCoin {
  static get fixedValue() {
    return 5;
  }

  constructor() {
    super(FiveCoin.fixedValue);
  }
}

class TenCoin extends AbstractCoin {
  static get fixedValue() {
    return 10;
  }

  constructor() {
    super(TenCoin.fixedValue);
  }
}

class AbstractError extends Error {
  print() {
    console.log(`${this.constructor}: ${this.message}`);
  }
}

class CoinNotFoundError extends AbstractError {
  /**
   * @param {number} coinValue
   */
  constructor(coinValue) {
    super(`The coin with value ${coinValue} cannot be generated`);
  }
}

class MaxAvailableOverflowError extends AbstractError {
  /**
   * @param {number} maxAvailable
   * @param {number} ammount
   */
  constructor(maxAvailable, ammount) {
    super(`I can't give you change cause my money available is ${maxAvailable} and you insert ${ammount}`);
  }
}

class CoinFactory {
  static get validCoins() {
    return [
      OneCoin.fixedValue,
      TwoCoin.fixedValue,
      FiveCoin.fixedValue,
      TenCoin.fixedValue,
    ];
  }

  static get coinGenerationLimit() {
    return 5;
  }

  /**
   * @param {number} coinValue
   * @returns {AbstractCoin}
   * @throws {CoinNotFoundError}
   */
  static build(coinValue) {
    if (!CoinFactory.validCoins.includes(coinValue)) {
      throw new CoinNotFoundError(coinValue);
    }

    /** @constant {number} coinRandomQuantity */
    const coinRandomQuantity = Math.round(
      Math.random() * CoinFactory.coinGenerationLimit,
    );

    /** @var {AbstractCoin} coin */
    let coin = new NullCoin();

    if (coinValue === OneCoin.fixedValue) {
      coin = new OneCoin();
    }

    if (coinValue === TwoCoin.fixedValue) {
      coin = new TwoCoin();
    }

    if (coinValue === FiveCoin.fixedValue) {
      coin = new FiveCoin();
    }

    if (coinValue === TenCoin.fixedValue) {
      coin = new TenCoin();
    }

    coin.setQuantity(coinRandomQuantity);

    console.log(`CoinFactory: Generating ${coin.getQuantity()} coins of ${coin.getCoinValue()}`);

    return coin;
  }
}

class ExchangeCoinResult {
  /**
   * @param {AbstractCoin} coin
   * @param {number} quantity
   */
  constructor(coin, quantity) {
    this.coin = coin;
    this.quantity = quantity;
  }

  get ammount() {
    return this.coin.getCoinValue() * this.quantity;
  }

  persist() {
    const coinQuantity = this.coin.getQuantity();
    const appliedQuantity = coinQuantity - this.quantity;

    console.log(`CoinExchange: Decreasing ${this.quantity} coins from ${this.coin.getCoinValue()}`);

    this.coin.setQuantity(appliedQuantity);

    console.log(`CoinExchange: Remains ${this.coin.getQuantity()} coins from ${this.coin.getCoinValue()}`);
  }

  print() {
    console.log(`CoinExchange: I will give you ${this.quantity} coins with value of ${this.coin.getCoinValue()} is equals to -> ${this.ammount}`);
  }
}

class ExchangeResult {
  constructor() {
    /** @property {ExchangeCoinResult[]} */
    this.coinResults = [];
  }

  /**
   * @param {ExchangeCoinResult} coinResult
   */
  add(coinResult) {
    this.coinResults.push(coinResult);
  }

  aggregate() {
    for (
      let resultIndex = 0;
      resultIndex < this.coinResults.length;
      resultIndex += 1
    ) {
      /** @constant {ExchangeCoinResult} coinResult */
      const coinResult = this.coinResults[resultIndex];

      coinResult.persist();
      coinResult.print();
    }
  }
}

class CoinStrategy {
  constructor() {
    /** @property {AbstractCoin[]} coins */
    this.coins = [];
  }

  /**
   * @param {AbstractCoin[]} coins
   */
  setCoins(coins) {
    this.coins = coins;
  }

  /**
   * @param {number} ammount
   * @returns {ExchangeResult}
   */
  apply(ammount) {
    const exchangeResult = new ExchangeResult();

    for (
      let coinIndex = 0;
      coinIndex < this.coins.length;
      coinIndex += 1
    ) {
      /** @constant {AbstractCoin} coin */
      const coin = this.coins[coinIndex];

      /** @constant {number} coinValue */
      const coinValue = coin.getCoinValue();

      const exchangeDivision = ammount / coinValue;
      const exchangeIntDivision = parseInt(
        exchangeDivision.toString(),
        10,
      );

      if (exchangeIntDivision === 0) {
        continue;
      }

      const coinResult = new ExchangeCoinResult(
        coin,
        exchangeIntDivision,
      );

      exchangeResult.add(coinResult);

      // eslint-disable-next-line no-param-reassign
      ammount %= coinValue;
    }

    return exchangeResult;
  }
}

class CoinAggregator {
  constructor() {
    /** @property {AbstractCoin[]} coins */
    this.coins = [];
  }

  /**
   * @param {AbstractCoin} coin
   */
  addCoin(coin) {
    this.coins.push(coin);
  }

  /**
   * @returns {number}
   */
  aggregate() {
    let maxMoneyAvailable = 0;

    for (
      let coinIndex = 0;
      coinIndex < this.coins.length;
      coinIndex += 1
    ) {
      /** @constant {AbstractCoin} coin */
      const coin = this.coins[coinIndex];

      maxMoneyAvailable += coin.maxAvailable;
    }

    return maxMoneyAvailable;
  }
}

class CoinMachine {
  constructor() {
    /** @property {AbstractCoin[]} coins */
    this.coins = [];
    this.strategy = new CoinStrategy();
    this.aggregator = new CoinAggregator();
  }

  /**
   * @param {AbstractCoin} coin
   * @returns {CoinMachine}
   */
  addCoin(coin) {
    this.coins.push(coin);
    this.aggregator.addCoin(coin);
    this.strategy.setCoins(this.coins);

    return this;
  }

  fill() {
    this.coins = [];

    this
      .addCoin(CoinFactory.build(TenCoin.fixedValue))
      .addCoin(CoinFactory.build(FiveCoin.fixedValue))
      .addCoin(CoinFactory.build(TwoCoin.fixedValue))
      .addCoin(CoinFactory.build(OneCoin.fixedValue));
  }

  /**
   * @param {number} ammount
   * @throws {MaxAvailableOverflowError}
   */
  exchange(ammount) {
    const maxAvailable = this.aggregator.aggregate();

    if (ammount > maxAvailable) {
      throw new MaxAvailableOverflowError(maxAvailable, ammount);
    }

    /** @constant {ExchangeResult} exchangeResult */
    const exchangeResult = this.strategy.apply(ammount);

    exchangeResult.aggregate();
  }
}

const machine = new CoinMachine();

machine.fill();
machine.exchange(99999);
