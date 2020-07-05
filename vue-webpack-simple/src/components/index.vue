<template>
  <div>
    <h3>hello this is index page</h3>
    <button @click="toBase">vue base</button>
    <br />
    <button @click="toDouble">vue 双向绑定; 获取dom节点</button>
  </div>
</template>

<script>
export default {
  methods: {
    toBase() {
      console.log("to base");
      this.$router.push("/base");
    },
    toDouble() {
      console.log("to double");
      this.$router.push("/doubleBind");
    }
  }
};
</script>

<style>
</style>