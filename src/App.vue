<template lang="pug">
  #app
    .header
      .logo
        router-link(to='/')
          img(alt='Vue logo' src='./assets/mumi.png' width="30px" heigth="30px")
      router-link(to='Basic').option 基本設定
      router-link(to='Image').option 圖片集
    .wrapper
      router-view
      .footer
        .text Copyright©2020 Mumi
</template>

<style lang="stylus">
@import("style/main.styl")
</style>
