<template>
  <vcard class="d-flex flex-column align-center justify-center">
    <h1>Você não entrou</h1>
    <v-btn
      size="large"
      rounded="lg"
      elevation="4"
      color="primary"
      @click="sayHello"
    >ENTRAR</v-btn>
  </vcard>
</template>

<script>
    export default{
    methods: {
    sayHello(){
      this.$router.push('login')
    }
  }
}
</script>

<style>
    .titulo{
        text-align: center;
        text-size-adjust: 50;
    }
</style>