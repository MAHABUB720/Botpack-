module.exports.config = {
	name: "restart",
	version: "7.0.0",
	hasPermission: 2,
	credits: "ryuko",
	description: "restart bot system",
  usePrefix: true,
	commandCategory: "admin",
	usages: "",
	cooldowns: 0,
	dependencies: {
		"process": ""
	}
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {
  const process = require("process");
  const { threadID, messageID } = event;
  api.sendMessage(`restarting ${global.config.BOTNAME} ai, please be patient.`, threadID, ()=> process.exit(1));
}
