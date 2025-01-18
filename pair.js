const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Kavishka_Dishan,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("kavishka-dilshan-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function CYBER_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Kavishka_Dishan = Kavishka_Dishan({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Kavishka_Dishan.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Kavishka_Dishan.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Kavishka_Dishan.ev.on('creds.update', saveCreds)
            Pair_Code_By_Kavishka_Dishan.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Kavishka_Dishan.sendMessage(Pair_Code_By_Kavishka_Dishan.user.id, { text: "" + b64data });

               let CYBER_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃CYBER MD SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = kavishkaa / CYBER_MIND
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029VayOUrpD8SDsx1OQEQ2z
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/+94720552487
▬▬▬▬▬▬▬▬▬▬▬▬▬▬

ᴄʀᴇᴀᴛᴇᴅ ʙʏ CYBER ᴏꜰᴄ`
 await Pair_Code_By_Kavishka_Dilshan.sendMessage(Pair_Code_By_Kavishka_Dilshan.user.id,{text:CYBER_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Kavishka_Dilshan.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    CYBER_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await CYBER_MD_PAIR_CODE()
});
module.exports = router
