import Caver from "caver-js";

const BAOBAB_TESTNET_RPC_URL =
  "https://public-node-api.klaytnapi.com/v1/cypress";

const rpcURL = BAOBAB_TESTNET_RPC_URL;

const caver = new Caver(rpcURL);

console.log({ caver });

export default caver;
