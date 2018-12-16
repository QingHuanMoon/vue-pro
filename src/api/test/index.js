import api from '../../service/axios/index'
import urls from './url'

const header = {}

export default {
    sayHelloWorld (params) {
        return api.get(urls.sayHelloWorld, params, header)
    }
}