import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "../context";

//Internal Import
//console.log(ChainId);
const App = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      activeChain={{
        chainId: 80002,
        rpc: ["https://polygon-amoy.g.alchemy.com/v2/3yPyqNDjLFpqL6Yuj6JRF"],
        nativeCurrency: {
          name: "MATIC",
          symbol: "MATIC",
          decimals: 18,
        },
        shortName: "amoy",
        slug: "polygon-amoy",
        testnet: true,
        chain: "Polygon",
        name: "Polygon Amoy Testnet",
      }}
    >
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>
    </ThirdwebProvider>
  );
};

export default App;
