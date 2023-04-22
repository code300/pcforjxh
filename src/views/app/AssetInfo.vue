<template>
  <div>
    <van-loading v-if="loadFlag" class="loading" size="48px"
      >系统审核中，请等待......</van-loading
    >
    <div v-if="!loadFlag" class="AssetInfo">
      <div class="title">填写资料，获取额度</div>
      <van-form ref="form">
        <van-field
          v-model="clientName"
          required
          label="姓名"
          placeholder="请输入姓名"
          :rules="[
            { required: true, message: '' },
            { validator: validatorName, message: '姓名只能为汉字' },
          ]"
        />
        <van-field
          v-model="age"
          required
          type="number"
          label="年龄"
          placeholder="请输入年龄"
          :rules="[
            { required: true, message: '' },
            { validator: validatorAge, message: '年龄应大于18岁，小于60岁' },
          ]"
        />
        <van-field
          is-link
          required
          readonly
          @click="show = true"
          v-model="city"
          label="所在城市"
          placeholder="请选择城市（成都市）"
          :rules="[{ required: true, message: '' }]"
        />
        <van-field
          v-model="phone"
          required
          type="tel"
          label="手机号码"
          placeholder="请输入手机号码"
          :rules="[
            { required: true, message: '' },
            { pattern, message: '请输入正确手机号' },
          ]"
        />
        <van-field
          v-model="loanAmount"
          required
          type="number"
          label="贷款金额"
          placeholder="请输入贷款金额（元）"
          :rules="[
            { required: true, message: '' },
            {
              validator: validatorMount,
              message: '贷款金额应大于5000，小于1000万',
            },
          ]"
        />
        <van-field
          v-model="accestInfo"
          label="资产信息"
          required
          class="accestInfo"
          :rules="[{ required: true, message: '资产信息不能为空' }]"
        >
          <template #input>
            <van-button
              v-for="(item, index) in accestInfoList"
              :key="index"
              round
              :class="[
                'mybtn',
                'mybtn' + index,
                item.flag === true ? 'actived' : '',
              ]"
              @click="accestInfoToggle(item, index)"
              native-type="button"
              >{{ item.name }}</van-button
            >
          </template>
        </van-field>
        <div style="margin: 26px 16px 30px 16px">
          <van-button
            class="bt btn02"
            round
            block
            type="info"
            native-type="button"
            @click="handleSubmit"
            >提 交</van-button
          >
        </div>
      </van-form>
      <p class="tips2">
        声明：本平台根据用户提交的信息进行额度审核
        <br />
        本平台不会涉及到用户隐私和征信查询等，请放心使用。
        <br />
        <br />
        贷款有风险，请理性消费
      </p>
      <van-popup v-model="show" position="bottom" :style="{ height: '46%' }">
        <van-area
          @cancel="cancelFn"
          :area-list="areaList"
          @confirm="confirmFn"
          columns-num="2"
          value="510100"
          title="选择所在省市"
        />
      </van-popup>
    </div>
  </div>
</template>
<script>
import { Button, Toast, Loading, Popup, Area } from "vant";
import axios from "axios";
const areaList = require("../../assets/area.json");

