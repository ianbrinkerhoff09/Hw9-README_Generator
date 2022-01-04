let fs = require("fs");
let inquirer = require("inquirer");
let generateMarkdown = require("./generateMarkdown");

// array of questions that gets prompted to complete readme
let questions = [
	{
		type: "input",
		message: "Please enter your Github Username: ",
		name: "username",
	},
	{
		type: "input",
		message: "Please enter your email address: ",
		name: "useremail",
	},
	{
		type: "input",
		message: "Please enter project name: ",
		name: "title",
	},
	{
		type: "input",
		message: "Short desciption of this project: ",
		name: "description",
	},
	{
		type: "input",
		message: "Instructions on how to install this project: ",
		name: "installation",
	},
	{
		type: "input",
		message: "Instructions on how to use this project: ",
		name: "usage",
	},
	{
		type: "input",
		message: "Please enter other contributors to this project (If none, leave blank): ",
		name: "contributers",
	},
	{
		type: "list",
		message: "Select a license for this project: ",
		name: "license",
		choices: [
			"Creative Commons",
			"Do WTF You Want To",
			"GNU General",
			"MIT",
			"Mozilla Public",
			"The Unlicense",
		],
	},
];

// writes responses to the README.md in the generated folder
function writeToFile(fileName, data) {
	fs.writeFile(fileName, generateMarkdown(data), (err) => {
		if (err) {
			throw err;
		} else {
			console.log("README.md has been generated and has ben outputed in 'generated' folder");
		}
	});
}

// runs program and writes responses to the README.md in the generated folder
function init() {
	inquirer.prompt(questions).then((responses) => {
		console.log(responses);
		writeToFile("./generated/READMEgen.md", responses);
	});
}

// Call init function ^^^^^^ and runs the prompts.
init();
