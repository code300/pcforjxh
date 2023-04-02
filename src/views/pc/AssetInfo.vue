<template>
  <div class="AssetInfoPage">
    <van-loading v-if="loadFlag" class="loading">{{this.btntext}}</van-loading>
    <div class="AssetInfo">
      <!-- <div class="title title2">填写资料，获取额度</div> -->
      <van-form @submit="onSubmit">
        <van-field v-model="clientName" label-width="50px" required name="clientName" label="姓名" placeholder="请输入姓名" :rules="[
            { required: true, message: '' },
            { validator: validatorName, message: '姓名只能为汉字' },
          ]" />
        <van-field v-model="age" label-width="50px" name="age" required type="number" label="年龄" placeholder="请输入年龄" :rules="[
            { required: true, message: '' },
            { validator: validatorAge, message: '年龄应大于18岁，小于60岁' },
          ]" />
        <van-field is-link required readonly @click="show = true" v-model="city" label-width="83px" name="city" label="所在城市" placeholder="请输入城市（成都市）" :rules="[{ required: true, message: '' }]" />
        <van-popup v-model="show" position="bottom" :style="{ height: '46%' }">
          <van-area @cancel="cancelFn" :area-list="areaList" @confirm="confirmFn" columns-num="2" value="510100" title="选择所在省市" />
        </van-popup>
        <van-field v-model="phone" label-width="83px" name="phone" required type="number" label="手机号码" placeholder="请输入手机号码" :rules="[
            { required: true, message: '' },
            { pattern, message: '请输入正确手机号' },
          ]" />
        <van-field v-model="loanAmount" label-width="83px" required type="number" name="loanAmount" label="贷款金额" placeholder="请输入贷款金额（元）" :rules="[
            { required: true, message: '' },
            { validator: validatorMount, message: '贷款金额应大于5000，小于1000万' },
          ]" />
        <van-field name="accestInfo" label="资产信息" required label-width="83px">
          <template #input>

            <van-checkbox-group v-model="accestInfo" direction="horizontal">
              <van-checkbox name="realEstate">有房</van-checkbox>
              <van-checkbox name="car">有车</van-checkbox>
              <van-checkbox name="insurancePolicy">有保单</van-checkbox>
              <br />
              <br />
              <van-checkbox name="socialSecurity">有社保</van-checkbox>
              <van-checkbox name="providentFund">有公积金</van-checkbox>
              <van-checkbox name="creditCardQuota">有实体</van-checkbox>
              <br />
              <br />
              <van-checkbox name="salaryPayment">有流水</van-checkbox>
              <van-checkbox name="antPoints">芝麻分550以上</van-checkbox>
              <br />
              <br />
            </van-checkbox-group>
          </template>
        </van-field>
        <div class="btnbox">
          <p>{{this.btntext}}</p>
          <van-button class="btn" round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>

      <!-- <p class="tips2">
        声明：本平台根据用户提交的信息进行额度审核
        <br />
        本平台不会涉及到用户隐私和征信查询等，请放心使用。
        <br />
        <br />
        贷款有风险，请理性消费
      </p> -->

    </div>
  </div>
</template>
<script>
// import { Button, Toast, Loading, Popup, Area } from "vant";
import { Button, Loading, Popup, Area } from "vant";
import axios from "axios";
const areaList = require("../../assets/area.json");
// import { setTimeout } from "timers";

