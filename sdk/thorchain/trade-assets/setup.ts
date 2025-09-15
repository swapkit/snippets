import { createSwapKit, AssetValue, Chain } from '@swapkit/sdk';

// Initialize SwapKit
const swapKit = createSwapKit({
  config: {
    apiKeys: {
      swapKit: 'YOUR_API_KEY', // Optional but recommended
    },
  },
});

// Connect wallet - Keystore as example
await swapKit.connectKeystore(
  [Chain.THORChain, Chain.Bitcoin],
  'your twelve word mnemonic phrase here',
  OptionalDerivationPaths, // optional
);
