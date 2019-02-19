//private
import MarvelService from "./marvelService.js";

let _marvelService = new MarvelService()

function drawApiHeros() {
    let template = ''
    let heros = _marvelService.ApiHeros
    heros.forEach(h => {
        template += h.getCard()
    })
    document.querySelector('.marvel-characters').innerHTML = template
}

//public
export default class MarvelController {
    constructor() {
        _marvelService.addSubscriber('apiHeros', drawApiHeros)
        _marvelService.getMarvelData()
    }


}