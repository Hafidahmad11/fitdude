class CustomServices extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="container-fluid services pt-5 pb-5">
          <div class="container text-center">
            <h2 class="display-3" id="layanan">Services</h2>
            <label for="training-type">Pilih Jenis Pelatihan:</label>
            <select
              id="training-type"
              name="training-type"
              class="form-control form-control-lg mb-3"
            >
              <option value="biceps">Biceps Workout</option>
              <option value="triceps">Triceps Workout</option>
              <option value="chest">Chest Workout</option>
              <option value="legs">Legs Workout</option>
              <option value="back">Back Workout</option>
            </select>
            <button id="submit-button" class="btn btn-primary">Submit</button>
  
            <div id="exercise-list" class="mt-3">
              <h3>Daftar Latihan</h3>
              <ul></ul>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('cus-service', CustomServices);
  