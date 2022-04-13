var that = this;

this.localFunction();

function localFunction() {
  that = this;

  this.localEmbedFunction = function() {
    this.x = 0;

    console.log('Printing for local embed function from local context');
  };

  console.log('Printing for local function from global context');
  console.log(this.x);
}

that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .localEmbedFunction();

this
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .that
  .localEmbedFunction();

that.localFunction();
console.log(that.x);
