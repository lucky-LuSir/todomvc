<template>
<section class="todoapp">
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
</section>
</template>

<script>
// 导入Footer Header Main
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
export default {
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>

</style>
