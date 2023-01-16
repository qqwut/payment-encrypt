var fs = require("fs");
var path = require("path");
const crypto = require("crypto");
const CONFIG = require("./../../config");

function readPublicKey() {
  return new Promise((resolve, reject) => {
    var absolutePath = path.resolve(CONFIG.PATH_PUBLIC_KEY);
    console.log(`read public key path : ${absolutePath}`);
    fs.readFile(absolutePath, "utf8", (err, rawPublicKey) => {
      if (err) {
        reject(err);
      } else {
        resolve(rawPublicKey);
      }
    });
  });
}

async function encryptPublic(toEncrypt) {
  const rawPublicKey = await readPublicKey();

  const publicKey = `-----BEGIN PUBLIC KEY-----\n${rawPublicKey}\n-----END PUBLIC KEY-----`;

  const buffer = Buffer.from(toEncrypt, "utf8");

  const encrypted = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_PADDING,
    },
    buffer
  );

  return encrypted.toString("base64");
}

exports.encryptPublicKey = async (req) => {
  console.log(`[REQ] Encrypt Controller EncryptPublicKey`);
  const dataDecrypt = JSON.stringify(req.body);
  return await encryptPublic(dataDecrypt);
};
