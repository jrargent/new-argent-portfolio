const code1 = function oddOrEven(num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
};

const code2 = `function oddOrEven(num) {
    if (num % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  };
  var getTheNumber = function (event) {
    event.preventDefault();
    var numberInput = $('#formget').val();

    var result = oddOrEven(numberInput);

    $('#results').text(numberInput + ' is ' + result);
  };`;

export { code1, code2 };
