<template>
  <header id="header">
    <div class="header__port">
      <router-link to="/portfolio">Portfolio</router-link>
    </div>
    <div class="header__logo">
      <router-link to="/">webstroyboy</router-link>
    </div>
    <nav class="header__menu">
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/reference">Reference</router-link></li>
        <li><router-link to="/youtube">Youtube</router-link></li>
        <li><router-link to="/script">Script</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <a href="/" class="ham">
        <span class="sr-only">menu</span>
      </a>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
