let calculation = localStorage.getItem('calculation') || '';

      displayCalc();

      function calculate() {
        calculation = eval(calculation);

        displayCalc();

        localStorage.setItem("calculation", calculation);
      }

      //apparently, it needs parameter so that it pass into displayCalc()
      function updateCalculation(value) {
        calculation += value;

        displayCalc();

        localStorage.setItem("calculation", calculation);
      }

      function clearCalculation() {
        calculation = '';

        displayCalc();

        localStorage.setItem("calculation", calculation);
      }

      function displayCalc() {
        document.querySelector('.js-calculation').innerHTML = calculation;
      }