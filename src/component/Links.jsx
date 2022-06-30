import Link from "next/link";

export default function Links() {
  return (
    <div className="text-white mx-auto mt-[296px] flex-row flex space-x-150">
      <Link href={"https://scope.klaytn.com/"}>
        <a target={"_blank"}>
          <div className="border-b-[1px] border-white text-[24px]">
            KlaytnScope
          </div>
        </a>
      </Link>

      <Link href={"https://klayswap.com/"}>
        <a target={"_blank"}>
          <div className="border-b-[1px] border-white text-[24px]">
            Klayswap
          </div>
        </a>
      </Link>
    </div>
  );
}
