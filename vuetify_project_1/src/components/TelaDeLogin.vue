<!-- eslint-disable vue/multiline-html-element-content-newline -->
<template>
  <v-app>
    <v-main class="d-flex align-center justify-center">
      <v-card 
        title="Login" 
        class="mx-auto mt-9" 
        width="500" 
        color="grey-darken-4" 
        elevation="10"
      >
        <v-card-text>
          <v-text-field
            label="E-mail"
            v-model="email"
            type="email"
            variant="outlined"
            prepend-icon="mdi-email-outline"
            :rules="emailRules"
          />
          <v-text-field
          v-model="senha"
            label="Senha"
            variant="outlined"
            :rules="passwordRules"
            prepend-icon="mdi-lock"
          />
          <v-card-actions class="d-flex flex-column">
            <v-btn
              size="large"
              rounded="lg"
              elevation="4"
              color="primary"
              block
              @click="sayHello"
            >ENTRAR</v-btn>
            <v-btn
              size="large"
              rounded="lg"
              elevation="4"
              color="green"
              class="ma-3"
              block
              @click="cadastrar"
            >CADASTRAR</v-btn>
          </v-card-actions>
        </v-card-text>
          
      </v-card>
    </v-main>
  
  
  </v-app>
</template>
  
  
<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/main";
export default {
  data() {
    return {
      email: null,
      password: null,
      emailRules: [
        function (value) {
          if (value) return true;
          return 'Insira um email';
        }
      ],
      passwordRules: [
        function (value) {
          if (value) return true;
          return 'Insira uma senha';
        }
      ]
    };
  },
  methods: {
    sayHello(){
      signInWithEmailAndPassword(auth, this.email, this.senha).then((user) => {
        
        this.$router.push('helloWorld')
      },(err) => {
        alert('Aconteceu algo inesperado.' + err.message)
      }
    )
  },     
    cadastrar(){
      this.$router.push('cadastro')
    }
  }
};

  </script>
  