import { createPlugin, createWallet } from "@swapkit/sdk";
const myPlugin = createPlugin({ 
  name: "MyPlugin", 
  methods: ({ getWallet }) => ({
	  // getWallet gives you access to the toolbox methods hydrated with signer for a given chain
    // plugin methods here
  })
});
const myWallet = createWallet({
  name: "MyWallet",
  supportedChains: [Chain.Ethereum, Chain.Bitcoin],
  connect: ({ addChain, walletType, supportedChains }) => 
    async () => {
      // wallet connection logic
      // create signer and hydrate chain toolboxes with it
      // then call addChain({ ...toolbox, address, chain })
      return true;
    }
});
