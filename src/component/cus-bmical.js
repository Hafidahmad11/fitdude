class CustomBMICalculator extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="bmi-calculator-section spad pt-5 pb-5">
          <div class="container">
            <h2 class="display-3 text-center custom-bmi" id="bmi">BMI Calculator</h2>
            <div class="row">
              <div class="col-lg-6">
                <div class="section-title chart-title">
                  <span>check your body</span>
                  <h2>BMI CALCULATOR CHART</h2>
                </div>
                <div class="chart-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Bmi</th>
                        <th>WEIGHT STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="point">Below 18.5</td>
                        <td>Underweight</td>
                      </tr>
                      <tr>
                        <td class="point">18.5 - 24.9</td>
                        <td>Healthy</td>
                      </tr>
                      <tr>
                        <td class="point">25.0 - 29.9</td>
                        <td>Overweight</td>
                      </tr>
                      <tr>
                        <td class="point">30.0 - and Above</td>
                        <td>Obese</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="section-title chart-calculate-title">
                  <span>check your body</span>
                  <h2>CALCULATE YOUR BMI</h2>
                </div>
                <div class="chart-calculate-form">
                  <p>
                  Calculate your Body Mass Index (BMI) to assess whether you are
                  underweight, normal weight, overweight, or obese. BMI is a simple
                  tool that helps you understand your body composition and make
                  informed decisions about your health.
                  </p>
                  <form action="#">
                    <div class="row">
                      <div class="col-sm-6">
                        <input type="text" placeholder="Height / cm" />
                      </div>
                      <div class="col-sm-6">
                        <input type="text" placeholder="Weight / kg" />
                      </div>
                      <div class="col-sm-6">
                        <input type="text" placeholder="Age" />
                      </div>
                      <div class="col-sm-6">
                        <input type="text" placeholder="Sex" />
                      </div>
                      <div class="col-lg-12">
                        <button type="submit">Calculate</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="result-container">
              <h3>Result:</h3>
              <p id="result"></p>
            </div>
          </div>
        </section>
      `;
    }
  }
  
  customElements.define('cus-bmical', CustomBMICalculator);
  