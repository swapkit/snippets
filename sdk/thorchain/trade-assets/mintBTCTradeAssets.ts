// Get your THORChain address
const thorAddress = await swapKit.getAddress(Chain.THORChain);

// Mint BTC trade assets
export async function mintBTCTradeAssets(amount: string | number | bigint) {
  try {
    // Create the trade asset mint memo
    const memo = `TRADE+:${thorAddress}`;

    // Get the correct inbound address for BTC
    const inboundAddresses = await SwapKitApi.thornode.getInboundAddresses();
    const btcInbound = inboundAddresses.find(
      (addr: any) => addr.chain === 'BTC' && !addr.halted,
    );

    if (!btcInbound) {
      throw new Error('BTC chain is halted or unavailable');
    }

    // Send BTC with TRADE+ memo
    const result = await swapKit.deposit({
      assetValue: AssetValue.from({
        chain: Chain.Bitcoin,
        value: amount, // e.g. "0.1" or 10000000n for 0.1 BTC (sats)
      }),
      recipient: btcInbound.address,
      memo,
    });

    console.log('Trade assets minted. TX:', result);
    return result;
  } catch (error) {
    console.error('Failed to mint trade assets:', error);
    throw error;
  }
}
