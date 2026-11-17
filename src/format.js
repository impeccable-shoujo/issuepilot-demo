function pluralize(count, singular, plural) {
	return `${count} ${count === 1 ? singular : plural}`;
}

function truncate(text, maxLength) {
	if (text.length <= maxLength) return text;
	return `${text.slice(0, maxLength)}...`;
}

module.exports = { pluralize, truncate };