export default {
  name: "AssetInfo",
  components: {
    vanButton: Button,
    // vanRadioGroup: RadioGroup,
    // vanRadio: Radio,
    // Checkbox,
    // CheckboxGroup,
    vanLoading: Loading,
    vanPopup: Popup,
    vanArea: Area,
  },
  data() {
    return {
      submitApi: 'https://apponline.jinxianghua.com/501/add',
      host: 'https://spa.jinxianghua.com',
      // host: "https://apply.jinxianghua.com",
      hostname: '',
      btntext: '申请额度请以系统审核为准',
      loadFlag: false,
      clientName: "",
      sex: "1",
      age: "",
      city: "",
      phone: "",
      smsCode: "",
      loanAmount: "",
      show: false,
      areaList: areaList,
      pattern: /^[1][3,4,5,6,7,8，9][0-9]{9}$/,
      uid: "",
      sign: "",
      relCity: "",
      antPoints: "",
      socialSecurity: "",
      insurancePolicy: "",

      carValue: "",
      annualIncome: "",
      salaryPayment: "0",
      creditHistory: "0",
      creditQuery: "0",
      accestInfo: [],
      estateValue: '',
      baoDanValue: undefined,
      idCard: '422534190001218765',
    };
  },
  created() {
    this.host = this.getHost();
    this.hostname = location.hostname
    this.getSubmitApi()
  },
  mounted() {
    this.getSign();
  },
  methods: {
    getSubmitApi() {
      // https://apponline.jinxianghua.com/jxh/add  //公司员工提交接口
      // https://apponline.jinxianghua.com/501/add  //501推广提交接口
      // https://apponline.jinxianghua.com/502/add  //502推广提交接口
      switch (this.host) {
        case "https://spa.jinxianghua.com":
          this.submitApi = "https://apponline.jinxianghua.com/501/add"   //501推广提交接口
          break;
        case "https://spb.jinxianghua.com":
          this.submitApi = "https://apponline.jinxianghua.com/502/add"   //501推广提交接口
          break;
        case "https://apply.jinxianghua.com":
          this.submitApi = "https://apponline.jinxianghua.com/jxh/add"   //公司员工提交接口
          break;
        default:
          this.submitApi = "https://apponline.jinxianghua.com/501/add"   //501推广提交接口
          break;
      }
    },
    getHost() {
      //获取域名方法 getHost() = "http://localhost:8080"
      // https://so.bbphjt.net/
      var host = location.protocol.toLowerCase() + "//" + location.hostname;
      if (location.port != '' && location.port !== '80') {
        host = host + ":" + location.port;
      }
      return host;
    },
    validatorName(val) {
      var reg = /^[\u4e00-\u9fa5]+$/gi;
      return reg.test(val);
    },
    validatorAge(val) {
      return val >= 18 && val <= 60;
    },
    validatorMount(val) {
      return val >= 5000 && val <= 10000000;
    },

    toSelect() {
      this.show = true;
    },
    confirmFn(value) {
      console.log(this.city, this.relCity, '21212');
      this.show = false;
      let str = "";
      value.forEach((item) => {
        str += item.name + " ";
      });
      this.city = str.slice(0, -1);
      this.relCity = value[1].name;
      console.log(value);
    },
    cancelFn() {
      this.show = false;
    },
    getSign() {
      if (this.uid == "") {
        this.uid = Date.parse(new Date());
      }
      axios
        .get(
          `https://apponline.jinxianghua.com/jxh/getAppSign?code=${this.uid}`
        )
        .then((res) => {
          if (res.data.code === 0) {
            console.log("token", res.data.data);
            this.sign = res.data.data;
          }
        });
    },
    validator(val) {
      return val > 350 && val < 950;
    },
    validatorMonth(val) {
      return val <= 120;
    },
    validatorYear(val) {
      return val <= 30;
    },
    validatorHouse(val) {
      return (val >= 20 && val <= 1000) || val === "";
    },
    validatorCar(val) {
      return (val >= 1 && val < 100) || val === "";
    },
    validatorPerson(val) {
      return (val >= 1 && val < 100) || val === "";
    },
    onSubmit(values) {
      console.log(values, 'values');
      // 有房 默认100
      if (this.accestInfo.includes('realEstate')) {
        Object.assign(values, { realEstate: '1' })
      }
      if (this.accestInfo.includes('car')) {
        Object.assign(values, { car: '1' })
      }
      if (this.accestInfo.includes('insurancePolicy')) {
        Object.assign(values, { insurancePolicy: '1' })
      }
      if (this.accestInfo.includes('socialSecurity')) {
        Object.assign(values, { socialSecurity: '1' })
      }
      if (this.accestInfo.includes('providentFund')) {
        Object.assign(values, { providentFund: '1' })
      }
      if (this.accestInfo.includes('creditCardQuota')) {
        Object.assign(values, { creditCardQuota: '1' })
      }
      if (this.accestInfo.includes('salaryPayment')) {
        Object.assign(values, { salaryPayment: '1' })
      }
      if (this.accestInfo.includes('antPoints')) {
        Object.assign(values, { antPoints: '1' })
      }

      let obj = {
        employeeNumber: 0,
        number: 0,
        idCard: this.idCard,
        /***************************修改1***************************/
        // domain: "apply.jinxianghua.com", //公司和专员订单8003测试员工号
        // domain: "spa.jinxianghua.com", //501推广
        //  domain: "spb.jinxianghua.com", //502推广
        domain: this.hostname,
        ...values,
        ...this.$route.query,
      };

      /***************************修改2***************************/
      delete obj.number;
      obj.employeeNumber = this.$route.query.number - 0;
      if (obj.employeeNumber == 0) {
        delete obj.employeeNumber;
      }
      delete obj.numberValue;
      // obj.antPoints = obj.antPoints - 0;
      // if (obj.estateValue == "") {
      //   delete obj.estateValue;
      // } else {
      //   obj.realEstate = "1";
      // }
      // if (obj.carValue == "") {
      //   delete obj.carValue;
      // } else {
      //   obj.car = "1";
      // }
      const formData = new FormData();
      for (let key in obj) {
        formData.append(key, obj[key]);
      }
      const instance = axios.create({
        headers: { requestKey: this.sign },
      });
      delete obj.smsCode;
      delete obj.sign;
      console.log("requestKey", this.sign);
      console.log("submit", obj);
      /***************************修改3***************************/
      //推广订单提交接口:
      // https://apponline.jinxianghua.com/502/add
      // 公司/专员订单提交接口:
      // https://apponline.jinxianghua.com/jxh/add
      this.loadFlag = true
      this.btntext = '系统审核中，请等待......'
      instance
        .post(this.submitApi, obj)
        .then((res) => {
          this.loadFlag = false;
          if (res.data.code === 0 && res.data.data !== 0) {
            //成功有额度
            this.btntext = '恭喜，系统审核通过！请等待客服电话。'
          } else if (res.data.code === 0 && res.data.data === 0) {
            //成功无额度
            this.btntext = '抱歉，系统审核未通过！'
          } else {
            this.loadFlag = false
            this.btntext = res.data.msg
          }
        })
        .catch((err) => {
          this.loadFlag = false;
          console.log("err", err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.AssetInfoPage {
  z-index: 999;
  position: absolute;
  // right: 330px;
  // left: 1200px;
  left: 65%;
  top: 140px;
  width: 390px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  text-align: center;
  color: #fff;
  padding: 20px;
}

.AssetInfo {
  text-align: left;
  font-size: 15px;
}
.title {
  font-size: 18px;
  margin-left: 16px;
  margin-top: 16px;
  font-weight: 900;
}
.title2 {
  color: #ff8208;
  line-height: 2rem;
}

// .loading {
//   position: fixed;
//   left: 50%;
//   /* right:0; */
//   top: 40%;
//   margin-left: -135px;
//   margin-top: -18px;
//   /* bottom:0; */
//   /* display: flex; */
//   /* align-items:center; */
//   /* justify-content:center; */
//   z-index: 1000;
// }
.loading {
  z-index: 10000;
  position: absolute;
  right: 0px;
  // left: 1200px;
  top: 0px;
  width: 390px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.5);
  // background: #2c82e7;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  // padding: 20px;
}
.van-loading__spinner {
  margin-top: 225px;
}
.loading .van-loading__text {
  font-size: 20px;
  margin-top: 225px;
  color: #fff;
}
/* .van-picker__columns{
  height:220px!important;
} */
.van-button--info {
  font-size: 19px !important;
  font-weight: 900 !important;
}
>>> .van-cell {
  font-size: 16px;
}
.van-radio {
  margin-bottom: 10px !important;
  margin-top: 10px !important;
}
.AssetInfo .van-picker-column__item {
  line-height: 44px;
}
.AssetInfo .van-radio-group {
  display: block;
}
.AssetInfo .van-radio-group--horizontal {
  display: flex;
}
.AssetInfo .van-radio-group .van-radio {
  margin-bottom: 3px;
}
.AssetInfo .van-radio-group--horizontal .van-radio {
  margin-bottom: 0px;
}
.AssetInfo .van-radio {
  margin-right: 5px;
}
.AssetInfo .van-cell--required::before {
  position: absolute;
  left: 0px;
  color: #ee0a24;
  font-size: 14px;
  content: '';
}
.AssetInfo .van-field__label {
  position: relative;
}
.AssetInfo .van-cell--required .van-field__label::after {
  position: absolute;
  right: -2px;
  color: #ee0a24;
  font-size: 14px;
  content: '*';
}
.tips2 {
  background: #2c82e7;
  font-size: 12px;
  color: #fff;
  text-align: center;
  /* line-height: 0.5rem; */
  line-height: 1.2rem;
  padding: 1rem 0;
  /* position: fixed; */
  /* bottom: 0; */
  height: calc(100vh - 495px);
  width: 100%;
  margin: 0;
}
.btnbox {
  p {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
    color: #fff;
  }
  .btn {
    display: block;
    height: 2.52rem;
    line-height: 2.52rem;
    background: url('../../assets/images/a09.png');
    background-size: auto 100%;
    /* width: 70%; */
    text-align: center;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    overflow: hidden;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    // margin-top: 20px;
    border: 0;
  }
}
</style>
