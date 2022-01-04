//function returns license badges according to the user inputed response.
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

//Function builds the readme with inputed user data
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
My Github account: [${data.username}](https://github.com/${data.username})

If you have any questions, comments, or concerns, feel free to contact me via email at [${data.useremail}](mailto:${data.useremail})
`;
}

module.exports = generateMarkdown;

//function returns license links according to the user inputed response.
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