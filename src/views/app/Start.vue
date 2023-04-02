<template>
  <div>
    <div class="header">
      <div class="top">
        <div class="left">
          <van-image height="50" width="100%" position="left" fit="cover" :src="logo" class="logo" />
        </div>
        <div class="right">
          <van-image height="50" width="100%" position="left" fit="cover" :src="hotline" class="hotline" />
        </div>
      </div>
      <div class="nav">
        <a href="/">房屋抵押</a>
        <a href=""> 汽车贷款 </a>
        <a href="">社保/公积金</a>
        <a href="">信用贷款</a>
        <a href="">企业贷款</a>
      </div>
    </div>
    <div class="img">
      <!-- <img src="../../assets/images/ban01.png"> -->
      <van-image width="100%" height="100%" fit="cover" :src="ban01" />
    </div>
    <div class="home_form">
      <div class="img"></div>
      <van-image width="100%" height="100%" fit="cover" :src="a04" />
      <div class="info">
        <p class="title">有资金需求您就来</p>
        <p>多元化贷款方式，月息低至2厘5</p>
        <p>正规平台 &nbsp;&nbsp;&nbsp;&nbsp;快速审批 &nbsp;&nbsp;&nbsp;&nbsp;灵活借还&nbsp;&nbsp;&nbsp;&nbsp; 不查征信</p>
        <p>最长可分60期，可提前还款</p>
      </div>
      <button type="submit" name="dosubmit" id="dosubmit" class="btn02 okA" @click="toHome">立即申请</button>

    </div>
    <div class="business">
      <div class="img">
        <img src="../../assets/images/a02.png">
      </div>
      <ul>
        <li>
          <a href="tel:19180946181" target="">
            <table>
              <tbody>
                <tr>
                  <td class="img">
                    <img src="../../assets/images/20180926011348944.png">
                  </td>
                  <td>
                    <p class="title">房屋抵押贷款</p>
                    <p>有房产证即可贷</p>
                    <span>高至1000万,利息低至2厘5</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </a>
        </li>
        <li>
          <a href="tel:19180946181" target="">
            <table>
              <tbody>
                <tr>
                  <td class="img"><img src="../../assets/images/20180926011431222.png">
                  </td>
                  <td>
                    <p class="title">汽车贷款</p>
                    <p>有车即可贷,不押车,不装gps</p>
                    <span>高达评估9成,利息低至5厘</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </a>
        </li>
        <li>
          <a href="tel:19180946181" target="">
            <table>
              <tbody>
                <tr>
                  <td class="img"><img src="../../assets/images/20180926011459908.png">
                  </td>
                  <td>
                    <p class="title">保单贷款</p>
                    <p>参保1年就能贷</p>
                    <span>额度5-50万,利息低至5厘</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </a>
        </li>
        <li>
          <a href="tel:19180946181" target="">
            <table>
              <tbody>
                <tr>
                  <td class="img"><img src="../../assets/images/20180926011545407.png">
                  </td>
                  <td>
                    <p class="title">社保/公积金贷款</p>
                    <p>连续缴纳半年就能贷</p>
                    <span>额度2-60万,利息低至3厘</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </a>
        </li>
        <li>
          <a href="tel:19180946181" target="">
            <table>
              <tbody>
                <tr>
                  <td class="img"><img src="../../assets/images/20180926011624846.png">
                  </td>
                  <td>
                    <p class="title">企业贷款</p>
                    <p>有营业执照就能贷</p>
                    <span>额度2-200万,利息低至3厘3</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </a>
        </li>
        <li>
          <a href="tel:19180946181" target="">
            <table>
              <tbody>
                <tr>
                  <td class="img"><img src="../../assets/images/20180926011657786.png">
                  </td>
                  <td>
                    <p class="title">流水贷款</p>
                    <p>银行流水月2000以上就能贷</p>
                    <span>额度1-30万,利息低至6厘</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </a>
        </li>
      </ul>
      <div class="more">多元化贷款方式，总有适合您得产品</div>
    </div>
    <div class="advantage">
      <div class="img">
        <img src="../../assets/images/a11.png">
      </div>
      <ul class="wh">

        <li>

          <a href="javascript:;">

            <div class="img"><img src="../../assets/images/b07.png"></div>

            <h2>门槛低</h2>

            <p>月收入2000<br>有银行流水就可贷</p>

          </a>

        </li>

        <li>

          <a href="javascript:;">

            <div class="img"><img src="../../assets/images/b08.png"></div>

            <h2>额度高</h2>

            <p>有房有车均可贷<br>
              额度高至2000万</p>

          </a>

        </li>

        <li>

          <a href="javascript:;">

            <div class="img"><img src="../../assets/images/b09.png"></div>

            <h2>利息低</h2>

            <p>利息低至2厘5<br>还款方式灵活无压力</p>

          </a>

        </li>

        <li>

          <a href="javascript:;">

            <div class="img"><img src="../../assets/images/b10.png"></div>

            <h2>服务好</h2>

            <p>定制方案<br>贷款顾问一对一专属服务</p>

          </a>

        </li>

      </ul>
      <div class="tell">
        <!-- <div><span>24小时免费热线</span>
          <a href="tel:19180946181" target="">立即咨询</a>
        </div> -->
        <button type="submit" name="dosubmit" id="dosubmit" class="btn02 okA" @click="toHome">获取额度</button>

      </div>
    </div>

    <div class="step">

      <h1>申请贷款 三步搞定</h1>

      <ul>

        <li>

          <div class="img"><img src="../../assets/images/c01.png"></div>

          <h2>01</h2>

          <p>在线申请</p>

        </li>

        <li>

          <div class="img"><img src="../../assets/images/c02.png"></div>

          <h2>02</h2>

          <p>签约审核</p>

        </li>

        <li>

          <div class="img"><img src="../../assets/images/c03.png"></div>

          <h2>03</h2>

          <p>银行放款</p>

        </li>

      </ul>

      <div class="img"><img src="../../assets/images/c04.png"></div>

    </div>
    <div class="tips">
      <div>
        开发者 成都融信信息服务有限公司
      </div>
      <div>蜀ICP备2020030967号-3</div>
      <div>
        公司与平安银行股份有限公司消费金融中心机构签约建立深入合作，贷款资金均来自签约合作银行方。
      </div>

    </div>
    <div class="footer">
      <a href="" target="_blank">在线咨询</a>
      <a href="tel:19180946181" style="background: #f9a646;">立即拨打</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "StartPage",
  data() {
    return {
      logo: require('../../assets/images/logo.svg'),
      hotline: require('../../assets/images/tell.png'),
      ban01: require('../../assets/images/ban01.png'),
      a04: require('../../assets/images/a04.png'),
      a01: require('../../assets/images/a01.png'),
      active: 0
    };
  },
  methods: {
    created() {

    },
    toHome() {
      let vm = this;
      let numberValue = 0;
      let employeeNumber = vm.$route.query.employeeNumber;
      let number = vm.$route.query.number;
      if (employeeNumber && employeeNumber > 0) {
        numberValue = employeeNumber;
      } else if (number && number > 0) {
        numberValue = number;
      }
      if (10000 < numberValue || numberValue < 100) {
        numberValue = 0;
      }
      //numberValue = "321";
      this.$router.push({
        path: "/m_assetInfo",
        query: { numberValue: numberValue },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  .top {
    height: 50px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    background: #fff;
    .left {
      height: 100%;
      width: 45%;
      // background: #ddd;
      text-align: left;
      display: inline-block;
      .logo {
        height: 100%;
        left: -40%;
        border-radius: 5px;
      }
    }
    .right {
      height: 100%;
      width: 45%;
      // background: red;
      text-align: right;
      display: inline-block;
      .hotline {
        height: 100%;
        left: 22%;
        border-radius: 5px;
      }
    }
  }
  .nav {
    overflow: hidden;
    margin-top: 50px;
    a {
      background: #ff8208;
      display: inline-block;
      line-height: 2.4rem;
      text-align: center;
      color: #fff;
      width: 20%;
      font-size: 13px;
      border-left: #fff solid 1px;
      float: left;
      margin-left: -1px;
    }
  }
}
.img {
  line-height: 0 !important;
}
.home_form {
  background: url('../../assets/images/a01.png') top center no-repeat;
  background-size: 100% 100%;
  padding: 12% 0 8%;
  button {
    cursor: pointer;
    // padding: 0 10% 0.5rem;
    margin: 3% 15%;
  }
  .btn02 {
    display: block;
    height: 2.52rem;
    line-height: 2.52rem;
    background: url('../../assets/images/a09.png');
    background-size: auto 100%;
    width: 70%;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    overflow: hidden;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    margin-top: 0.5rem;
    border: 0;
  }
  .info {
    line-height: 36px;
    color: #222;
    text-align: center;
    font-size: 18px;
    margin-top: -1rem;
    .title {
      font-size: 24px;
      color: #ff8208;
      line-height: 48px;
    }
  }
}
.business {
  background: #2c82e7;
  .img {
    line-height: 0 !important;
    img {
      border: none;
      width: 100%;
      height: auto;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
    }
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      padding: 0 3% 0.65rem;
      display: list-item;
      text-align: -webkit-match-parent;
      a {
        display: block;
        background: url('../../assets/images/a10.png') center no-repeat;
        background-size: 100% 100%;
        // padding: 2% 0 1% 2%;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 72%;
        tr {
          td.img {
            width: 3.4rem;
            padding: 0.5rem;
            img {
              border: none;
              width: 100%;
              height: auto;
              box-sizing: border-box;
              -webkit-box-sizing: border-box;
            }
          }
          td {
            // padding: 0.5rem;
            text-align: left;
            // padding: 0.5rem 0;
            padding: 16px 0 5px 0;
            .title {
              // line-height: 0.2rem;
              // margin-top: 1rem;
              color: black;
              font-weight: 600;
              font-size: 14px;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              margin: 0;
              line-height: 20px;
            }
            p {
              // line-height: 0.1rem;
              font-size: 13px;
              color: #999;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              margin: 0;
              line-height: 18px;
            }
            span {
              font-size: 12px;
              display: inline-block;
              border: #f66133 solid 1px;
              color: #f66133;
              padding: 0 5px;
              border-radius: 5px;
              overflow: hidden;
              -webkit-border-radius: 5px;
              margin: 0;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
  .more {
    color: #fff;
    font-weight: 400;
    // line-height: 1.8rem;
    font-size: 16px;
    padding-bottom: 0.5rem;
    // color: #ff8208;
  }
}
.advantage {
  background: #2c82e7;
  .img img {
    border: none;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  ul {
    background: url('../../assets/images/b11.png')
      /*tpa=http://bbtg.qianshushu.net/statics/images/images/b11.png*/ center
      no-repeat;
    background-size: 100% 100%;
    li {
      width: 50%;
      float: left;
      margin-bottom: 0.2rem;
      a {
        display: block;
        margin: 5px;
        text-align: center;
        color: #fff;
        font-size: 0.9rem;
        h2 {
          margin: 2px 0 5px 0;
          font-size: 16px;
        }
        p {
          margin: 0;
          font-size: 13px;
          line-height: 18px;
        }
      }
      div.img {
        width: 5rem;
        margin: 0 auto;
      }
    }
  }
  .wh {
    width: 100%;
    overflow: hidden;
    zoom: 1;
  }
  .tell {
    button {
      cursor: pointer;
      // padding: 0 10% 0.5rem;
      margin: 3% 15%;
    }
    .btn02 {
      display: block;
      height: 2.52rem;
      line-height: 2.52rem;
      background: url('../../assets/images/a09.png');
      background-size: auto 100%;
      width: 70%;
      border-radius: 100px;
      -webkit-border-radius: 100px;
      overflow: hidden;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 600;
      color: #fff;
      margin-top: 0.5rem;
      border: 0;
    }
    padding: 3%;
    div {
      height: 2.2rem;
      background: #fff;
      color: #f8a841;
      border-radius: 100px;
      -webkit-border-radius: 100px;
      span {
        display: inline-block;
        line-height: 2.3rem;
        margin-left: 5%;
        padding-left: 7%;
        background: url('../../assets/images/b12.png') left center no-repeat;
        background-size: auto 50%;
        font-size: 0.9rem;
        float: left;
        font-family: 'San Francisco';
        font-weight: 600;
      }
      a {
        line-height: 2.3rem;
        display: inline-block;
        font-size: 0.9rem;
        color: #fff;
        border-radius: 100px !important;
        -webkit-border-radius: 100px;
        overflow: hidden;
        text-align: center;
        float: right;
        margin-right: -1px;
        background: url('../../assets/images/b13.png')
          /*tpa=http://bbtg.qianshushu.net/statics/images/images/b13.png*/;
        background-size: auto 100%;
        width: 34%;
      }
    }
  }
}
.step {
  padding: 3% 3% 0;
  background: #2c82e7;
  h1 {
    background: url('../../assets/images/a09.png')
      /*tpa=http://bbtg.qianshushu.net/statics/images/images/a09.png*/;
    background-size: auto 100%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    font-family: 'Impact';
    line-height: 3rem;
    margin-bottom: 0;
  }
  ul {
    background: url('../../assets/images/b14.png')
      /*tpa=http://bbtg.qianshushu.net/statics/images/images/b14.png*/ top
      center no-repeat;
    background-size: 100% 100%;
    padding: 10px;
    font-size: 0.9rem;
    text-align: center;
    line-height: 2;
    color: #666;
    li {
      display: inline-block;
      width: 30%;
      div.img {
        width: 5rem;
        margin: 0 auto;
      }
      h2 {
        font-family: 'Impact';
        font-weight: 600;
        font-size: 0.9rem;
        margin: 0;
      }
      p {
        margin: 0;
        font-size: 14px;
      }
    }
  }
  .img img {
    border: none;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
}

.tips {
  background: #2c82e7;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 0.5rem;
  line-height: 1.2rem;
  padding: 1rem;
  margin-bottom: 2rem;
  .footer {
    font-size: 0.9rem;
    text-align: center;
  }
}
.footer {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: -2px;
  z-index: 99;
}
.footer a {
  display: block;
  width: 50%;
  float: left;
  background: #391a95;
  color: #fff;
  line-height: 2.8rem;
  font-size: 0.9rem;
}
.footer,
.footer_a {
  height: 2.8rem;
  line-height: 2.8rem;
  text-align: center;
}
</style>
