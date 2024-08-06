const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "781414515" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94781414515";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_11_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDExNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM2LFxuICAgICAgICA3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDYwLFxuICAgICAgICA2MixcbiAgICAgICAgMjAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcwLFxuICAgICAgICA1NixcbiAgICAgICAgMTk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicmxYYVd3dXo4STlNVjA4TVljVklzbHZ1OFJ4Um56RDRuMGk2cVFSckpBdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4MTQxNDUxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDRBNEIwRTFFQzhEM0RBMjgyMkFGNEI3MUU0OThGNjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyOTY3ODkzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODE0MTQ1MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE3MUUzMzIyNDRGMTZGMjA0MDY4QzU1NDZERjUzQ0Q3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjk2Nzg5NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2RUJpZ2ZQQVRoU1dOczk0enpSanp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjk4YjJlMTY0LTdkODAtNGUwMC1iMmU4LTkxNmViZGJiM2I5ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICA0NCxcbiAgICAgIDE3MSxcbiAgICAgIDEwLFxuICAgICAgMTU2LFxuICAgICAgMTU5LFxuICAgICAgOTAsXG4gICAgICA0LFxuICAgICAgMTc5LFxuICAgICAgMjIzLFxuICAgICAgNjgsXG4gICAgICAzOSxcbiAgICAgIDU4LFxuICAgICAgMjM0LFxuICAgICAgMzIsXG4gICAgICA4MyxcbiAgICAgIDEyOCxcbiAgICAgIDE2NCxcbiAgICAgIDE2NCxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICAyNTUsXG4gICAgICAxODgsXG4gICAgICAxMSxcbiAgICAgIDk4LFxuICAgICAgMjM4LFxuICAgICAgMTMxLFxuICAgICAgMTY4LFxuICAgICAgNDgsXG4gICAgICAxMDMsXG4gICAgICAxODYsXG4gICAgICAxMzIsXG4gICAgICA5MixcbiAgICAgIDEyLFxuICAgICAgOTIsXG4gICAgICAyMDUsXG4gICAgICAzNixcbiAgICAgIDc1LFxuICAgICAgMTc1LFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRZQkZOTExEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4MTQxNDUxNTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzM1NTE1NDk4NjYxMTU6NDFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2aofCdmbvwnZmw8J2ZvfCdmbjwnZqI8J2ZsC4uLi4u4pyoXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkxId1BvQkVNL095YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyNndYa1loK2lmRjdLMWNNc1YzWUxKNTd3Q01HUVdvTm9tdnZyZWtkSTB3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjF4dWYwajFrNW8yYlE0VlBZNVR4Q3ROaEZoQ3JzVG80Y1BmS09DSEYwMmRKZ1pob3dqNUkyOFRHV2VlTGViNURRcEhmSUYxbTZld3FneHFnaFNtV0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZZSFViS1N3NFA5a01lU0RFV3RlQXlWUmxzMFpKOGR0ejQrbUNXZ3dXYk1Ub1dyY3dFYXQzVzNaMTFnUzFJZFMzd250bnYyZWFiTGw1K2lUTWxLK0JBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzgxNDE0NTE1OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk2Nzg4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1MVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUxULmpzb24iOiAie1wia2V5RGF0YVwiOlwiN3NjUmkyOW9TRXhaU0U1M0ltZUdCZlFPOTZieW95VFliSExuR3NxZlh5az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MjUzNDU2ODIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjk2Nzg5MzY0MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ʟᴀɴɪʏᴀ_ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "xLANIYA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
