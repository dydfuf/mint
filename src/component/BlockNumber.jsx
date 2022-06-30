import { useState } from "react";
import useInterval from "../hook/useInterval.js";

import caver from "../klaytn/caver.js";

export default function BlockNumber() {
  const [blockNumber, setBlockNumber] = useState("");
  const getBlockNumber = async () => {
    const blockNumber = await caver.klay.getBlockNumber();
    return blockNumber;
  };

  useInterval(async () => {
    const nxtBlockNumber = await getBlockNumber();
    setBlockNumber(String(nxtBlockNumber));
  }, 1000);

  return (
    <div className="mx-auto mt-40">
      <div className="flex flex-row space-x-[110px] ml-[-100px]">
        <div className="text-white">
          <div className="absolute">
            <div
              className="relative w-[100px] h-[160px] backdrop-blur-3xl opacity-50 border-[0.5px] border-white rounded-[5px]"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%);",
              }}
            ></div>
            <div className="relative top-[-140px] left-[20px] text-white font-digital text-[80px] bg-opacity-50">
              {blockNumber[0]}
            </div>
          </div>
        </div>
        <div className="text-white">
          <div className="absolute">
            <div
              className="relative w-[100px] h-[160px] backdrop-blur-3xl opacity-50 border-[0.5px] border-white rounded-[5px]"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%);",
              }}
            ></div>
            <div className="relative top-[-140px] left-[20px] text-white font-digital text-[80px] bg-opacity-50">
              {blockNumber[1]}
            </div>
          </div>
        </div>
        <div className="text-white">
          <div className="absolute">
            <div
              className="relative w-[100px] h-[160px] backdrop-blur-3xl opacity-50 border-[0.5px] border-white rounded-[5px]"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%);",
              }}
            ></div>
            <div className="relative top-[-140px] left-[20px] text-white font-digital text-[80px] bg-opacity-50">
              {blockNumber[2]}
            </div>
          </div>
        </div>
        <div className="text-white">
          <div className="absolute">
            <div
              className="relative w-[100px] h-[160px] backdrop-blur-3xl opacity-50 border-[0.5px] border-white rounded-[5px]"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%);",
              }}
            ></div>
            <div className="relative top-[-140px] left-[20px] text-white font-digital text-[80px] bg-opacity-50">
              {blockNumber[3]}
            </div>
          </div>
        </div>
        <div className="text-white">
          <div className="absolute">
            <div
              className="relative w-[100px] h-[160px] backdrop-blur-3xl opacity-50 border-[0.5px] border-white rounded-[5px]"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%);",
              }}
            ></div>
            <div className="relative top-[-140px] left-[20px] text-white font-digital text-[80px] bg-opacity-50">
              {blockNumber[4]}
            </div>
          </div>
        </div>
        <div className="text-white">
          <div className="absolute">
            <div
              className="relative w-[100px] h-[160px] backdrop-blur-3xl opacity-50 border-[0.5px] border-white rounded-[5px]"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%);",
              }}
            ></div>
            <div className="relative top-[-140px] left-[20px] text-white font-digital text-[80px] bg-opacity-50">
              {blockNumber[5]}
            </div>
          </div>
        </div>
        <div className="text-white">
          <div className="absolute">
            <div
              className="relative w-[100px] h-[160px] backdrop-blur-3xl opacity-50 border-[0.5px] border-white rounded-[5px]"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%);",
              }}
            ></div>
            <div className="relative top-[-140px] left-[20px] text-white font-digital text-[80px] bg-opacity-50">
              {blockNumber[6]}
            </div>
          </div>
        </div>
        <div className="text-white">
          <div className="absolute">
            <div
              className="relative w-[100px] h-[160px] backdrop-blur-3xl opacity-50 border-[0.5px] border-white rounded-[5px]"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%);",
              }}
            ></div>
            <div className="relative top-[-140px] left-[20px] text-white font-digital text-[80px] bg-opacity-50">
              {blockNumber[7]}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-white font-digital text-[80px]">{`${blockNumber}`}</div> */}
    </div>
  );
}
