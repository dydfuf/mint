import BlockNumber from "./BlockNumber";
import Links from "./Links";

export default function PageTwo() {
  return (
    <div className="flex flex-col">
      <p className="mx-auto mt-110 font-bold text-white text-[40px]">
        Block Minting Number
      </p>
      <p className="mx-auto mt-34 font-bold text-white text-[40px]">
        #866138884
      </p>
      <BlockNumber />
      <Links />
    </div>
  );
}
