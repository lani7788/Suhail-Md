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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_02_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDksXG4gICAgICAgIDU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NixcbiAgICAgICAgODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDU1LFxuICAgICAgICA0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDM0LFxuICAgICAgICA1NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTczLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTU4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOTl5Ni9TdG9QajZKOWxMcy9tTmJGNUsyTXNpVmF6d2hSRm5KQUhraHFOST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNlNMRFp2VV9TaFcyckxkU3pLajBSZ1wiLFxuICBcInBob25lSWRcIjogXCI3OWZjMjk0Ni0yNjdhLTRkNzUtOGRiNy03ZGU0OGVjYjdhYmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgMTEzLFxuICAgICAgMTA3LFxuICAgICAgNTQsXG4gICAgICAxMzIsXG4gICAgICAyMTEsXG4gICAgICAxOTgsXG4gICAgICA3NixcbiAgICAgIDQ3LFxuICAgICAgOTgsXG4gICAgICAyMDksXG4gICAgICA3MCxcbiAgICAgIDE3NyxcbiAgICAgIDE3LFxuICAgICAgMTE3LFxuICAgICAgMjQ5LFxuICAgICAgNTYsXG4gICAgICAxNDQsXG4gICAgICAxMTYsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAyMDksXG4gICAgICA2NixcbiAgICAgIDIzOCxcbiAgICAgIDQ1LFxuICAgICAgMzcsXG4gICAgICA5OSxcbiAgICAgIDI2LFxuICAgICAgMTQ0LFxuICAgICAgMTg3LFxuICAgICAgNDksXG4gICAgICAxMzgsXG4gICAgICA0NCxcbiAgICAgIDYzLFxuICAgICAgMjQxLFxuICAgICAgMjA0LFxuICAgICAgMTk0LFxuICAgICAgMjQ5LFxuICAgICAgOCxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUWlJRWVM5UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODE0MTQ1MTU6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjczNTUxNTQ5ODY2MTE1OjQyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pQSHdQb0JFTnlmMDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicjZ3WGtZaCtpZkY3SzFjTXNWM1lMSjU3d0NNR1FXb05vbXZ2cmVrZEkwdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMdEFIQ21zZkNYSEd4ekpiSWg1ZnVabHVtVStZaVFueGF0NTROMjIzY0FKMThSUU9udFFBZm5nOExSWnphQ2lwbmF3MUs3NGVBVHhpb3VabFBTU3FEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSS3VTV1d1clRzMmlVcmxEdmN0eWtnMGVkaWhDUEdqNEdNVDdnRUtNeitwYmcwa3UrNjR1S1dteUNabWQxQ3hnaVYzMWRDYy9KRVJTcXRlczQwbllnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4MTQxNDUxNTo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxMjU3MjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQOUNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA5Qy5qc29uIjogIntcImtleURhdGFcIjpcIkliOTErNmJJTW82UG9VRnR5NVI0endrNDN3UUExVkFqbTl3NFExK1pWQ2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI1MzQ1NjgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMxMjU3MzE3NDdcIn0iCn0="  // PUT your SESSION_ID 


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
