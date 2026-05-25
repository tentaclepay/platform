import type { x402Facilitator } from "@x402/core/facilitator";

import type {
  FacilitatorSuiSigner,
  SuiClientRegistry,
} from "@tentaclepay/sui-x402";
import { SUI_NETWORK_CAIP2_LIST } from "@tentaclepay/sui-x402";
import { ExactSuiScheme } from "@tentaclepay/sui-x402/exact/facilitator";

export const registerSuiExactScheme = (
  facilitator: x402Facilitator,
  signer: FacilitatorSuiSigner,
  clientRegistry?: SuiClientRegistry
) => {
  facilitator.register(
    [...SUI_NETWORK_CAIP2_LIST],
    new ExactSuiScheme(signer, {
      clientRegistry,
    })
  );
};
