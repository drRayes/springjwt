import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';
import { equip } from './equip.module';
import { equipList } from './equipList.module.js';
import { locations } from './locations.module.js';
import { user } from './user.module.js';
import { users } from './users.module.js';
import { visibility } from './visibility.module.js';
import { equipWaybill } from './equipWaybill.module.js';
import { equipWaybillList } from './equipWaybillList.module.js';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth, equip, equipList, locations, user, users, visibility, equipWaybill, equipWaybillList
  }
});
