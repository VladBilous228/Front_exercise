function calc() {

      const index = prompt("Calculator: plus, minus, multiplication, division");

      const a = prompt("Enter the number a");
      const b = prompt("Enter the number b");

      const result = {
        plus : +a + +b,
        minus  : a - b,
        multiplication : a * b,
        division : a / b
      }
      [index];
      return result == +result && result || "Wrong operation";
    }
   
    alert(calc());
    