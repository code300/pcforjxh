<template>
  <div class="home">
    <div id="top" class="top">
      <div class="left fl">
        <!-- <img src="https://so.bbphjt.net/static/index/uploadfile/2018/0927/20180927111215631.jpg" alt=""> -->
        <!-- <img src="../../assets/logo.svg" alt=""> -->
        <p>锦享花</p>
      </div>
      <div class="right fr">
        <!-- <img src="https://so.bbphjt.net/static/index/uploadfile/2018/0927/20180927111215631.jpg" alt=""> -->
        <p>24小时客服热线：19180946181</p>
      </div>
    </div>
    <div id="nav" class="nav">
      <ul>
        <li v-for="(item,index) in navArr" :key="item.name" @click="selectPage(index)">
          <a :href="item.to" :class="select===index?'select':''">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div id="banner" class="banner">
      <el-carousel height="530px">
        <el-carousel-item v-for="item in bannerArr" :key="item.url">
          <img :src="item.url" alt="暂无图片" />
        </el-carousel-item>
      </el-carousel>
      <My-Form />
    </div>
    <div id="advantage" class="advantage">
      <ul class="clearfix">
        <li class="fl">
          <div class="fl left">
            <img src="../../assets/a09.png" alt="">
          </div>
          <div class="fl right">
            <h3>额度高</h3>
            <p>最高可贷1000万</p>
          </div>
        </li>
        <li class="fl">
          <div class="fl left">
            <img src="../../assets/a10.png" alt="">
          </div>
          <div class="fl right">
            <h3>利息低</h3>
            <p>最低至2厘5</p>
          </div>
        </li>
        <li class="fl">
          <div class="fl left">
            <img src="../../assets/a11.png" alt="">
          </div>
          <div class="fl right">
            <h3>放款快</h3>
            <p>快至1小时放款</p>
          </div>
        </li>
        <li class="fl">
          <div class="fl left">
            <img src="../../assets/a12.png" alt="">
          </div>
          <div class="fl right">
            <h3>服务好</h3>
            <p>资深顾问一对一服务</p>
          </div>
        </li>
      </ul>
    </div>
    <div id="service" class="service">
      <div class="title">
        <h2>
          锦享花为您提供
          <span>
            专项贷款方式
          </span>
        </h2>
      </div>
      <ul class="clearfix">
        <li class="fl mr75">
          <p>
            <img src="https://so.bbphjt.net/static/index/uploadfile/2018/0927/20180927124536646.png" alt="">
          </p>
          <div class="title">
            <p class="title1">有房就能贷</p>
            <p class="title2">期限长达30年，额度高至1000万</p>
            <a>立即咨询</a>
          </div>
        </li>
        <li class="fl mr75">
          <p>
            <img src="https://so.bbphjt.net/static/index/uploadfile/2018/0927/20180927124616164.png" alt="">
          </p>
          <div class="title">
            <p class="title1">有车就能贷</p>
            <p class="title2">不押车，不装gps</p>
            <a>立即咨询</a>
          </div>
        </li>
        <li class="fl">
          <p>
            <img src="https://so.bbphjt.net/static/index/uploadfile/2018/0927/20180927124813188.png" alt="">
          </p>
          <div class="title">
            <p class="title1">有保单就能贷，保单变宝单</p>
            <p class="title2">手续简单，当天放款</p>
            <a>立即咨询</a>
          </div>
        </li>
      </ul>
      <ul class="clearfix">
        <li class="fl mr75">
          <p>
            <img src="https://so.bbphjt.net/static/index/uploadfile/2018/0927/20180927124921987.png" alt="">
          </p>
          <div class="title">
            <p class="title1">连续半年无断缴就能贷</p>
            <p class="title2">无抵押，无担保，办理快捷</p>
            <a>立即咨询</a>
          </div>
        </li>
        <li class="fl mr75">
          <p>
            <img src="https://so.bbphjt.net/static/index/uploadfile/2018/0927/20180927125021200.png" alt="">
          </p>
          <div class="title">
            <p class="title1">工资月入3000</p>
            <p class="title2">门槛低，手续简单</p>
            <a>立即咨询</a>
          </div>
        </li>
        <li class="fl">
          <p>
            <img src="https://so.bbphjt.net/static/index/uploadfile/2018/0927/20180927125105237.png" alt="">
          </p>
          <div class="title">
            <p class="title1">有营业执照就能贷</p>
            <p class="title2">还款方式灵活，随借随还</p>
            <a>立即咨询</a>
          </div>
        </li>
      </ul>
    </div>
    <div id="bottom" class="bottom">
      <div class="address">
        <p> 开发者 成都融信信息服务有限公司</p>
        <p>本平台与平安银行股份有限公司消费金融中心机构签约建立深入合作，贷款资金均来自银行等金融机构。</p>
        <p>贷款有风险，借款需谨慎:请根据个人能力合理贷款，理性消费，避免逾期。</p>
        <p>蜀ICP备2020030967号-3</p>
      </div>
    </div>
  </div>
