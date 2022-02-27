import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@3rdweb/react';
import { ChakraProvider } from '@chakra-ui/provider';

function MyApp({ Component, pageProps }: AppProps) {
  // * Ethereum chain ids of the chains you want to support
  const supportedChainsIds = [1, 3, 4, 42, 80001];
  // * Ethereum mainner - 1 (ETH)
  // * Ropsten Test Network - 3 (ETH)
  // * Rainkeby Test Network - 4 (ETH)
  // * Kovan Test Network - 42 (ETH)
  // * Polygon Mumbai Test Network - 80001 (ETH)

  /*
    * Include the connectors you want to support
    * injected MetaMask
    * magic - Magic Link
    * walletconnect - Wallet Connect
    * walletlink - Coinbase Wallet
  */
  const connectors = {
    injected: {},
    /*
    magic: {
      apiKey: 'pk' // Apu key
      chainId: 1, //The Chain ID you want to allow on magic
    },
    walletconnect: {},
    walletlink: {
      appName: 'web3-auth',
      url: 'http://localhost:3000,
      darkMode: false,
    }
   */
  }



  return (
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainsIds}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>


  )
}

export default MyApp
