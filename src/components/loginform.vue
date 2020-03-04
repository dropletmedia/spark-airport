<template>
  <v-form ref="form" lazy-validation>
    <v-text-field
      solo
      v-model="form.firstname"
      label="First name"
      :rules="[rules.fnrequired, rules.counter]"
    ></v-text-field>

    <v-text-field
      solo
      v-model="form.lastname"
      label="Last name"
      :rules="[rules.lnrequired, rules.counter]"
    ></v-text-field>
    <v-text-field solo v-model="form.email" label="Email address" :rules="[rules.email]"></v-text-field>

    <v-checkbox v-model="form.terms" :rules="[rules.cbrequired]" class="my-0">
      <template v-slot:label>
        <span class="btext">
          I confirm that I have read and agree to the
          <router-link to="/terms-and-conditions" class="rtext">
            <span class="rtext">terms and conditions</span>
          </router-link>
        </span>
      </template>
    </v-checkbox>

    <v-checkbox v-model="form.subscribe" class="my-0">
      <template v-slot:label>
        <span class="btext">Tick to receive updates by email</span>
      </template>
    </v-checkbox>
    <span class="btext mt-0">
      By clicking below you agree to the use of your data in accordance with our
      <router-link to="/privacy" class="rtext">
        <span class="rtext">privacy policy</span>
      </router-link>
    </span>
    <button class="my-3 ripple" @click.stop.prevent="submit">
      <span class="helbut">ACCEPT AND CONNECT</span>
    </button>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    form: {
      firstname: "",
      lastname: "",
      email: "",
      terms: false,
      subscribe: false
    },
    rules: {
      fnrequired: value => !!value || "Please enter your first name",
      lnrequired: value => !!value || "Please enter your second name",
      cbrequired: value =>
        !!value || "You must agree to the Terms and Conditions",
      counter: value =>
        (value.length <= 24 && value.length >= 4) ||
        "Must be between 4 and 24 characters", //this seems wrong - excludes many names
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Please enter a valid email address";
      }
    }
  }),
  methods: {
    submit() {
      this.$refs.form.validate();
    }
  }
};
</script>

<style>
.helbut {
  font-size: 20px;
  font-weight: 700;
}
.btext {
  color: #003264;
  font-size: 14px;
}
.rtext {
  font-size: 14px;
  color: #d60000;
  text-decoration-color: #d60000;
}
.rtext:hover,
.rtext:active {
  color: #003264;
}

/* Ripple effect */
.ripple {
  background-position: center;
  transition: background 0.4s;
}
.ripple:hover {
  background: #003264 radial-gradient(circle, transparent 1%, #194673 1%)
    center/15000%;
}
.ripple:active {
  background-color: #194673;
  background-size: 100%;
  transition: background 0s;
}

button::-moz-focus-inner {
  border: 0;
}

button.ripple {
  border: none;
  width: 100%;
  border-radius: 6px;
  padding: 14px 18px 10px 18px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #d60000;
  box-shadow: 0 0 4px #999;
  outline: none;
}
</style>
