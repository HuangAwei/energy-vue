<template>
    <div style="min-width: 1300px;background: #f5f5f5;padding: 20px">
        <el-form :model="getListData" class="demo-form-inline" style="height: 50px;width: 100%;display: flex;line-height: 100px;padding-left: 224px">
            <el-form-item style="width: 200px;margin: 0 30px">
                <el-input v-model="getListData.name" placeholder="名称"></el-input>
            </el-form-item>
            <el-form-item style="margin: 0 30px">
                <el-button type="primary" @click="getList" style="margin-right: 20px">查询</el-button>
            </el-form-item>
        </el-form>

        <div style="width: 100%;text-align: center">
            <el-table
                    ref="multipleTable"
                    :data="historyList"
                    border
                    max-height="60%"
                    tooltip-effect="dark"
                    :header-cell-style="{ textAlign: 'center' }"
                    :cell-style="{padding: '5px 0', textAlign: 'center'}"
                    :row-style="{lineHeight:'30px', textAlign: 'center'}"
                    style="width: 70%; line-height: 40px;display: inline-block;min-height: 497px">
                <el-table-column
                        prop="name"
                        label="项目名">
                </el-table-column>
                <el-table-column
                        prop="coefficient"
                        label="风险系数">
                </el-table-column>
                <el-table-column
                        prop="createDate"
                        label="创建时间">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="info(scope.row)" type="text" size="small">详情</el-button>
                        <el-button @click="del(scope.row.id)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="currentChange"
                    :current-page="getListData.current"
                    :page-count="pages"
                    style="margin-top: 10px">
            </el-pagination>
        </div>
        <el-dialog :visible.sync="dialogFormVisible"  center width="939px">
            <el-table :data="R"
                      :cell-style="rowStyle"
                      :border="true"
                      height="600px"
                      :stripe="true">
                <el-table-column align="center" property="[0]" label="评价语录" width="162"></el-table-column>
                <el-table-column align="center" property="[1]" label="低" width="145"></el-table-column>
                <el-table-column align="center" property="[2]" label="较低" width="145"></el-table-column>
                <el-table-column align="center" property="[3]" label="中" width="145"></el-table-column>
                <el-table-column align="center" property="[4]" label="较高" width="145"></el-table-column>
                <el-table-column align="center" property="[5]" label="高" width="145"></el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "RiskHistory",
        data() {
            return {
                originTitle: ['政治风险','经济风险','能源价格风险','信息不对称','需求风险','竞争风险','融资困难','融资成本高',
                    '资金周转困难','技术先进性','技术可行性','技术质量','管理风险','合同风险','客户风险','维护风险','能源审计','节能量测定','预期改造效果'],
                getListData: {
                    current: 1,
                    size: 10,
                    name: ''
                },
                dialogFormVisible: false,
                historyList: [],
                R: [],
                pages: null
            }
        },
        methods: {
            info(row){
                this.R = [
                    ...row.rr.r1,
                    ...row.rr.r2,
                    ...row.rr.r3,
                    ...row.rr.r4,
                    ...row.rr.r5,
                    ...row.rr.r6
                ]
                this.R.forEach((item,index) => {
                    item.unshift(this.originTitle[index])
                })
                this.dialogFormVisible = true
            },
            getList() {
                this.getListData.current = 1
                this.onSubmit()
            },
            rowStyle() {
                return "text-align:center";
            },
            del(id) {
                this.$axios.post('http://127.0.0.1:8888/risk/remove', [id]).then((response) => {
                    let result = response.data.success
                    this.$message({
                        message: result? '删除成功' : '删除失败',
                        center: true,
                        type: result ? 'success' : 'error'
                    })
                    this.onSubmit()
                }).catch((err) => {
                    console.log(err);
                })
            },
            currentChange(currentPage) {
                this.getListData.current = currentPage
                this.onSubmit()
            },
            onSubmit() {
                this.$axios.get('http://127.0.0.1:8888/risk/page', {params:this.getListData}).then((response) => {
                    this.historyList = response.data.data.records
                    this.pages = response.data.data.pages
                }).catch((err) => {
                    console.log(err);
                })
            }
        },
        created() {
            this.onSubmit()
        }
    }
</script>

<style scoped>

</style>