export default {
  name: "AssetInfoPage",
  components: {
    vanButton: Button,
    vanLoading: Loading,
    vanPopup: Popup,
    vanArea: Area,
  },
  data() {
    return {
      submitApi: "https://apponline.jinxianghua.com/501/add",
      host: "https://spa.jinxianghua.com",
      // host: "https://apply.jinxianghua.com",
      hostname: '',
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
      // relCity: "",
      // 资产信息8个
      realEstate: "",
      car: "",
      insurancePolicy: "",
      socialSecurity: "",
      providentFund: "",
      creditCardQuota: "",
      salaryPayment: "",
      antPoints: "",
      // carValue: "",
      // annualIncome: "",
      // creditHistory: "0",
      // creditQuery: "0",
      accestInfoList: [
        {
          key: "realEstate",
          name: "有房",
          flag: false,
        },
        {
          key: "car",
          name: "有车",
          flag: false,
        },
        {
          key: "insurancePolicy",
          name: "有保单",
          flag: false,
        },
        {
          key: "socialSecurity",
          name: "有社保",
          flag: false,
        },
        {
          key: "providentFund",
          name: "有公积金",
          flag: false,
        },
        {
          key: "creditCardQuota",
          name: "有实体",
          flag: false,
        },
        {
          key: "salaryPayment",
          name: "有流水",
          flag: false,
        },
        {
          key: "antPoints",
          name: "芝麻分550以上",
          flag: false,
        },
      ],
      accestInfo: "",
      estateValue: "",
      idCard: "422534190001218765",
      employeeNumber: this.$route.query.numberValue || "0",
    };
  },
  created() {
    this.host = this.getHost();
<<<<<<< HEAD
    this.hostname = location.hostname
    this.getSubmitApi()
=======
    this.getSubmitApi();
>>>>>>> 81f0ea3f8cce5d5f3a53c6fba39db4a67d230093
  },
  methods: {
    getSubmitApi() {
      // https://apponline.jinxianghua.com/jxh/add  //公司员工提交接口
      // https://apponline.jinxianghua.com/501/add  //501推广提交接口
      // https://apponline.jinxianghua.com/502/add  //502推广提交接口
      switch (this.host) {
        case "https://spa.jinxianghua.com":
          this.submitApi = "https://apponline.jinxianghua.com/501/add"; //501推广提交接口
          break;
        case "https://spb.jinxianghua.com":
          this.submitApi = "https://apponline.jinxianghua.com/502/add"; //501推广提交接口
          break;
        case "https://apply.jinxianghua.com":
          this.submitApi = "https://apponline.jinxianghua.com/jxh/add"; //公司员工提交接口
          break;
        default:
          this.submitApi = "https://apponline.jinxianghua.com/501/add"; //501推广提交接口
          break;
      }
    },
    getHost() {
      //获取域名方法 getHost() = "http://localhost:8080"
      // https://so.bbphjt.net/
      var host = location.protocol.toLowerCase() + "//" + location.hostname;
      if (location.port != "" && location.port !== "80") {
        host = host + ":" + location.port;
      }
      return host;
    },
    // 点击事件
    accestInfoToggle(item) {
      item.flag = !item.flag;
      item.flag === true ? (this[item.key] = "1") : "";
      if (item.flag) {
        this.accestInfo = "1";
      } else {
        this.accestInfo = "";
      }
    },
    // 校验
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
    // 获取token请求
    getSign() {
      if (this.uid == "") {
        this.uid = Date.parse(new Date());
      }
      this.loadFlag = true;
      axios
        .get(
          `https://apponline.jinxianghua.com/jxh/getAppSign?code=${this.uid}`
        )
        .then((res) => {
          this.loadFlag = false;
          if (res.data.code === 0) {
            this.sign = res.data.data;
            this.submit();
          }
        })
        .catch(() => {
          this.loadFlag = false;
          // Toast.fail(res.data.msg || '获取token失败');
        });
    },
    // 新增请求
    submit() {
      let obj = {
        accestInfo: this.accestInfo,
        employeeNumber: this.employeeNumber,
        number: 0,
        idCard: this.idCard,
        /***************************修改1***************************/
        // domain: "apply.jinxianghua.com", //公司和专员订单8003测试员工号
        // domain: "spa.jinxianghua.com", //501推广
        //  domain: "spb.jinxianghua.com", //502推广
        domain: this.hostname,
        ...this.$route.query,
        // form表单数据
        clientName: this.clientName,
        age: this.age,
        city: this.city,
        phone: this.phone,
        loanAmount: this.loanAmount,
        realEstate: this.realEstate,
        car: this.car,
        insurancePolicy: this.insurancePolicy,
        socialSecurity: this.socialSecurity,
        providentFund: this.providentFund,
        creditCardQuota: this.creditCardQuota,
        salaryPayment: this.salaryPayment,
        antPoints: this.antPoints,
      };
      const formData = new FormData();
      for (let key in obj) {
        formData.append(key, obj[key]);
      }
      const instance = axios.create({
        headers: { requestKey: this.sign },
      });
      this.loadFlag = true;
      instance
        .post(this.submitApi, obj)
        .then((res) => {
          this.loadFlag = false;
          console.log("res", res);
          //成功有额度
          if (res.data.code === 0 && res.data.data !== 0) {
            this.$router.push({
              path: "/m_result",
              query: {
                ...this.$route.query,
                success: "1",
              },
            });
          } else if (res.data.code === 0 && res.data.data === 0) {
            //成功无额度
            this.$router.push({
              path: "/m_result",
              query: {
                ...this.$route.query,
                success: "2",
              },
            });
          } else if (res.data.code === 500) {
            // 手机号申请过
            Toast(res.data.msg || "请求失败");
          }
        })
        .catch(() => {
          this.loadFlag = false;
          //失败
          // Toast.fail(res.data.msg || '请求失败');
        });
    },
    // 表单提交
    handleSubmit() {
      // 自定义全局表单校验
      this.$refs.form
        .validate()
        .then(() => {
          this.getSign();
        })
        .catch(() => {});
    },
    confirmFn(value) {
      this.show = false;
      let str = "";
      value.forEach((item) => {
        str += item.name + "/";
      });
      this.city = str.slice(0, -1);
      console.log(value);
    },
    cancelFn() {
      this.show = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.AssetInfo {
  text-align: left;
  font-size: 15px;
  height: 100vh;
  .title {
    font-size: 18px;
    line-height: 36px;
    color: #ff8208;
    font-weight: 900;
    padding: 0 16px;
  }
  .van-form {
    padding: 0 16px;
    // border: 1px solid red;
  }
  ::v-deep .van-field {
    .van-field__control {
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 5px;
    }
    .van-cell__right-icon {
      display: none;
    }
  }
  ::v-deep .van-cell {
    font-size: 15px;
    padding: 0;
    margin-bottom: 10px;
    // border: 0;
  }
  ::v-deep .van-cell::after {
    border-bottom: 0;
  }
  ::v-deep .van-field {
    flex-wrap: wrap;
  }
  ::v-deep .van-field__label {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-right: 0;
    font-weight: 500;
  }
  // ::v-deep .van-field__value {
  // }
  ::v-deep .van-cell--required .van-field__label::after {
    position: relative;
  }
  .accestInfo {
    ::v-deep .van-field__control {
      border: none;
      flex-wrap: wrap;
      font-size: 15px;
    }
    button.actived {
      background-color: #ff8208;
      border: #ff8208;
      color: white;
    }
  }
  .mybtn {
    height: 35px;
  }
  .mybtn0,
  .mybtn1,
  .mybtn2,
  .mybtn3,
  .mybtn4,
  .mybtn5,
  .mybtn6,
  .mybtn7 {
    margin: 6px 20px 6px 0;
    font-size: 15px;
  }
}

.loading {
  position: fixed;
  left: 50%;
  /* right:0; */
  top: 40%;
  margin-left: -135px;
  margin-top: -18px;
  /* bottom:0; */
  /* display: flex; */
  /* align-items:center; */
  /* justify-content:center; */
  z-index: 1000;
}
.loading .van-loading__text {
  font-size: 20px;
}
/* .van-picker__columns{
  height:220px!important;
} */
.van-button--info {
  font-size: 19px !important;
  font-weight: 900 !important;
}
.van-cell {
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
  content: "";
}
.AssetInfo .van-field__label {
  position: relative;
}
.AssetInfo .van-cell--required .van-field__label::after {
  position: absolute;
  right: -2px;
  color: #ee0a24;
  font-size: 14px;
  content: "*";
}
.tips2 {
  background: #2c82e7;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 24px;
  padding: 16px;
  // position: fixed;
  // bottom: 0;

  width: 100%;
  margin: 0;
}

.btn02 {
  display: block;
  height: 2.52rem;
  line-height: 2.52rem;
  background: url("../../assets/images/a09.png");
  background-size: auto 100%;
  /* width: 70%; */
  text-align: center;
  border-radius: 100px;
  -webkit-border-radius: 100px;
  overflow: hidden;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin-top: 10%;
  border: 0;
}
</style>
