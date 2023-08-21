import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button"];

  async openModal() {
    const partialURL = this.buttonTarget.dataset.modalPath;
    const modalResponse = await fetch(partialURL, { method: "GET" });
    const modal = document.getElementById("modal");
    if (modalResponse.ok) {
      modal.innerHTML = await modalResponse.text();
      modal.classList.remove("hidden", "closing"); // Remove the "closing" class
      modal.classList.add("opening");
      setTimeout(() => {
        modal.classList.remove("opening");
      }, 300);
    }

    document.addEventListener("keydown", this.handleEscapeKey);
  }

  closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("closing");
    setTimeout(() => {
      modal.innerHTML = "";
      modal.classList.remove("closing");
      modal.classList.add("hidden");
    }, 300);
    document.removeEventListener("keydown", this.handleEscapeKey);
  }

  handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      this.closeModal();
    }
  };
}
