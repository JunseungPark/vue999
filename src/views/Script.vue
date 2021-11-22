<template>
  <div class="light">
    <Header />
    <main id="main">
      <section id="scriptCont">
        <div class="container">
          <WrapTitle name1="Script" name2="Reference" />
          <div class="script__cont"></div>
        </div>
        <ContInfo />
      </section>
      <!-- //scriptCont -->
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import WrapTitle from '@/components/WrapTitle.vue';
import ContInfo from '@/components/ContInfo.vue';

export default {
  components: {
    Header,
    Footer,
    WrapTitle,
    ContInfo,
  },
};
</script>

<style lang="scss" scoped>
// #scriptCont
#scriptCont {
  background-color: #000;
  color: #fff;
}

.light #scriptCont {
  background-color: #f0eeeb;
  .script__cont {
    color: #000;
  }
}
</style>
