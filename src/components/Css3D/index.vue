<template>
  <div class="demo">
    <ul class="max-box">
      <li class="space-left"></li>
      <li class="space-right"></li>
      <li class="space-up"></li>
      <li class="space-down"></li>
      <li class="space-front"></li>
      <li class="space-back"></li>
    </ul>
    <ul class="min-box">
      <li class="space-left"></li>
      <li class="space-right"></li>
      <li class="space-up"></li>
      <li class="space-down"></li>
      <li class="space-front"></li>
      <li class="space-back"></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  body {
    float: left;
    width: 100%;
    height: 100%;
    position: fixed;
    margin: 0px;
    background: #112f51;
  }

  .demo {
    width: 200px;
    height: 200px;
    /* border: 1px solid #000; */
    box-sizing: border-box;
    margin: -100px 0px 0px -100px;
    position: relative;
    transform: rotateY(13deg) rotateX(13deg) rotateX(0deg);
    animation: move 10s linear infinite;
    /*3D空间*/
    transform-style: preserve-3d;
    position: absolute;
    top: 50%;
    left: 38%;
  }

  .min-box {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50px;
    top: 50px;
    margin: 0px;
    padding: 0px;
  }

  .max-box {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0px;
    padding: 0px;
  }

  .max-box li {
    list-style: none;
    width: 200px;
    height: 200px;
    font-size: 60px;
    text-align: center;
    line-height: 200px;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    opacity: 0.2;
    /*修改基本样式*/
  }

  .min-box li {
    list-style: none;
    width: 100px;
    height: 100px;
    font-size: 60px;
    text-align: center;
    line-height: 100px;
    position: absolute;
    left: 0;
    top: 0;
    /*修改基本样式*/
  }

  .min-box .space-left {
    background-color: red;
    transform: translateX(-50px) rotateY(90deg);
  }
  .min-box .space-right {
    background-color: green;
    transform: translateX(50px) rotateY(90deg);
    /*将第一个2向右移动100像素，然后绕y轴旋转90度*，形成右边的面*/
  }
  .min-box .space-up {
    background-color: blue;
    transform: translateY(-50px) rotateX(90deg);
    /*将第一个2向右移动100像素，然后绕y轴旋转90度*，形成右边的面*/
  }
  .min-box .space-down {
    background-color: yellow;
    transform: translateY(50px) rotateX(90deg);

    /*将第一个4向下移动100像素，然后绕x轴旋转90度*/
  }
  .min-box .space-front {
    background-color: purple;
    transform: translateZ(-50px);
    /*将第一个5向后移动100像素，形成后面的面*/
  }
  .min-box .space-back {
    background-color: pink;
    transform: translateZ(50px);
    /*将第一个l向前移动100像素，形成前面的面*/
  }


  .max-box .space-left {
    transform: translateX(-100px) rotateY(90deg);
    animation: max-left 5s linear infinite;
    /*将第一个l向左移动100像素，然后绕y轴旋转90度，形成左边的面*/
  }

  .max-box .space-right {
    transform: translateX(100px) rotateY(90deg);
    animation: max-right 5s linear infinite;
    /*将第一个2向右移动100像素，然后绕y轴旋转90度*，形成右边的面*/
  }

  .max-box .space-up {
    transform: translateY(-100px) rotateX(90deg);
    animation: max-up 5s linear infinite;
    /*将第一个3向上移动100像素，然后绕x轴旋转90度，形成上面的面*/
  }

  .max-box .space-down {
    transform: translateY(100px) rotateX(90deg);
    animation: max-do 5s linear infinite;
    /*将第一个4向下移动100像素，然后绕x轴旋转90度*/
  }
  .max-box .space-front {
    transform: translateZ(-100px);
    animation: max-front 5s linear infinite;
    /*将第一个5向后移动100像素，形成后面的面*/
  }

  .max-box .space-back {
    transform: translateZ(100px);
    animation: max-back 5s linear infinite;
    /*将第一个l向前移动100像素，形成前面的面*/
  }


  /*给你一个默认的动画*/
  @keyframes move {
    0% {
      transform: rotateY(13deg) rotateX(13deg) rotateX(0deg);
    }
    25% {
      transform: rotateY(50deg) rotateX(50deg) rotateX(50deg);
    }
    50% {
      transform: rotateY(100deg) rotateX(100deg) rotateX(100deg);
    }
    75% {
      transform: rotateY(50deg) rotateX(50deg) rotateX(50deg);
    }
    100% {
      transform: rotateY(13deg) rotateX(13deg) rotateX(0deg);
    }
  }


  @keyframes max-do {
    0% {
      transform:  translateY(100px) rotateX(90deg);
    }
    50% {
      transform:  translateY(300px) rotateX(90deg);
    }
    100% {
      transform:  translateY(100px) rotateX(90deg);
    }
  }

  @keyframes max-back {
    0% {
      transform: translateZ(100px);
    }
    50% {
      transform: translateZ(300px);
    }
    100% {
      transform: translateZ(100px);
    }
  }

  @keyframes max-left {
    0% {
      transform: translateX(-100px) rotateY(90deg);
    }
    50% {
      transform: translateX(-300px) rotateY(90deg)
    }
    100% {
      transform: translateX(-100px) rotateY(90deg)
    }
  }

  @keyframes max-right {
    0% {
      transform: translateX(100px)  rotateY(90deg);;
    }
    50% {
      transform: translateX(300px)  rotateY(90deg);;
    }
    100% {
      transform: translateX(100px)  rotateY(90deg);;
    }
  }

  @keyframes max-up {
    0% {
      transform: translateY(-100px)  rotateX(90deg);
    }
    50% {
      transform: translateY(-300px) rotateX(90deg);
    }
    100% {
      transform: translateY(-100px) rotateX(90deg);
    }
  }

  @keyframes max-front {
    0% {
      transform: translateZ(-100px);
    }
    50% {
      transform: translateZ(-300px);
    }
    100% {
      transform:translateZ(-100px);
    }
  }
</style>
