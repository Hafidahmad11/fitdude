class CustomNav extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src="../img/FitBro.png" alt="Logo" style="width: auto" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-right" id="navbarText">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#layanan">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#tentang">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#bmi">BMI</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#kontak">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      `;
    }
  }
  
  customElements.define('cus-nav', CustomNav);
  