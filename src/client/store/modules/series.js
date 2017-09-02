import axios from 'axios'
import eVars from '../../../server/config/environment'

export default {
    namespaced: true,
    state: {
        data: [],
        apiUrl: `${eVars.API_URL}/products/series`
    },
    mutations: {
        register: (state, series) => {
            state.data = series
        },
        reset: (state) => {
            state.data = []
        }
    },
    getters: {
        data: state => state.data,
        apiUrl: state => state.apiUrl
    },
    actions: {
        fetch: (context) => {
            let options = {
                method: 'get',
                url: context.state.apiUrl
            }
            return axios(options)
        }
    }
}
