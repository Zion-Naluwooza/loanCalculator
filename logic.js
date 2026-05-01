
function calculateLoan() {
            const loanAmount = parseFloat(document.getElementById('loanAmount').value); // Get the loan amount from the input field
            const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Convert annual interest rate to monthly rate
            const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12; // Convert loan term to months

            if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
                document.getElementById('result').innerText = 'Please enter valid numbers.';
                return;
            } // Calculate the monthly payment using the formula: M = P * r / (1 - (1 + r)^(-n))

            const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
            document.getElementById('result').innerText = `Monthly Payment: UGX${monthlyPayment.toFixed(2)}`;
        }