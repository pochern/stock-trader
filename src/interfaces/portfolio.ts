export interface PortfolioStock {
  id: number;
  quantity: number;
}

export interface Order {
  stockId: number;
  stockPrice: number;
  quantity: number;
}
