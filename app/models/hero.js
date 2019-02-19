export default class Hero {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.img = data.img || data.thumbnail.path + "." + data.thumbnail.extension
        this.description = data.description || 'CLASSIFIED'
    }


    getCard() {
        return `
        <div class="col-3">
        <div class="card">
                <img class="card-img-top" src="${this.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.description}</p>
                    <a href="#" class="btn btn-primary">ADD TO TEAM</a>
                </div>
        </div>
        </div>
        `
    }
}

