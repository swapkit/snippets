import { SKConfig } from "@swapkit/sdk";
SKConfig.setRpcUrl("eth", "…");    // runtime RPC update
SKConfig.setEnv("isStagenet", true); // instant env switch
// toolboxes read from SKConfig — no misconfigs
const apiKeys = SKConfig.get('apiKeys');
