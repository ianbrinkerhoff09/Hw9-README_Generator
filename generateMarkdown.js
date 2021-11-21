// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
	if (license === "The Unlicense") {
		return "https://img.shields.io/badge/license-Unlicense-blue.svg";
	} else if (license === "Creative Commons") {
		return "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg";
	} else if (license === "Do WTF You Want To") {
		return "https://img.shields.io/badge/License-WTFPL-brightgreen.svg";
	} else if (license === "GNU General") {
		return "https://img.shields.io/badge/License-GPLv3-blue.svg";
	} else if (license === "MIT") {
		return "https://img.shields.io/badge/License-MIT-yellow.svg";
	} else if (license === "Mozilla Public") {
		return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
	} else {
		return "";
	}
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {return `
# ${data.title}
## Description
[![${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

${data.description}
## Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Contact](#contact)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributers}
## License
The project uses the [${data.license}](${renderLicenseLink(data.license)}) license.
## Contact
Link to my github: [${data.username}](https://github.com/${data.username})

Feel free to contact me via email at [${data.useremail}](mailto:${data.useremail})
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
	if (license === "The Unlicense") {
		return "http://unlicense.org";
	} else if (license === "Creative Commons") {
		return "https://creativecommons.org/licenses/";
	} else if (license === "Do WTF You Want To") {
		return "http://www.wtfpl.net/";
	} else if (license === "GNU General") {
		return "https://www.gnu.org/licenses/gpl-3.0.en.html";
	} else if (license === "MIT") {
		return "https://opensource.org/licenses/MIT";
	} else if (license === "Mozilla Public") {
		return "https://www.mozilla.org/en-US/MPL/";
	} else {
		return "";
	}
}