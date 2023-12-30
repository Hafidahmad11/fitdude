class CustomContact extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="container-fluid pt-5 pb-5 kontak">
          <div class="container">
            <h2 class="display-3 text-center" id="kontak">Contact</h2>
            <div class="row pb-3">
              <div class="col-md-6">
                <input
                  class="form-control form-control-lg mb-3"
                  type="text"
                  placeholder="Name"
                />
                <input
                  class="form-control form-control-lg mb-3"
                  type="text"
                  placeholder="Email"
                />
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="No. Phone"
                />
              </div>
              <div class="col-md-6">
                <textarea class="form-control form-control-lg" rows="5"></textarea>
              </div>
            </div>
            <div class="col-md-3 mx-auto text-center">
              <button type="button" class="btn btn-danger btn-lg">
              Send Message
              </button>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('cus-contact', CustomContact);
  