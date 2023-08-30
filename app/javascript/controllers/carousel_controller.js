import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["carouselItem", "indicators", "prevButton", "nextButton"];
  connect() {
    this.currentIndex = 0;
    this.items = this.carouselItemTargets;
    console.log(this.indicators);
    this.indicators = this.indicatorsTargets;
    this.showItem(this.currentIndex);
    console.log(this.items);
  }

  previous() {
    console.log(this.currentIndex);
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.showItem(this.currentIndex);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.showItem(this.currentIndex);
  }

  showItem(index) {
    this.items.forEach((item, i) => {
      if (i === index) {
        console.log(item);
        item.classList.remove("hidden");
        this.indicators[i].setAttribute("aria-current", "true");
      } else {
        item.classList.add("hidden"); // Add the hidden class
        this.indicators[i].setAttribute("aria-current", "false");
      }
    });
  }
}
