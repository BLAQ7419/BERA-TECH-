//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Brucebera5@gmail.com";
global.location = "Nairobi, Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/berabotsmd/BERA-TECH-";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajJoCoLI8YePbpsnE3q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajJoCoLI8YePbpsnE3q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/ZHn1Xd1/IMG-20240802-WA0019.jpg";
global.devs = "https://t.me/Alphatrex";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349125177078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/HtT3vjm/goku-gif-3.gif";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUdRUzc1bjI1VzI5VGJiOWR4NldnSHBBUEVyS3hjMDhnVng3NDR4T0Nrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGRDdEptWWlaSUp1VlJxVU11WkMxTmU5VHVEWUlQMTlsMUYzbTY0emhuUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSGU1clJjS3FzYmN2RFhDQjJkQ2dSSVV6VzE2L0JWbnJKRG1IUTI0Q0hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyczVMeDlSRTVuN25OV0tvRW1GTE5tdkhOVk5ZOXhpRWttT3gwWDFWbG1RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNHRGtLZkE4blZjcVBjNmRzQzFGTG1La0gra0ROZ096TVVkL1JIcTRJMkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl0MnlZa3RETGJPUWNhbGFrYzk5T3lSbm43ekRUWjRtallLMVBhWjlKVlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERQQ2tWOHNJYjZCS3Zscmw1SlJIQlFwYVFQeFJBVVc2MEZoa1dYK3FuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnI2TENSeXlTd2FtTE9TVkJoREpqY2ttNlZUU2xXci9GTEZmVEppNGNuOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ1YlF4a1pSK2hTWm5sWTltWVlyaGRtdzVQTkgxTVR6NHl0UkdVY216VlVVQmF4aVJ4RU5VbjRnUG41Ym9aNTErcFFscVFZYU5GalNQR1gxQ1dDSUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJsYm4va0JiL1BZNkdhUUNxRGp5bURKSmhYUklGWlBUbE4xSElzcGhGSk9JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjUxNzcwNzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUUxM0JCNDY2MDIzNDNENDlEQ0Q5REEzMEZCNDlBQzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjUxMDMyOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTXlwQ0xDMUxTYXlnNkFrdVpyNnNnUSIsInBob25lSWQiOiIwYjRjMWRhNi1hZDQ5LTQyYzQtODIzMy1iYTM0Y2FkOWQ0YTgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVZbVQ0L1hIRGhxMjdqSlNBcjJrTk1Xdm5FPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFUTUQvUjhpWFhOMHBaZ0oxaHl6Q0hBYzFVMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1VFZaSjM5VyIsIm1lIjp7ImlkIjoiMjM0OTEyNTE3NzA3ODoxN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCTEFRIDIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BIajZKOEVFT25wb2JjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InB6eSs4VHNKUlhmNklreDNwNmlKUVpwUFJSTDNqcnBwTGZZQ2ZxSklZV1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZDTlkydk1UMEhhZmNoWjB1RVB2cWs5ZE5sT0c0REVjZW9BRHduTVNrT2tSL2dBQlVzdzhzM09udG9SQ2dTNXI5ZGMrSk5JenkwQzBXTVFjSm5yUkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJITmVYd1kzaGgvcGhrM05qb2JFNUp3amVvcGRLUDZPMC9CVS9mZGU4bDREcm43RFYrTFJrbGs5TG01VHlJM2ZvSFNNbmlwZUt3L2k5OEFTOUh4ZDdBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjUxNzcwNzg6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWM4dnZFN0NVVjMraUpNZDZlb2lVR2FUMFVTOTQ2NmFTMzJBbjZpU0dGbCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjUxMDMyNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFQi8ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BERA-TECH-™`",
  author: process.env.PACK_AUTHER || "BERA-TECH-",
  packname: process.env.PACK_NAME || "B E R A",
  botname: process.env.BOT_NAME || "BERA-TECH-",
  ownername: process.env.OWNER_NAME || "Bruce Bera",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "B E R A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
