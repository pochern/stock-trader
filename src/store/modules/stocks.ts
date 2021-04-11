import stocks from '@/data/stocks';
import { Order } from '@/interfaces/portfolio';
import { Stock } from '@/interfaces/stocks';

export interface StocksState {
  stocks: Array<Stock>;
}

const state: StocksState = {
  stocks: [],
};

const mutations = {
  SET_STOCKS(state: StocksState, updatedStocks: Array<Stock>) {
    state.stocks = updatedStocks;
  },
  RND_STOCKS(state: StocksState) {
    state.stocks.forEach((stock) => {
      // Everything between 0.5 of current price and 1.5
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  },
};

const actions = {
  buyStock({ commit }: { commit: Function }, order: Order) {
    commit('BUY_STOCK', order);
  },
  initStocks({ commit }: { commit: Function }) {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks({ commit }: { commit: Function }) {
    commit('RND_STOCKS');
  },
};

const getters = {
  stocks() {
    return stocks;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
