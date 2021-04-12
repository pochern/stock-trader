/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const url = process.env.VUE_APP_URL;

const loadData = ({ commit }: {commit: Function}) => {
  axios.get(`${url}/data.json`)
    .then((response) => {
      // Data gotten back from the body from the response
      const { data } = response;
      if (response.data) {
        const { funds, stocks, stockPortfolio } = data;

        const portfolio = {
          stockPortfolio,
          funds,
        };

        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    });
};

export {
  loadData,
};
