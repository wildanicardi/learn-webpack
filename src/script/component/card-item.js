class CardItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open"
    });
  }
  connectedCallback() {
    this.render();
  }
  set card(card) {
    this._card = card;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>

    .card {
      background: #fff;
      border-radius: 2px;
      display: inline-block;
      height: 300px;
      margin: 1rem;
      position: relative;
      width: 30%;
    }
    
    .card .card_image {
      width: 100%;
      height: inherit;
      border-radius: 40px;
    }
    
    .card .card_image img {
      width: 100%;
      height: inherit;
      border-radius: 40px;
      object-fit: cover;
    }
    
    .card .card_title {
      text-align: center;
      border-radius: 0px 0px 40px 40px;
      font-family: sans-serif;
      font-weight: bold;
      font-size: 30px;
      margin-top: -80px;
      height: 40px;
    }
    
    .card:hover {
      transform: scale(0.9, 0.9);
      box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
        -5px -5px 30px 15px rgba(0,0,0,0.22);
    }
    
    .title-white {
      color: white;
    }
    </style>
    <div class="card">
          <div class="card_image">
            <img src="${this._card.strSportThumb}" />
          </div>
          <div class="card_title title-white">
            <p>${this._card.strSport}</p>
          </div>
        </div>
  `;
  }
}
customElements.define("card-item", CardItem);