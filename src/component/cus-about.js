class CustomAbout extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="container-fluid pt-5 pb-5">
          <div class="container text-center">
            <h2 class="display-3 text-center" id="tentang">About Us</h2>
            <div class="clearfix pt-5">
              <img
                src="https://img.freepik.com/free-vector/home-workout-flat-composition-with-front-view-living-room-interior-with-family-characters-performing-exercises-vector-illustration_1284-80810.jpg?w=826&t=st=1703769140~exp=1703769740~hmac=568ab4a07db3b55cd0317679b01b0109e9d2dd855ea5dc5211a396f827aeb151"
                class="col-md-6 float-md-end mb-3 crop-img"
                width="300"
                height="300"
              />
              <h3>Why Choose FitBro ?</h3>
              <p>We are the FitBro team, committed to helping you achieve a healthy and fit lifestyle. With a focus on effective training and nutritional knowledge, we are ready to guide you on your health and fitness journey.</p>
              <p>At FitBro, we believe that every big change starts with small steps. Together, we will form healthy habits through fun workouts, relentless motivation, and the support of a caring team.</p>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('cus-about', CustomAbout);
  