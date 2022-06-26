export default async function useKlaytn() {
  let accounts;
  if (typeof window.klaytn !== "undefined") {
    const provider = window["klaytn"];

    try {
      accounts = await provider.enable();
    } catch (e) {
      console.log(e);
    }
  }

  const isUnlocked = await window.klaytn._kaikas.isUnlocked();

  return {
    accounts,
    isUnlocked,
  };
}
