window.addEventListener("DOMContentLoaded", () => {
  let current_num = [];
  let calculation = [];
  let display = document.getElementById("result");
  let ac = document.getElementById("ac");
  let procent = document.getElementById("procent");
  let negate = document.getElementById("negate");
  let count = document.getElementById("count");
  let nums = document.querySelectorAll(".num");
  let calcs = document.querySelectorAll(".cal");
  let test_output = document.querySelector(".test-output");

  let clear = false; // rensar displayen efter varje beräkning
  let add_calculation = false;
  let new_calculation = false;

  let count_letters = 0;
  let output = "";
  let count_letters_busy = false;
  let cycle_letters = false;

  for (let num of nums)
    num.addEventListener("click", () => {
      if (clear == false) {
        display.innerText += num.innerText;
        add_calculation = true;
      } else {
        if (new_calculation == true) {
          calculation = [];
        }
        current_num = [];
        display.innerText = num.innerText;
        clear = false;
        add_calculation = true;
        new_calculation = false;
      }
      current_num.push(num.innerText);

      if (count_letters_busy == false) {
        let print_it = setInterval(() => {
          count_letters_busy = true;
          let text =
            "\nfor(let num of nums)\n  \t\v\t\v\t\v\t\v    num.addEventListener('click', () => {\n     \t\v\t\v\t\v\t\v\t\v\t\v\t\v\t\v         if (clear == false) {\n		\t\v\t\v\t\v\t\v\t\v\t\v\t\v\t\v  \t\v\t\v\t\v\t\v 	display.innerText += num.innerText;\n		\t\v\t\v\t\v\t\v \t\v\t\v\t\v\t\v \t\v\t\v\t\v\t\v 	add_calculation = true;\n	\t\v\t\v\t\v\t\v \t\v\t\v\t\v\t\v 		} else {\n		\t\v\t\v\t\v\t\v\t\v\t\v\t\v\t\v  \t\v\t\v\t\v\t\v 		if (new_calculation == true) {\n			\t\v\t\v\t\v\t\v \t\v\t\v\t\v\t\v \t\v\t\v\t\v\t\v \t\v\t\v\t\v\t\v \t\v\t\v\t\v\t\v 		calculation = [];\n		\t\v\t\v\t\v\t\v \t\v\t\v\t\v\t\v \t\v\t\v\t\v\t\v 		}\n		\t\v\t\v\t\v\t\v 		current_num = [];\n		\t\v\t\v\t\v\t\v 		display.innerText = num.innerText;\n		\t\v\t\v\t\v\t\v 		clear = false;\n		\t\v\t\v\t\v\t\v 		add_calculation = true;\n		\t\v\t\v\t\v\t\v 		new_calculation = false;\n	\t\v\t\v\t\v\t\v 		}\n			current_num.push(num.innerText);";
          output += text[count_letters];
          count_letters++;
          output += text[count_letters];
          count_letters++;
          output += text[count_letters];
          if (cycle_letters == true) {
            output = output.substring(3);
            //output = x.join('');
          }
          if (count_letters < text.length) {
            test_output.innerText = output;
            count_letters++;
            console.log("körs");
          } else {
            count_letters = 0;
            count_letters_busy = false;
            cycle_letters = true;
            clearInterval(print_it);
          }
        }, 1);
      }
    }); /*
	function stopFunction(function_to_stop) {
		clearInterval(function_to_stop);
	}
*/
  /*
	function printCode(caller) {
		count_letters_busy = true;
		let text =
			"for(let num of nums)\n		num.addEventListener('click', () => {\n 		if (clear == false) {\n			display.innerText += num.innerText;\n			add_calculation = true;\n			} else {\n				if (new_calculation == true) {\n					calculation = [];\n				}\n				current_num = [];\n				display.innerText = num.innerText;\n				clear = false;\n				add_calculation = true;\n				new_calculation = false;\n			}\n			current_num.push(num.innerText);";

		output += text[count_letters];
		if (count_letters < text.length) {
			test_output.innerText = output;
			count_letters++;
			console.log('körs');
		} else {
			count_letters = 0;
			count_letters_busy = false;
			stopFunction(this.caller);
		}
		console.log('körs ändå');
	}
*/ for (let calc of calcs)
    calc.addEventListener("click", () => {
      if (add_calculation == true) {
        if (current_num.length > 0) {
          calculation.push(current_num.join(""));
        }
        calculation.push(calc.innerText);
        display.innerText += calc.innerText;
        clear = true;
        add_calculation = false;
        new_calculation = false;
      }
    });

  count.addEventListener("click", () => {
    clear = true;
    new_calculation = true;
    console.log(clear);
    calculation.push(current_num.join(""));
    let current = eval(calculation.join(""));
    calculation = [];
    current_num = [];
    calculation.push(current);
    display.innerText = eval(current);
  });

  ac.addEventListener("click", () => {
    calculation = [];
    current_num = [];
    display.innerText = "";
  });

  negate.addEventListener("click", () => {
    if (
      calculation[calculation.length] == "+" ||
      calculation[calculation.length] == "-" ||
      calculation[calculation.length] == "*" ||
      calculation[calculation.length] == "/" ||
      current_num.length == 0
    ) {
      return;
    }

    if (current_num[0] == "-") {
      current_num.shift();
    } else {
      current_num.unshift("-");
    }
    display.innerText = current_num.join("");
  });

  procent.addEventListener("click", () => {
    calculation.push(current_num.join(""));
    let eval = 0;
    let op = "";
    let first = "";
    let second = "";
    for (let operator = 0; operator < calculation.length; operator++) {
      if (
        calculation[operator] == "+" ||
        calculation[operator] == "-" ||
        calculation[operator] == "*" ||
        calculation[operator] == "/"
      ) {
        op = calculation[operator];
        first = calculation.splice(0, operator).join("");
        second = calculation.splice(operator, calculation.length).join("");
      }
      if (op == "*") {
        eval = Number((first / 100) * second);
      } else if (op == "+") {
        let temp = Number((first / 100) * second);
        eval = Number(first);
        eval += temp;
      } else if (op == "-") {
        let temp = Number((first / 100) * second);
        eval = Number(first);
        eval -= temp;
      } else if (op == "/") {
        eval = Number((first * 100) / second);
      }
      if (eval !== 0) {
        display.innerText = eval;
        calculation = [];
        current_num = [];
        calculation.push(eval);
      }
    }
  });
});
