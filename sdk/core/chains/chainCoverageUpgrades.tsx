import { XRPToolbox } from "@swapkit/toolboxes/xrp";
import { SolanaToolbox } from "@swapkit/toolboxes/solana";

// or use general

import { getToolbox } from "@swapkit/toolboxes";

const xrpToolbox = await getToolbox(chain, { signer }) // signer is optional (needed for signing)

