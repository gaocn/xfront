<template>
  <div class="login">
    <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="80px">
      <el-form-item label="登陆方式" prop="loginType">
        <el-select style="width: 260px" v-model="loginForm.loginType">
          <el-option label="密码登陆" value="1"></el-option>
          <el-option label="短信验证码登陆" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="captcha" style="height: 32px">
        <el-row :gutter="2">
          <el-col :span="16">
            <el-input v-model="loginForm.captcha"></el-input>
          </el-col>
          <el-col :span="8">
            <el-image style="height: 32px" src="static/captcha.jfif"></el-image>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100px" type="primary" @click="login">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { ElForm } from 'element-plus';
const loginFormRef = ref<InstanceType<typeof ElForm>>();

const rules = reactive({
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
  captcha: [{ required: true, message: '验证码不能为空', trigger: 'blur' }]
});

const loginForm = reactive({
  loginType: '1',
  username: undefined,
  password: undefined,
  captcha: undefined
});

const login = () => {
  console.log(loginFormRef.value);
  if (!loginFormRef.value) {
    return;
  }
  loginFormRef.value.validate((valid: any) => {
    console.log('loging:', valid, loginForm);
    if (!valid) {
      return;
    }
  });
};
</script>

<style lang="less">
body {
  /* 无法选中，整体感更强 */
  user-select: none;
  background: url(../assets/images/login-bg.jpg) no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.login {
  position: absolute;
  top: 30%;
  left: 40%;
  background-color: whitesmoke;
  width: 400px;
  height: 280px;
  border-radius: 25px;
  text-align: center;
  padding: 20px 30px;
  /* 已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度 */
  box-sizing: border-box;
}
</style>
