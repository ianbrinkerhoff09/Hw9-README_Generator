// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, generateMarkdown(data), (err) => {
		if (err) {
			throw err;
		} else {
			console.log("Input sent to generateMarkdown.js; Will now create README.");
		}
	});
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((responses) => {
		console.log(responses);
		writeToFile("./generated/READMEgen.md", responses);
	});
}

// Function call to initialize app
init();
