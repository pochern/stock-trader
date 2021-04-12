import { PortfolioStock, Order } from '@/interfaces/portfolio';
import { Stock } from '@/interfaces/stocks';

export interface PortfolioState {
  funds: number;
  stocks: Array<PortfolioStock>;
}

const state: PortfolioState = {
  funds: 10000,
  stocks: [], // Refers to stocks in Portfolio, not all stocks available
};

const mutations = {
  BUY_STOCK(state: PortfolioState, { stockId, quantity, stockPrice }: Order) {
    const record = state.stocks.find((element: PortfolioStock) => element.id === stockId);
    // If array already has this stock
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity,
      });
    }
    // Update portfolio funds
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state: PortfolioState, { stockId, quantity, stockPrice }: Order) {
    const record = state.stocks.find((element: PortfolioStock) => element.id === stockId);
    if (record) {
      // If quantity of stock is more than quantity to sell, update record
      if (record.quantity > quantity) {
        record.quantity -= quantity;
      } else {
        // Otherwise, remove record from stocks
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }
    }
    // Update portfolio funds
    state.funds += stockPrice * quantity;
  },
  SET_PORTFOLIO(state: PortfolioState,
    portfolio: { funds: number; stockPortfolio: PortfolioStock[] }) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  },
};

const actions = {
  sellStock({ commit }: {commit: Function}, order: Order) {
    commit('SELL_STOCK', order);
  },
};

const getters = {
  stockPortfolio(state: PortfolioState, getters: { stocks: Stock[] }) {
    return state.stocks.map((stock: PortfolioStock) => {
      // getter.stocks = getter from stocks module
      // stock = stock from this map method
      // Find the relevant record, and for each record return an object
      const record = getters.stocks.find((element: Stock) => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record?.name,
        price: record?.price,
      };
    });
  },
  funds(state: PortfolioState): number {
    return state.funds;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
