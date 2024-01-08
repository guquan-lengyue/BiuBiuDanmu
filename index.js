import { Contract, createContract, createIndexer } from "crossbell";
const indexer = createIndexer()

/**
 * crate a danmu and link it to video
 * @param {Contract} contract 
 * @param {string} videoName                    video name.
 * @param {string} text                         danmu text.  
 * @param {number} playTime                     how many ms after the video start to show the danmu. 
 * @param {number} fontSize                     the font size of danmu. unit (px)  
 * @param {string} fontColor                    the font color of danmu. 
 * @param {"top"|"bottom"|"scroll"}  playType   how to show danmu. 
 * @param {string=} sendName                    sender's name. 
 * @param {string=} lang                        the language of danmu. 
 * @example
 * import {craeteContract} from "crossbell"
 * const contract = createContract(window.ethereum)
 * biuDanmu(contract,"你好世界",10086,16,"0x3f3f3f","scroll","孤泉冷月","zh-hans")
 * 
 */
async function biuDanmu(contract, videoName, text, playTime, fontSize, fontColor, playType, sendName, lang) {
    const { list } = await indexer.character.getMany(contract.account.address)
    if (!list || list.length == 0) {
        throw "user not login"
    }

    return contract.note.post({
        characterId: list[0].characterId,
        metadataOrUri: {
            content: {
                "txt": text,
                "t": playTime,
                "fs": fontSize,
                "fc": fontColor,
                "pt": playType,
                "sn": sendName,
                "lang": lang
            },
            sources: ["biubiudanmu", videoName]
        }
    })
}


const contract = createContract(window.ethereum)
console.log("HELLO WORLD");
console.log(contract.account.address);
// const r = await biuDanmu(contract, "HELLO WORLD", "你好冷月", 10086, 16, "0x3f3f3f", "scroll", "孤泉冷月", "zh-hans")
// console.log(r);