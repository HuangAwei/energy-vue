<template>
    <div style="width: 100%;height: 100%;text-align: center;overflow: scroll">
        <el-form ref="form" :model="energyConsumptionVo" label-width="130px">
            <el-form-item label="机构名称">
                <el-select v-model="value" placeholder="请选择" filterable @change="change">
                    <el-option
                            v-for="item in institutionList"
                            :key="item.key"
                            :label="item.name"
                            :value="item.key">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="统计日期">
                <el-date-picker
                        v-model="energyConsumptionVo.date"
                        type="year"
                        value-format="yyyy"
                        placeholder="选择日期（年）">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="面积">
                <el-input v-model="energyConsumptionVo.m" type="number"></el-input>
            </el-form-item>
            <el-form-item label="电力消耗">
                <el-input v-model="energyConsumptionVo.ed" type="number"></el-input>
            </el-form-item>
            <el-form-item label="人数">
                <el-input v-model="energyConsumptionVo.n" type="number"></el-input>
            </el-form-item>
            <el-form-item label="年使用时间" v-if="this.show">
                <el-input v-model="energyConsumptionVo.t" type="number"></el-input>
            </el-form-item>
            <el-form-item label="人均住院部面积" v-if="!this.show">
                <el-input v-model="energyConsumptionVo.q" type="number"></el-input>
            </el-form-item>
            <el-form-item v-for="(item ,i) in energyConsumptionVo.energyList" :label="item.name" :key="i">
                <el-input v-model="energyConsumptionVo.energyList[i].value" type="number"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" style="margin-right: 10px">提交</el-button>
                <el-button @click="reset" style="margin-left: 10px">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Consumption",
        data() {
            return {
                show: true,
                institutionList: [],
                energyConsumptionVo: {
                    institutionId: '',
                    m: '106000',
                    ed: '3684592',
                    n: '2000',
                    t: '4600',
                    q: '',
                    date: '',
                    energyList: []
                },
                value: '',
                type: '',
                result: {}
            }
        },
        methods: {
            change(v) {
                this.type = this.institutionList[v].type
                this.energyConsumptionVo.institutionId = this.institutionList[v].id
                if (this.type == 11 || this.type == 12 || this.type == 13) {
                    this.$delete(this.energyConsumptionVo, 't')
                    this.energyConsumptionVo.q = 0
                    this.show = false
                } else {
                    this.$delete(this.energyConsumptionVo, 'q')
                    this.energyConsumptionVo.t = 0
                    this.show = true
                }
            },
            reset() {
                this.energyConsumptionVo.institutionId = ''
                this.energyConsumptionVo.m = ''
                this.energyConsumptionVo.ed = ''
                this.energyConsumptionVo.n = ''
                this.energyConsumptionVo.t = ''
                this.energyConsumptionVo.q = ''
                this.energyConsumptionVo.date = ''
                this.energyConsumptionVo.energyList.forEach(item => {
                    item.e = 0
                })
            },
            getEnergyList() {
                this.$axios.get("http://192.168.10.194:8888/energyType/getAll")
                    .then((res) => {
                        res.data.data.forEach((item) => {
                            this.energyConsumptionVo.energyList.push({energyId: item.id, value: 0, name: item.name})
                        })
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            getInstitutionList() {
                this.$axios.get("http://192.168.10.194:8888/institutions/getAll")
                    .then((res) => {
                        let key = 0
                        this.institutionList = [...res.data.data]
                        this.institutionList.forEach(item => {
                            this.$set(item, 'key', key++)
                        })
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            onSubmit() {
                let keys = Object.keys(this.energyConsumptionVo)
                for (let i = 0; i < keys.length; i++) {
                    if (this.energyConsumptionVo[keys[i]] === '') {
                        this.$message({
                            message: '数据不完整',
                            center: true,
                            type: 'warning'
                        })
                        return
                    }
                }
                this.$axios({
                    method: "post",
                    url: "http://192.168.10.194:8888/energyConsumption/getEnergyConsumption",
                    data: this.energyConsumptionVo
                }).then((res) => {
                    let result = res.data.success
                    let message = ''
                    if (result) {
                        message = "计算成功:E:" + res.data.data.E + 'Emz:' + res.data.data.Emz + "Emd:" + res.data.data.Emd + "Erz:" + res.data.data.Erz
                    } else {
                        message = '计算失败:' + res.data.message
                    }
                    //接口成功返回结果执行
                    this.$message({
                        message: message,
                        center: true,
                        type: result ? 'success' : 'error'
                    });
                    if (res.data.success) {
                        this.result = res.data.data
                    }
                }).catch((err) => {
                    this.$message({
                        message: err,
                        center: true
                    });
                })
            }
        },
        created() {
            this.getEnergyList()
            this.getInstitutionList()

        }
    }
</script>

<style scoped>
    .el-form {
        width: 500px;
        display: inline-block;
        margin-top: 40px;
    }

    .el-form-item {
        width: 400px;
    }

    .el-input {
        width: 220px;
    }
</style>
