import './card-item.js';
class CardList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open"
    });
  }
  set cards(cards) {
    this._cards = cards;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";
    // ngelooping data component card item
    this._cards.forEach(card => {
      const cardItemElement = document.createElement("card-item");
      cardItemElement.card = card;
      this.shadowDOM.appendChild(cardItemElement);
    });
  }
}
customElements.define("card-list", CardList);