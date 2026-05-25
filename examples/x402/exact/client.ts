import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { fromBase64 } from "@mysten/sui/utils";
import { x402Client, x402HTTPClient } from "@x402/core/client";
import { wrapFetchWithPayment } from "@x402/fetch";
import { configDotenv } from "dotenv";

import type { ClientSuiSigner } from "@tentaclepay/sui-x402";
import { ExactSuiScheme } from "@tentaclepay/sui-x402/exact/client";

configDotenv({ quiet: true });

if (!process.env.CLIENT_PRIVATE_KEY)
  throw new Error("CLIENT_PRIVATE_KEY is required!");

// Create signer
const keypair = Ed25519Keypair.fromSecretKey(process.env.CLIENT_PRIVATE_KEY);
const signer: ClientSuiSigner = {
  address: keypair.toSuiAddress() as `0x${string}`,
  signTransaction: async (bytes: string) => {
    const { signature } = await keypair.signTransaction(fromBase64(bytes));

    return signature;
  },
};

// Create x402 client and register Sui scheme
const client = new x402Client();
client.register("sui:testnet", new ExactSuiScheme(signer));

// Wrap fetch with payment handling
const fetchWithPayment = wrapFetchWithPayment(fetch, client);

// Make request - payment is handled automatically
const response = await fetchWithPayment("http://localhost:3000/weather", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

const data = await response.json();
console.log("Response:", data);

// Get payment receipt from response headers
if (response.ok) {
  const httpClient = new x402HTTPClient(client);
  const paymentResponse = httpClient.getPaymentSettleResponse((name) =>
    response.headers.get(name)
  );
  console.log(
    "Transaction:",
    `https://suiscan.xyz/testnet/tx/${paymentResponse.transaction}`
  );
}
