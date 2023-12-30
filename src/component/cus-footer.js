class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="container text-center pt-5 pb-5">
          &copy; 2023 FitBro. All Rights Reserved
        </div>
      `;
    }
  }
  
  customElements.define('cus-footer', CustomFooter);
  