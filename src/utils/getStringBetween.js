const getStringBetween = (string, firstChar, secondChar) => (
	string.substring(
		string.indexOf(firstChar) + 1,
		string.indexOf(secondChar)
	)
);

export default getStringBetween;
