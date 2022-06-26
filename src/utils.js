export const CheckUnlocked = async () => {
  return await window.klaytn._kaikas.isUnlocked();
};

export const getAccount = () => {
  return window.klaytn.selectedAddress;
};

export const enableKlaytn = async () => {
  let accounts;
  if (typeof window.klaytn !== "undefined") {
    const provider = window["klaytn"];

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
