<template>
    <v-card
    class="ma-6 pr-2 pl-2 pb-2 pt-4"
    rounded="2"
    color="#FFFFFF">
        <h1 class="text-h6 ml-7 mt-4">Project Hours By Year</h1>
    
    <v-sparkline
        class="ma-6 pr-2 pl-2 pb-2 pt-4"
        color="#E9E9E9"
      :auto-line-width="autoLineWidth"
      :fill="fill"
      :gradient="gradient"
      :gradient-direction="gradientDirection"
      :line-width="width"
      :model-value="value"
      :padding="padding"
      :smooth="radius || false"
      :stroke-linecap="lineCap"
      :type="type"
      auto-draw
    ></v-sparkline>
</v-card>
  </template>
  <script>
    const gradients = [
      ['#222'],
      ['#42b3f4'],
      ['red', 'orange', 'yellow'],
      ['purple', 'violet'],
      ['#00c6ff', '#F0F', '#FF0'],
      ['#f72047', '#ffd200', '#1feaea'],
    ]
  
    export default {
      data: () => ({
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: 'round',
        gradient: gradients[5],
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        gradientDirection: 'top',
        gradients,
        fill: false,
        type: 'bar',
        autoLineWidth: false,
      }),
    }
  </script>
    <!-- mounted: async function() {
        this.loading = true;
        const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=72Gxm9HUFZTWY89yEiilOsACX8bM8ULCT1go1Xg7N6IU2BrfDvOJsYJV73ctYITMJcFvX1mDCiczTf6u2W1tSR4WuSvYEB7kOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHayaGoePrRC5_h_8oGbkaBpdaCWQlYOQK9irVM8C7gkvCsSVAFXByUgT6V2ScrttWvvSLSWi2aochtc-u4gwWjZrW-hffsCVizfa37EJiSgEayc4cT4pOJegnb704rCXDmA&lib=MfXf9M1aXI2OGAdtBCOkbvWjHAwoJIls-')
        this.projs = await response.json();
        this.loading = false;
    } -->