</template>

<script>
import MyForm from './AssetInfo.vue'
export default {
  name: "HomePage",
  components: {
    MyForm,
  },
  data() {
    return {
      select: 0,
      navArr: [{ name: '首页', to: '#top' }, { name: '房屋贷款', to: '#service' }, { name: '信用贷款', to: '#service' }, { name: '汽车贷款', to: '#service' }, { name: '关于我们', to: '#bottom' },],
      bannerArr: [
        { url: require("../../assets/banner1.jpg") },
        { url: require("../../assets/banner2.jpg") },
        { url: require("../../assets/banner3.jpg") },
      ],
    }
  },
  methods: {
    selectPage(index) {
      this.select = index
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background: #fff;
  .top {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    background: #fff;
    .left {
      height: 80px;
      padding: 10px 0;
      img {
        float: left;
        height: 60px;
        margin: 10px 0;
      }
      p {
        height: 60px;
        text-align: left;
        color: #ff6c08;
        font-size: 30px;
        line-height: 60px;
        font-weight: 600;
      }
    }
    .right {
      height: 80px;
      padding: 10px 0;
      img {
        float: right;
        height: 60px;
        margin: 10px 0;
      }
      p {
        height: 60px;
        text-align: right;
        color: #ff6c08;
        font-size: 30px;
        line-height: 60px;
        font-weight: 600;
      }
    }
  }
  .nav {
    height: 53px;
    width: 100%;
    background: #021f53;
    text-align: center;
    // display: flex;
    display: inline-block;
    ul {
      display: inline-block;
      width: 1200px;
      height: 53px;
      // border: 1px solid red;
      clear: both;
      li a {
        float: left;
        display: block;
        color: #fff;
        width: 170px;
        height: 53px;
        line-height: 53px;
        // background: blue;
        // margin-right: 5px;
        box-shadow: 5px;
        font-weight: 500;
      }
      a:hover {
        color: #021f53;
        background: #fff;
      }
      .select {
        color: #021f53;
        background: #fff;
      }
    }
  }
  .banner {
    width: 100%;
    margin-top: -5px;
    .el-carousel {
      img {
        width: 100%;
        height: 530px;
      }
    }
  }
  .advantage {
    width: 100%;
    ul {
      display: inline-block;
      // vertical-align: middle;
      width: 1200px;
      // height: 132px;
      // border: 1px solid red;
      // clear: both;
      li {
        float: left;
        display: inline;
        vertical-align: middle;
        color: #fff;
        width: 25%;
        height: 132px;
        padding: 20px 0;
        // border: 1px solid blue;
        // .left {
        //   border: 1px solid red;
        // }
        .right {
          // border: 1px solid red;
          height: 92px;
          width: 190px;
          padding: 10px 0;
          text-align: left;
          h3 {
            font-size: 20px;
            line-height: 40px;
            color: #ff6c08;
            font-weight: 600;
          }
          p {
            font-size: 18px;
            line-height: 36px;
            color: #666;
            font-weight: 500;
          }
        }
      }
    }
  }
  .service {
    width: 100%;
    background: #f5f5f5;
    padding: 40px 0;
    border: 1px solid orange;
    .title {
      background: url('../../assets/a50.png') no-repeat;
      background-size: 752px auto;
      background-position: center;
      // margin: 40px 0;
      margin-bottom: 40px;
      // border: 1px solid orange;
      h2 {
        font-size: 28px;
        line-height: 56px;
        font-weight: 600;
        color: #021f53;
      }
      span {
        font-size: 25px;
        line-height: 50px;
        font-weight: 600;
        color: #ff6c08;
      }
    }
    ul {
      width: 1200px;
      // height: 300px;
      // border: 1px solid orange;
      display: inline-block;
      li {
        float: left;
        color: #fff;
        width: 394.5px;
        margin-bottom: 6.4px;
        // height: 300px;
        // padding: 20px 0;
        border: 1px solid #ddd;
        .title {
          margin: 30px 10px;
          .title1 {
            font-size: 18px;
            line-height: 32px;
            font-weight: 500;
            color: #666;
            // border: 1px solid #ddd;
          }
          .title2 {
            font-size: 18px;
            line-height: 32px;
            font-weight: 500;
            color: #666;
            // border: 1px solid #ddd;
          }
          a {
            margin: 20px 0;
            padding: 10px 20px;
            border: 1px solid #ddd;
            display: inline-block;
          }
        }
      }
    }
  }
  .bottom {
    width: 100%;
    // height: 300px;
    background: #001334;
    padding: 50px;
    .address {
      width: 1200px;
      display: inline-block;
      p {
        color: #ccc;
        text-align: left;
        font-size: 16px;
        line-height: 32px;
      }
    }
  }
}
</style>