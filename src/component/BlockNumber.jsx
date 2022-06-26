import { useState } from "react";
import useInterval from "../hook/useInterval.js";

import caver from "../klaytn/caver.js";

export default function BlockNumber() {
  const [blockNumber, setBlockNumber] = useState(0);
  const getBlockNumber = async () => {
    const blockNumber = await caver.klay.getBlockNumber();
    return blockNumber;
  };

  useInterval(async () => {
    const nxtBlockNumber = await getBlockNumber();

    setBlockNumber(nxtBlockNumber);
  }, 1000);

  return (
    <div className="mx-auto mt-40">
      <div className="text-white font-digital text-[80px]">{`${blockNumber}`}</div>
    </div>
  );
}
