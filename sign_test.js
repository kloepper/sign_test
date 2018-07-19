#!/usr/bin/env node
var crypto = require("@trust/webcrypto");
async function signTest() {
    let newKey = await crypto.subtle.generateKey(
        {
            name: 'RSASSA-PKCS1-v1_5',
            modulusLength: 1024,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: { name: 'SHA-256' },
        }
        , true, ['sign']);
    let signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", newKey.privateKey, new Uint8Array(16));
    // The following is a work around for the issue.
    //let signature = await crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" }}, newKey.privateKey, new Uint8Array(16));
}

signTest();
