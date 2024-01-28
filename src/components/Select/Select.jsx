import styles from './style.module.css';
import { useState } from 'react';
const Select = ({variants, value, setValue}) => {
	const [dropDown, setDropDown] = useState(false);
	return (
		<>
			<label className={styles.container}>
				<input
					onClick={() => {
						setDropDown(!dropDown);
					}}
					value={variants[value]}
					readOnly
				/>

				<svg 
				    className={dropDown && styles.active}
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none">
					<path
						d="M7 10L12 15L17 10"
						stroke="#313131"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>

				<ul className={`${styles.dropDown} ${dropDown && styles.active}`}>
					{variants.map((el, index) => {
						return (
							<li
								key={el}
								onClick={() => {
									setValue(index);
								}}
								className={value === index && styles.active}>
								{el}
							</li>
						);
					})}
				</ul>
			</label>
		</>
	);
};

export default Select;
