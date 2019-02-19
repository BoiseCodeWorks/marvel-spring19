import Hero from "../models/hero.js";

//private
let _marvelAPI = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public'
})

let _characters = 'characters?limit=50'
let _offset = 0
let _apiKey = '53496df3cd682930aa9108759e347171'


let _state = {
    apiHeros: [],
    myTeam: []
}

let _subscribers = {
    apiHeros: [],
    myTeam: []
}

function setState(prop, data) {
    _state[prop] = data
    _subscribers[prop].forEach(fn => fn())
}

//public
export default class MarvelService {

    addSubscriber(prop, fn) {
        _subscribers[prop].push(fn)
    }

    get ApiHeros() {
        return _state.apiHeros.map(h => new Hero(h))
    }

    get MyTeam() {
        return _state.myTeam.map(h => new Hero(h))
    }

    getMarvelData() {
        _marvelAPI.get(`${_characters}&offset=${_offset}&apikey=${_apiKey}`)
            .then(res => {
                let data = res.data.data.results.map(d => new Hero(d))
                setState('apiHeros', data)
            })
            .catch(err => {
                console.error(err)
            })
    }
}