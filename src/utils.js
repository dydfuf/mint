import { ABI, CONTRACTADDRESS } from './constant';

export const CheckUnlocked = async () => {
  return await window.klaytn._kaikas.isUnlocked();
};

export const getAccount = () => {
  return window.klaytn.selectedAddress;
};

export const enableKlaytn = async () => {
  let accounts;
  if (typeof window.klaytn !== 'undefined') {
    const provider = window['klaytn'];

    try {
      accounts = await provider.enable();
    } catch (e) {
      console.log(e);
    }
  }
  return accounts;
};

export const disableKlaytn = async () => {
  await window.klaytn.disable();
};

export const accountTruncate = (account) => {
  const first = String(account[0]).substring(0, 6);
  const end = String(account[0].split('').reverse().join('')).substring(0, 4);
  return first + ' ... ' + end;
};

export async function check_status() {
  let health;
  let mintIndexForSale;
  let mintLimitPerBlock;
  let mintStartBlockNumber;
  let maxSaleAmount;
  let mintPrice;

  const myContract = new caver.klay.Contract(ABI, CONTRACTADDRESS);
  await myContract.methods
    .mintingInformation()
    .call()
    .then(function (result) {
      health = true;
      mintIndexForSale = parseInt(result[1]);
      mintLimitPerBlock = parseInt(result[2]);
      mintStartBlockNumber = parseInt(result[4]);
      maxSaleAmount = parseInt(result[5]);
      mintPrice = parseInt(result[6]);

      console.log(`Mint count : ${mintIndexForSale - 1} / ${maxSaleAmount}`);
      console.log(`트랜잭션당 최대 수량: ${mintLimitPerBlock}개`);
      console.log(`민팅 시작 블록: #${mintStartBlockNumber.toLocaleString()}`);
      console.log(`민팅 가격: ${caver.utils.fromPeb(mintPrice, 'KLAY')} KLAY`);
    })
    .catch(function (error) {
      health = false;
      console.log(error);
    });
  const blockNumber = await caver.klay.getBlockNumber();
  console.log('현재 블록: #' + blockNumber);

  return {
    health,
    mintIndexForSale,
    mintLimitPerBlock,
    mintStartBlockNumber,
    maxSaleAmount,
    mintPrice,
    blockNumber,
  };
}

export async function publicMint({ amount, account }) {
  if (klaytn.networkVersion === 8217) {
    console.log('메인넷');
  } else if (klaytn.networkVersion === 1001) {
    console.log('테스트넷');
  } else {
    alert('ERROR: 클레이튼 네트워크로 연결되지 않았습니다!');
    return;
  }
  if (!account) {
    alert('ERROR: 지갑을 연결해주세요!');
    return;
  }

  const myContract = new caver.klay.Contract(ABI, CONTRACTADDRESS);
  const { health, mintIndexForSale, mintStartBlockNumber, maxSaleAmount, mintPrice, blockNumber } =
    await check_status();

  if (!health) {
    alert('ERROR: 컨트랙트와 연결할 수 없습니다.');
    return;
  }

  if (maxSaleAmount + 1 <= mintIndexForSale) {
    alert('모든 물량이 소진되었습니다.');
    return;
  } else if (blockNumber <= mintStartBlockNumber) {
    alert('아직 민팅이 시작되지 않았습니다.');
    return;
  }
  const total_value = BigNumber(amount * mintPrice);

  try {
    const gasAmount = await myContract.methods.publicMint(amount).estimateGas({
      from: account,
      gas: 6000000,
      value: total_value,
    });
    const result = await myContract.methods.publicMint(amount).send({
      from: account,
      gas: gasAmount,
      value: total_value,
    });
    if (result != null) {
      console.log(result);
      alert('민팅에 성공하였습니다.');
    }
  } catch (error) {
    console.log(error);
    alert('민팅에 실패하였습니다.');
  }
}
