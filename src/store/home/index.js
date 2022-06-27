//home 模块的小仓库
import { reqCategoryList } from '@/api/index';
const state = {
  categoryList: [],
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
};
const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    console.log(result);

    if (result.code == 200) {
      commit('CATEGORYLIST', result.data);
      console.log(result);
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
