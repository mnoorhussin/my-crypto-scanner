export interface TokenData {
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
  marketCap?: number;
}

export interface DexScreenerResponse {
  schemaVersion: string;
  pairs: TokenData[];
}

export class DexScreenerAPI {
  private static readonly BASE_URL = "https://api.dexscreener.com/latest/dex";

  static async getSolanaTokens(limit: number = 50): Promise<TokenData[]> {
    try {
      const response = await fetch(
        `${this.BASE_URL}/search?q=SOL&limit=${limit}`,
        {
          headers: {
            "User-Agent": "Safe-DeGen-Scanner/1.0",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: DexScreenerResponse = await response.json();
      return data.pairs.filter((pair) => pair.chainId === "solana");
    } catch (error) {
      console.error("Error fetching Solana tokens:", error);
      throw error;
    }
  }

  static async getTokenByAddress(address: string): Promise<TokenData | null> {
    try {
      const response = await fetch(`${this.BASE_URL}/tokens/${address}`, {
        headers: {
          "User-Agent": "Safe-DeGen-Scanner/1.0",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: DexScreenerResponse = await response.json();
      return data.pairs[0] || null;
    } catch (error) {
      console.error("Error fetching token by address:", error);
      throw error;
    }
  }

  static filterByLiquidity(
    tokens: TokenData[],
    minLiquidityUSD: number = 10000
  ): TokenData[] {
    return tokens.filter((token) => token.liquidity.usd >= minLiquidityUSD);
  }

  static formatPrice(price: number | string): string {
    const num = typeof price === "string" ? parseFloat(price) : price;
    if (num < 0.000001) return num.toExponential(2);
    if (num < 0.001) return num.toFixed(6);
    if (num < 1) return num.toFixed(4);
    return num.toFixed(2);
  }

  static formatMarketCap(marketCap: number): string {
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
    if (marketCap >= 1e3) return `$${(marketCap / 1e3).toFixed(2)}K`;
    return `$${marketCap.toFixed(2)}`;
  }

  static formatVolume(volume: number): string {
    if (volume >= 1e6) return `$${(volume / 1e6).toFixed(1)}M`;
    if (volume >= 1e3) return `$${(volume / 1e3).toFixed(1)}K`;
    return `$${volume.toFixed(0)}`;
  }
}
