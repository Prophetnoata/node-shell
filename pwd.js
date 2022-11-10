//import { cwd } from "node:process";
const process = require("process");

const pwd = () => process.stdout.write(process.cwd());

module.exports = pwd;
