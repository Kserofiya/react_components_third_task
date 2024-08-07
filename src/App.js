import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const OPERATORS = ['+', '-', '=', 'C'];

	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	const handleClick = (value) => () => {

		if (Number(value) && !operator || value === '0') {
			setOperand1(operand1 + value);
			setIsResult(false);
		}

		if (operand1 && value === "+" || operand1 && value === "-") {
			setOperator(value);
			setIsResult(false);
		}

		if (operator === '+' || operator === '-') {
			setOperand2(operand2 + value);
			setIsResult(false);
		}

		if (value === 'C') {
			setOperand1('');
			setOperand2('');
			setOperator('');
			setIsResult(false);
		}

		if (operand1 && operator === '+' && operand2) {
			if (value === '=') {
				setOperand1(Number(operand1) + Number(operand2));
				setOperand2('');
				setOperator('');
				setIsResult(true);
			}
		}
		if (operand1 && operator === '-' && operand2) {
			if (value === '=') {
				setOperand1(Number(operand1) - Number(operand2));
				setOperand2('');
				setOperator('');
				setIsResult(true);
			}
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.calculator}>
				<input value={operand1 + operator + operand2} className={styles.calculator__input + " " + (isResult ? styles['calculator__input--color'] : "")} />
				<div className={styles.calculator__operands}>
					{OPERATORS.map((operator, index) => (
						<button key={index} className={styles.calculator__operand} onClick={handleClick(operator)}>{operator}</button>
					))}
				</div>
				<div className={styles.calculator__nums}>
					{NUMS.map((num, index) => (
						<button key={index} className={styles.calculator__num} onClick={handleClick(num)}>{num}</button>
					))}
				</div>
			</div>
		</div>
	);
};
