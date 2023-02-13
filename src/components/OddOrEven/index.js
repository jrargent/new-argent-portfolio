import React, { useState, useRef } from 'react';
import { CodeBlock, monokai } from 'react-code-blocks';
import $ from 'jquery';

function OddOrEven() {
  var oddOrEven = function (num) {
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
  };

  return (
    <div className="container mt-4" id="snippet">
      <form>
        <label for="number">Enter a number: </label>
        <input type="number" name="numget" id="formget" />
        <button
          className=" btn btn-primary"
          id="getNumber"
          type="button"
          onClick={getTheNumber}
        >
          Check Number
        </button>
        <p id="results"></p>
      </form>
    </div>
  );
}

export default OddOrEven;
