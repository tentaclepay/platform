import { serve } from "@hono/node-server";
import { HTTPFacilitatorClient } from "@x402/core/server";
import { paymentMiddleware, x402ResourceServer } from "@x402/hono";
import { configDotenv } from "dotenv";
import { Hono } from "hono";
import { logger } from "hono/logger";

import { ExactSuiScheme } from "@tentaclepay/sui-x402/exact/server";

configDotenv({ quiet: true });

const suiAddress = process.env.SERVER_RECIPIENT_ADDRESS;
if (!suiAddress) throw new Error("SERVER_RECIPIENT_ADDRESS is required!");

const facilitatorUrl =
  process.env.FACILITATOR_URL || "https://facilitator.tentaclepay.com";

const facilitatorClient = new HTTPFacilitatorClient({
  url: facilitatorUrl,
});

const app = new Hono();
app.use(logger());
app.use(
  paymentMiddleware(
    {
      "GET /weather": {
        accepts: [
          {
            scheme: "exact",
            price: "$0.001",
            network: "sui:testnet",
            payTo: suiAddress,
          },
        ],
        description: "Weather data",
        mimeType: "application/json",
      },
    },
    new x402ResourceServer(facilitatorClient).register(
      "sui:testnet",
      new ExactSuiScheme()
    )
  )
);

app.get("/weather", (c) => {
  return c.json({
    report: {
      weather: "sunny",
      temperature: 70,
    },
  });
});

serve(app, (info) => {
  console.info(`Server running on port ${info.port}`);
});
