import Vue from 'vue'
import Vuex from 'vuex'

import eVars from '../../server/config/environment'
import routes from '../routes'

import actions from './actions/actions'
import getters from './getters/getters'
import mutations from './mutations/mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions: actions,
    getters: getters,
    mutations: mutations,
    state: {
        // routing management
        routes: routes,
        currentView: 'home',
        mobileNavMode: false,
        productSeriesData: [],
        productCatalogData: [],
        activeProductSeriesId: 1,
        interestedItems: [],
        regions: [],
        countries: [],
        validatingUserData: false,
        ajaxRequestPending: false,
        userData: {
            id: null,
            company: '',
            name: '',
            email: '',
            region: 'All Regions',
            country: 'Country',
            comments: '',
            botPrevention: ''
        },
        // contact and service location info
        inViewOfficeId: 0,
        officeLocationData: [{
            name: 'Gentry Way Co., Ltd.',
            address: 'No. 152, Wufu Road',
            town: 'Yanshui District',
            city: 'Tainan City',
            state: null,
            country: 'Taiwan',
            telephone: '+886-(0)6-6529052',
            fax: '+886-(0)6-6527093',
            website: `${eVars.HOST}:${eVars.PORT}`
        }, {
            name: 'Gentry Hardware Products Co., Ltd.',
            address: 'No. 158, Dong Cheng Road',
            town: 'Dong Sheng Town',
            city: 'Zhong Shan City',
            state: 'Guangdong Province',
            country: 'China',
            telephone: '+86-760-22229026 ~ 28',
            fax: '+86-760-22820916',
            website: `${eVars.HOST}:${eVars.PORT}`
        }],
        staffData: [{
            country: 'Taiwan',
            name: 'General Service',
            email: 'gentry88@ms46.hinet.net'
        }, {
            country: 'Taiwan',
            name: 'David Tsai',
            email: 'david.tsai@gentry-way.com.tw'
        }, {
            country: 'Taiwan',
            name: 'Cathy Liu',
            email: 'cathy.liu@gentry-way.com.tw'
        }, {
            country: 'Taiwan',
            name: 'Candy Wu',
            email: 'candy.wu@gentry-way.com.tw'
        }, {
            country: 'China',
            name: 'General Service',
            email: 'gentry@vip.163.com'
        }, {
            country: 'China',
            name: 'Johnson Wu',
            email: 'altecqc@msn.com'
        }],
        // /////////////////////////////////////////////
        // pending deprecation /////////////////////////
        // /////////////////////////////////////////////
        resettingUserData: false, // pending deprecation
        alreadyRegistered: false, // pending deprecation
        registeredUserInfo: { // pending deprecation
            registrationId: null,
            validation: false,
            company: '',
            name: '',
            email: '',
            country: 'Country',
            comments: ''
        }
    }
})

export default store

// if (module.hot) {
//     module.hot.accept(['./getters', './actions', './mutations'], () => {
//         store.hotUpdate({
//             getters: require('./getters'),
//             actions: require('./actions'),
//             mutations: require('./mutations')
//         })
//     })
// }
