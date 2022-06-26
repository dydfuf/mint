import Caver from "caver-js";

const BAOBAB_TESTNET_RPC_URL = "https://api.baobab.klaytn.net:8651/";

const rpcURL = BAOBAB_TESTNET_RPC_URL;

const caver = new Caver(rpcURL);

console.log({caver})

export default caver;
