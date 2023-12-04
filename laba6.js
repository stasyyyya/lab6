function setOperation(operator) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Нужны числа!!!');
      return;
    }

    var result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
          result = result.toFixed(2);
        } else {
          alert('На ноль делить нельзя');
          return;
        }
        break;
      default:
        alert('Неверная операция');
        return;
    }

    document.getElementById('result').innerText = result;
  }
  function calculateSquareRoot() {
    var resultElement = document.getElementById('result');
    var resultText = resultElement.innerText.trim();

    if (resultText !== '') {
      var resultValue = parseFloat(resultText);

      if (!isNaN(resultValue) && resultValue >= 0) {
        var squareRoot = Math.sqrt(resultValue);
        resultElement.innerText = squareRoot.toFixed(2);
      } else {
        alert('Невозможно извлечь корень из отрицательного числа');
      }
    }
  }