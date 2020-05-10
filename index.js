// Code your solution in this file.
function lowerCaseDrivers(drivers) {
	return drivers.map(function(driver) {
		return driver.toLowerCase();
	});
}

function nameToAttributes(drivers) {
	return drivers.map(function(driver) {
		const result = {};
		result.firstName = driver.split(' ')[0];
		result.lastName = driver.split(' ')[1];
		return result;
	});
}

function attributesToPhrase(drivers) {
	return drivers.map(function(driver) {
		return `${driver.name} is from ${driver.hometown}`;
	});
}
