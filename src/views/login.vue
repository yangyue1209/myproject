<template>
    <div class="login-item">
        <div class="login-form">
            <h2>用户登录</h2>
            <el-form label-width="80px">
                <el-form-item>
                    <p>用户名</p>
                    <el-input v-model.trim="formData.username"></el-input>
                </el-form-item>
                <el-form-item>
                    <p>密码</p>
                    <el-input type="password" v-model.trim="formData.password"></el-input>
                </el-form-item>
            </el-form>
            <el-button class="btn" type="primary" @click="userlogin">登录</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                token: '',
                // name:'',
                // password:'',
                formData: {
                    username: '',

                    password: ''
                }
            }
        },
        created() {

        },
        methods: {
            userlogin() {
                if (this.formData.username === '' || this.formData.password == '') {
                    this.$message.error('请输入用户名和密码');
                    return;
                };
                if (this.formData.password.length < 6 || this.formData.password.length >11) {
                    this.$message.error('密码长度在6-11位之间,请重新输入');
                    return;
                }
                // console.log(this.login)
                this.$http.post('http://localhost:8888/api/private/v1/login',
                    { username: this.formData.username, password: this.formData.password }).then(res => {
                        if (res.body.meta.status !== 200) {
                            this.$message.error(res.body.meta.msg);
                            return;
                        }
                        this.$message({
                            message: res.body.meta.msg,
                            type: 'success'
                        });
                        console.log(res)
                        this.token=res.body.data.token;
                        this.$router.push('/home')
                    })
            }
        },


    }
</script>
<style scoped lang="less">
    .login-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: #324152;
        .btn {
            justify-content: center;
            position: absolute;
            left: 50%;
            /* bottom: 40px; */
            transform: translateX(-50%);

        }
    }

    .login-form {
        width: 600px;
        height: 400px;
        border-radius: 5px;
        padding-top: 40px;
        box-sizing: border-box;
        background-color: #fff;
        h2 {
            padding-bottom: 20px;
            padding-left: 70px;
        }
        .el-input__inner {
            width: 80%;
        }

    }
</style>