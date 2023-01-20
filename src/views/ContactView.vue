<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Declare globals for recaptcha
 */
declare global {
  interface Window {
    onRecaptcha: any
  }
}

declare var grecaptcha: any

export default defineComponent({
  data() {
    return {
      fields: {
        name: '',
        email: '',
        message: '',
        retoken: '',
      },
      token: '',
      ready: false,
      isReceived: false,
    }
  },
  mounted() {
    const API_URL = import.meta.env.VITE_API_URL

    this.$http.get(`${API_URL}/generateToken`).then((response) => {
      this.token = response.data
      this.ready = true
    })

    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
    document.head.appendChild(recaptchaScript)

    window.onRecaptcha = this.onRecaptcha
  },
  methods: {
    /**
     * Clear the form
     */ 
    clearForm() {
      this.fields = {
        name: '',
        email: '',
        message: '',
        retoken: '',
      }
    },

    /**
     * Handler for submit
     */ 
    onSubmit(evt: any) {
      evt.preventDefault()
      grecaptcha.execute()

      this.ready = false
    },

    onRecaptcha(token: string) {
      const API_URL = import.meta.env.VITE_API_URL

      this.fields.retoken = token

      // Send form to server  
      this.$http.post(`${API_URL}/sendEmail`, this.fields, { headers: {'Authorization': this.token} })
        .then((response) => {
          this.clearForm()
          this.ready = true
          this.isReceived = true
        })
        .catch((e) => {
          console.log(e)
          this.ready = true
        })
    }
  }
})
</script>

<template>
  <div class="content">
    <h1>Contact</h1>
    <div class="center">
      <div id="contact-form" class="contact-form">
        <p class="contact-form_title">For all inquiries, please use the contact form below.</p>
        <div class="separator"></div>

        <div v-if="!ready" class="loading">Sending...</div>

        <form class="form" @submit="onSubmit">
          <input required name="name" v-model='fields.name' placeholder="Name" type="text" autocomplete="off">
          <input required name="email" v-model="fields.email" placeholder="E-mail" type="email" autocomplete="off">
          <textarea required name="message" v-model="fields.message" rows="6" placeholder="Message"></textarea>
           <button class="button" :disabled="!ready">Send</button>
        </form>
        <div class="g-recaptcha"
          data-sitekey="6LdkkAMkAAAAAHwzqMk_WtA1Cs3qd9AbNU9X6mxN"
          data-callback="onRecaptcha"
          data-size="invisible">
        </div>
        <div v-if="isReceived" class="thanks">Got it, thanks!</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-form {
  font-family: 16px;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  color: #333;
  text-align: left;
  font-size: 1.2rem;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: 'Roboto', sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #000;
  border: solid 1px #000;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
}

.contact-form .button:hover {
  background: #03ac13;
  border: solid 1px #03ac13;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px
}

.contact-form .thanks,
.contact-form .loading {
  margin:  1rem 0;
}
</style>
