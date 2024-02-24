export async function requestAccount(): Promise<any> {
  console.log("Requesting account...");

  if ((window as any).ethereum) {
    console.log("detected");
    try {
      //   Account
      const account = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      //   Wallet balance
      const walletBalace = await (window as any).ethereum.request({
        method: "eth_getBalance",
        params: [account[0], "latest"],
      });
      let wei = parseInt(walletBalace, 16);
      let balance = wei / 10 ** 18;

      return {
        walletAddress: account[0],
        walletBalance: balance.toFixed(2) + " ETH",
      };
    } catch (error) {
      console.log("Error connecting...");
    }
  } else {
    alert("Meta Mask not detected");
  }
}
