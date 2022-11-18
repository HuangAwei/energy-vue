<template>
    <div class="login-container">
        <el-form ref="loginForm"
                 :model="loginForm"
                 :rules="loginRules"
                 class="login-form"
                 auto-complete="on"
                 label-position="left">
            <h1 style="margin-bottom: 30px;margin-top: 10px">账号登录</h1>
            <el-form-item prop="userName">
                <el-input
                        ref="userName"
                        v-model="loginForm.userName"
                        placeholder="邮箱"
                        name="userName"
                        type="text"
                        tabindex="1"
                        auto-complete="on"
                />
            </el-form-item>

            <el-form-item prop="password">
                <el-input
                        :key="passwordType"
                        ref="password"
                        v-model="loginForm.password"
                        :type="passwordType"
                        placeholder="密码"
                        name="password"
                        tabindex="2"
                        auto-complete="on"
                        @keyup.enter.native="login"
                />
            </el-form-item>

            <el-button :loading="loading" type="primary" @click="login">登录</el-button>
        </el-form>
    </div>
</template>

<script>

    export default {
        name: 'Login',
        data() {
            return {
                loginForm: {
                    userName: '',
                    password: ''
                },
                loginRules: {
                    userName: [{type: 'email', required: true, trigger: 'blur', message: '请输入邮箱'}],
                    password: [{
                        required: true,
                        message: '输入密码',
                        trigger: 'blur'
                    }, {pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/, message: '密码必须同时包含数字与字母,且长度为 8-20位'}]
                },
                loading: false,
                passwordType: 'password'
            }
        },
        methods: {
            login(){
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true
                        // this.$store.dispatch('login', this.loginForm).then(() => {
                        //     this.$router.push({ path: this.redirect || '/' })
                        //     this.loading = false
                        // }).catch(() => {
                        //     this.loading = false
                        // })
                        // this.$router.push({ path: this.redirect || '/' })
                        this.$router.replace("/risk/history");
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            }
        }
    }
</script>

<style scoped>

    .login-container {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        text-align: center;
        background: url('../../assets/images/login.png') no-repeat;
        background-size: 100% 100%;
    }

    .el-form {
        text-align: center;
        display: inline-block;
        height: 30vh;
        width: 28vw;
        border-radius: 10px;
        margin-top: 20vh;
        background-color: #ffffff;
        box-shadow: 1px 1px 20px rgba(0, 0, 0, .3);
    }

    .el-form-item {
        display: inline-block;
        height: 47px;
        width: 25vw;
    }

    input:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #ffffff inset !important;
        -webkit-text-fill-color:#000000 !important;
    }


</style>
