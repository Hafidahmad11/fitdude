class CustomBanner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container-fluid banner">
        <div class="container text-center">
          <h4 class="display-6">Welcome to FitBro</h4>
          <h3 class="display-1">Elevate Your Fitness Journey!</h3>
          <a href="#layanan">
            <button type="button" class="btn btn-danger btn-lg">
            Service Check
            </button>
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('cus-banner', CustomBanner);
