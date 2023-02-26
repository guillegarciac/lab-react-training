import React from 'react'

const Greetings = (props) => {
	const {lang, children} = props;

	const greet = (lang) => {
		if (lang === "de") {
			return "Hallo";
		}
		else if (lang === "en") {
			return "Hello";
		}
		else if (lang === "es") {
			return "Hola;"
		}
		else if (lang === "fr") {
			return "Bonjour";
		}
	}

	return (<p>{greet(lang)} {children}</p>)
}

export default Greetings;