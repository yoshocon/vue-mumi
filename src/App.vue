<template lang="pug">
  #app
    .header
      .logo
        router-link(to='/')
          img(alt='Vue logo' src='./assets/mumi.png' width="30px" heigth="30px")
      router-link(to='Basic').option 基本設定
      .option MUMI001
      .option MUMI002
      .option MUMI003
      .option MUMI004
    .wrapper
      router-view
      .footer
        .text Copyright©2020 Mumi
</template>

<style lang="stylus">
@import("style/main.styl")
</style>
