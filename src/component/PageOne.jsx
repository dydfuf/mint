/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { enableKlaytn, accountTruncate, check_status, publicMint } from '../utils.js';

export default function PageOne() {
  const [mintCount, setMintCount] = useState(1);

  const [accounts, setAccounts] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);

  //   const isUnlocked = CheckUnlocked();
  //   const accounts = getAccount();

  const down = () => {
    if (mintCount <= 1) return;
    setMintCount((prev) => prev - 1);
  };

  const up = () => {
    if (mintCount >= 2) return;
    setMintCount((prev) => prev + 1);
  };

  const handleConnectClick = async () => {
    const accounts = await enableKlaytn();
    setAccounts(accounts);
    setIsEnabled(true);
  };

  const handleClickMintClick = () => {
    if (!accounts.length > 0) {
      alert('지갑을 연결 해주세요');
    }
    if (check_status()) {
      publicMint({ amoutn: mintCount, account: accounts });
    }
  };

  return (
    <div className="flex flex-col ">
      <button className="ml-auto w-[224px] h-44 rounded-[6px] border-white border-[1px] mt-68">
        <span className="text-white text-[18px]" onClick={handleConnectClick}>
          {isEnabled ? accountTruncate(accounts) : `Connect Kaikas`}
        </span>
      </button>
      <p className="text-white mt-10 text-[64px] font-bold mx-auto">Tiqkf Minting</p>
      <img className="mx-auto mt-76" src={'Tlqkf.gif'} width={507} height={479} />
      <div className="flex flex-row mt-34 mx-auto space-x-29">
        <button
          className="flex items-center justify-center w-29 h-29 rounded-[4px] border-[1px] border-[#4F4CEE] bg-white"
          onClick={down}
        >
          <span className="text-[#4F4CEE] text-[40px] mb-8 font-bold">-</span>
        </button>
        <span className="text-white text-[18px]">{mintCount}</span>
        <button
          className="flex items-center justify-center w-29 h-29 rounded-[4px] border-[1px] border-[#4F4CEE] bg-white"
          onClick={up}
        >
          <span className="text-[#4F4CEE] text-[26px] mb-6 font-bold">+</span>
        </button>
      </div>
      <button
        className="mx-auto w-[224px] h-44 rounded-[6px] border-white border-[1px] mt-40"
        onClick={handleClickMintClick}
        disabled={accounts.length === 0}
      >
        <span className="text-white">
          {accounts.length === 0 ? '지갑을 연결 해주세요.' : 'Mint'}
        </span>
      </button>
    </div>
  );
}

const NETWORK_MAP = {
  1001: 'TEST_NET',
  8217: 'MAIN_NET',
};
