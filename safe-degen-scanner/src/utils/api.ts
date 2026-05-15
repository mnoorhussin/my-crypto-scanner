export interface Token {
  pairAddress: string;
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  liquidity: {
    usd: number;
  };
  volume: {
    h24: number;
  };
  priceUsd: string;
  priceChange: {
    h24: number;
  };
  url: string;
}

interface DexScreenerResponse {
  schemaVersion: string;
  pairs: Array<{
    chainId: string;
    dexId: string;
    url: string;
    pairAddress: string;
    baseToken: {
      address: string;
      name: string;
      symbol: string;
    };
    quoteToken: {
      address: string;
      name: string;
      symbol: string;
    };
    priceNative: string;
    priceUsd: string;
    txns: {
      m5: { buys: number; sells: number };
      h1: { buys: number; sells: number };
      h6: { buys: number; sells: number };
      h24: { buys: number; sells: number };
    };
    volume: {
      h24: number;
      h6: number;
      h1: number;
      m5: number;
    };
    priceChange: {
      m5: number;
      h1: number;
      h6: number;
      h24: number;
    };
    liquidity: {
      usd: number;
      base: number;
      quote: number;
    };
    pairCreatedAt: number;
  }>;
}

export async function fetchSolanaTokens(): Promise<Token[]> {
  try {
    const response = await fetch('https://api.dexscreener.com/latest/dex/search?q=solana', {
      headers: {
        'User-Agent': 'Safe-DeGen-Scanner/1.0',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: DexScreenerResponse = await response.json();

    // Filter for Solana tokens and transform to our Token interface
    const solanaTokens = data.pairs
      .filter(pair => pair.chainId === 'solana')
      .map(pair => ({
        pairAddress: pair.pairAddress,
        baseToken: {
          address: pair.baseToken.address,
          name: pair.baseToken.name,
          symbol: pair.baseToken.symbol,
        },
        liquidity: {
          usd: pair.liquidity.usd,
        },
        volume: {
          h24: pair.volume.h24,
        },
        priceUsd: pair.priceUsd,
        priceChange: {
          h24: pair.priceChange.h24,
        },
        url: pair.url,
      }));

    return solanaTokens;
  } catch (error) {
    console.error('Error fetching Solana tokens:', error);
    
    if (error instanceof Error) {
      throw new Error(`Failed to fetch Solana tokens: ${error.message}`);
    }
    
    throw new Error('An unknown error occurred while fetching Solana tokens');
  }
}
