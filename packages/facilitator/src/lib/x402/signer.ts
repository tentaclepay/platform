import type { Keypair } from "@mysten/sui/cryptography";
import { fromBase64 } from "@mysten/sui/utils";

import { toFacilitatorSuiSigner } from "@tentaclepay/sui-x402";

/**
 * Creates a FacilitatorSuiSigner from a Sui keypair.
 */
export const createSuiFacilitatorSigner = (keypair: Keypair) =>
  toFacilitatorSuiSigner({
    address: keypair.toSuiAddress() as `0x${string}`,
    signTransaction: async (bytes: string) => {
      const { signature } = await keypair.signTransaction(fromBase64(bytes));

      return signature;
    },
  });
