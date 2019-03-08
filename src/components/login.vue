<template>
  <div id="login">
    <mu-appbar style="width: 100%; text-align:center;" color="primary" title="南京邮电大学体育部"></mu-appbar>
    <div class="logo">
      <img src="../assets/logo.png" width="150" height="150">
    </div>
    <div class="login-form">
      <mu-container>
        <mu-form ref="form" :model="validateForm" class="mu-form">
          <mu-form-item label="学号" help-text="首字母大写" label-float prop="username" :rules="usernameRules">
            <mu-text-field v-model="validateForm.username"  prop="username"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="密码"  label-float prop="password" :rules="passwordRules">
              <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
          </mu-form-item>
          <mu-form-item>
            <mu-button color="primary" @click="submit">登陆</mu-button>
            <mu-button @click="clear">重置</mu-button>
          </mu-form-item>
        </mu-form>
      </mu-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 3, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10"
        }
      ],
      argeeRules: [{ validate: val => !!val, message: "必须同意用户协议" }],
      validateForm: {
        username: "",
        password: "",
        isAgree: false
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        console.log("form valid: ", result);
        this.$toast.success("登陆成功！");
        this.$router.push("/index");
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        isAgree: false
      };
    }
  }
};
</script>
<style>
#app {
  height: 100%;
}
#login {
  height: 100%;
  background: url("../assets/bg.png") center 56px no-repeat;
}
.mu-form {
  width: 100%;
  /*max-width: 460px;*/
}
.login-form {
  margin-top: 0.5rem;
  width: 100%;
  padding-right: 3rem;
  padding-left: 3rem;
}
.logo {
  margin-top: 3rem;
  text-align: center;
}
</style>