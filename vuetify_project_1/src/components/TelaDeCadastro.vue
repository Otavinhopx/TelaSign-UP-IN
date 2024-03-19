<template>
  <v-app>
    <v-main class="d-flex align-center justify-center">
      <v-card 
        title="Cadastro" 
        class="mx-auto mt-9" 
        width="500" 
        color="grey-darken-4" 
        elevation="10"
      >
        <v-card-text>
          <v-text-field
            label="E-mail"
            type="email"
            variant="outlined"
            prepend-icon="mdi-email-outline"
            v-model="email"
            :rules="emailRules"
          />
          <v-text-field
            label="Senha"
            variant="outlined"
            v-model="senha"
            :rules="passwordRules"
            prepend-icon="mdi-lock"
            
          />
          <v-card-actions>
            <v-btn
              size="large"
              rounded="lg"
              elevation="4"
              color="green"
              block
              @click="sayHello"
            >
              CADASTRAR
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>
  
  
<script>
import { ref } from "vue";
import { auth } from "@/main";
import { createUserWithEmailAndPassword } from "firebase/auth";
const email = ref("email");
const password = ref("Senha");
export default {
  data() {
    return {
      email: '',
      senha: '',
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
      createUserWithEmailAndPassword(auth, this.email, this.senha).then((user) => {
        
        this.$router.push('login')
      },(err) => {
        alert('Aconteceu algo inesperado.' + err.message)
      }
    )
  }     
}
}


  </script>