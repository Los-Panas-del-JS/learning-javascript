function StreamReader(
  input,
  output,
  buffer,
  bufferSize,
) {
  this.input = input;
  this.output = output;
  this.buffer = buffer;
  this.bufferSize = bufferSize;
}

StreamReader.prototype.connect = function () {
  const randomStream = Math.random() * 10000000000;

  this.buffer = `dajfiodsjfsdiajfuhfahiuafuwb ${randomStream}`;
  this.bufferSize = this.buffer.length;

  console.log('[+] Reading stream');
  console.log('> initialize stream at', this.input);
  console.log('> stream opened');
  console.log(`> income stream with ${this.bufferSize} bits...`);
  console.log(this.buffer);
  console.log('> buffer streamed in', this.output);
  console.log('> closing stream');
};

StreamReader.prototype.print = function () {
  console.log();
  console.log('Stream Reader Properties');
  console.log();

  console.log('input:', this.input);
  console.log('output:', this.output);
  console.log('buffer:', this.buffer);
  console.log('bufferSize:', this.bufferSize);
  console.log();
};

/**
 * Instantiate
 */
const myStreamReader = new StreamReader(
  '/dev/stream0',
  '/dev/stdout0',
  '',
  0,
);

myStreamReader.print();
myStreamReader.connect();
myStreamReader.print();
