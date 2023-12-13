<script>
import CartItems from "@/components/CartItems.vue";
export default {
  name: "CartView",
  components: {CartItems},

}
</script>

<template>
  <div class="row g-4 cart">
    <!-- CART -->
    <cart-items></cart-items>
    <!-- FORM -->
    <div class="col-md-7 col-lg-8">
      <form id="checkout-form" class="needs-validation" novalidate>

        <div id="checkout-accordion" class="accordion">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#billing-collapse" aria-expanded="true"
                      aria-controls="billing-collapse">
                <span class="badge bg-secondary me-3">1</span>BILLING
              </button>
            </h2>
            <div id="billing-collapse" class="accordion-collapse collapse show"
                 data-bs-parent="#checkout-accordion">
              <div class="accordion-body">
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="billing-firstname" class="form-label">First name</label>
                    <input type="text" class="form-control" id="billing-firstname"
                           placeholder="" value=""
                           required>
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="billing-lastname" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="billing-lastname" placeholder=""
                           value=""
                           required>
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="billing-email" class="form-label">Email <span
                        class="text-body-secondary">(Optional)</span></label>
                    <input type="email" class="form-control" id="billing-email"
                           placeholder="you@example.com" aria-describedby="email-help">
                    <div id="email-help" class="form-text">
                      So we can send you a receipt :)
                    </div>
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="billing-address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="billing-address"
                           placeholder="1234 Main St"
                           required>
                    <div class="invalid-feedback">
                      Please enter your billing address.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="billing-address2" class="form-label">Address 2 <span
                        class="text-body-secondary">(Optional)</span></label>
                    <input type="text" class="form-control" id="billing-address2"
                           placeholder="Apartment or suite">
                  </div>

                  <div class="col-md-5">
                    <label for="billing-city" class="form-label">City</label>
                    <input type="text" class="form-control" id="billing-city" required>
                    <div class="invalid-feedback">
                      Please enter your city.
                    </div>
                  </div>

                  <div class="col-md-4">
                    <label for="billing-state" class="form-label">State</label>
                    <select class="form-select" id="billing-state" required>
                      <option value="">Choose...</option>
                      <option>WI</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="billing-zip" class="form-label">Zip</label>
                    <input type="number" class="form-control" id="billing-zip" placeholder=""
                           min="10000" max="99999" required>
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>

                </div>
                <button class="w-100 btn btn-primary btn-lg mt-5 btn-continue" type="button">
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#shipping-collapse" aria-expanded="false"
                      aria-controls="shipping-collapse">
                <span class="badge bg-secondary me-3">2</span>SHIPPING
              </button>
            </h2>
            <div id="shipping-collapse" class="accordion-collapse collapse"
                 data-bs-parent="#checkout-accordion">
              <div class="accordion-body">
                <div class="row g-3">
                  <div class="col-sm-12">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input"
                             id="shipping-same-address">
                      <label class="form-check-label" for="shipping-same-address">Shipping
                        address is
                        the same
                        as my billing
                        address</label>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="shipping-firstname" class="form-label">First name</label>
                    <input type="text" class="form-control" id="shipping-firstname"
                           placeholder=""
                           value=""
                           required>
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="shipping-lastname" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="shipping-lastname"
                           placeholder=""
                           value=""
                           required>
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="shipping-address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="shipping-address"
                           placeholder="1234 Main St"
                           required>
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="shipping-address2" class="form-label">Address 2 <span
                        class="text-body-secondary">(Optional)</span></label>
                    <input type="text" class="form-control" id="shipping-address2"
                           placeholder="Apartment or suite">
                  </div>

                  <div class="col-md-5">
                    <label for="shipping-city" class="form-label">City</label>
                    <input type="text" class="form-control" id="shipping-city" required>
                    <div class="invalid-feedback">
                      Please enter your city.
                    </div>
                  </div>

                  <div class="col-md-4">
                    <label for="shipping-state" class="form-label">State</label>
                    <select class="form-select" id="shipping-state" required>
                      <option value="">Choose...</option>
                      <option>WI</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="shipping-zip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="shipping-zip" placeholder=""
                           required>
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>

                </div>

                <button class="w-100 btn btn-primary btn-lg mt-5 btn-continue" type="button">
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#payment-collapse" aria-expanded="false"
                      aria-controls="payment-collapse">
                <span class="badge bg-secondary me-3">3</span>PAYMENT
              </button>
            </h2>
            <div id="payment-collapse" class="accordion-collapse collapse"
                 data-bs-parent="#checkout-accordion">
              <div class="accordion-body">
                <div class="my-3">
                  <div class="form-check">
                    <input id="credit" name="paymentMethod" type="radio"
                           class="form-check-input"
                           checked
                           required>
                    <label class="form-check-label" for="credit">Credit card</label>
                  </div>
                  <div class="form-check">
                    <input id="debit" name="paymentMethod" type="radio" class="form-check-input"
                           required>
                    <label class="form-check-label" for="debit">Debit card</label>
                  </div>
                  <div class="form-check">
                    <input id="paypal" name="paymentMethod" type="radio"
                           class="form-check-input"
                           required>
                    <label class="form-check-label" for="paypal">PayPal</label>
                  </div>
                </div>
                <div class="row gy-3">
                  <div class="col-md-6">
                    <label for="cc-name" class="form-label">Name on card</label>
                    <input type="text" class="form-control" id="cc-name" placeholder=""
                           required>
                    <small class="text-body-secondary">Full name as displayed on card</small>
                    <div class="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>

                  <div class="col-md-6 cc">
                    <label for="cc-number" class="form-label">Credit card number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder=""
                           required>
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <div class="col-md-3 cc">
                    <label for="cc-expiration" class="form-label">Expiration</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder=""
                           required>
                    <div class="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>

                  <div class="col-md-3 cc">
                    <label for="cc-cvv" class="form-label">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                    <div class="invalid-feedback">
                      Security code required
                    </div>
                  </div>

                  <div class="col-md-6 pp">
                    <label for="pp-username" class="form-label">PayPal username</label>
                    <input type="text" class="form-control" id="pp-username" placeholder=""
                           required>
                    <div class="invalid-feedback">
                      PayPal username required
                    </div>
                  </div>
                </div>

                <button class="w-100 btn btn-primary btn-lg mt-5 btn-continue" type="button">
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#confirmation-collapse" aria-expanded="false"
                      aria-controls="confirmation-collapse">
                <span class="badge bg-secondary me-3">4</span>CONFIRMATION
              </button>
            </h2>
            <div id="confirmation-collapse" class="accordion-collapse collapse"
                 data-bs-parent="#checkout-accordion">
              <div class="accordion-body">
                <div class="row">
                  <div class="col-sm-6 mb-5">
                    <h5 class="border-bottom">BILLING</h5>
                    <div id="billing-confirmation">
                      John Schmo<br>
                      800 Main St.<br>
                      Pewaukee, WI 53072
                    </div>
                  </div>
                  <div class="col-sm-6 mb-5">
                    <h5 class="border-bottom">SHIPPING</h5>
                    <div id="shipping-confirmation">
                      John Schmo<br>
                      800 Main St.<br>
                      Pewaukee, WI 53072
                    </div>
                  </div>
                  <div class="col-sm-6 mb-5">
                    <h5 class="border-bottom">PAYMENT</h5>
                    <div id="payment-confirmation">
                      Your payment method.
                    </div>
                  </div>
                  <div class="col-sm-6 mb-5">
                    <h5 class="border-bottom">TOTAL</h5>
                    <div id="cart-confirmation">
                      <b>Total:</b> $20
                    </div>
                  </div>
                </div>
                <button class="w-100 btn btn-primary btn-lg" type="submit">Checkout</button>
              </div>
            </div>
          </div>
        </div>


      </form>
    </div>
  </div>

</template>

<style scoped>

</style>