<template>
    <div style="min-width: 1500px;background: #f5f5f5;padding: 20px">
        <el-form :model="getListData" class="demo-form-inline" style="height: 50px;width: 100%;display: flex;line-height: 100px;padding-left: 224px">
            <el-form-item style="width: 200px;margin: 0 30px">
                <el-input v-model="getListData.name" placeholder="名称"></el-input>
            </el-form-item>
            <el-form-item style="width: 200px;margin: 0 30px">
                <el-date-picker
                        v-model="getListData.date"
                        type="year"
                        value-format="yyyy"
                        placeholder="选择日期（年）">
                </el-date-picker>
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
                        label="机构名称">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="统计时间(年)">
                </el-table-column>
                <el-table-column
                        prop="e"
                        label="综合能耗(kgce/a)">
                </el-table-column>
                <el-table-column
                        prop="emz"
                        label="单位建筑面积综合能耗(kgce/m2·a)">
                </el-table-column>
                <el-table-column
                        prop="emd"
                        label="单位建筑面积电耗(kW·h/m2·a)">
                </el-table-column>
                <el-table-column
                        prop="erz"
                        label="人均综合能耗(kgce/per·a)">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="info(scope.row)" type="text" size="small">详情</el-button>
                        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
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
        <el-dialog :visible.sync="dialogFormVisible" center width="1000px">
            <el-descriptions class="margin-top" title="能耗详情" :column="3" border>
                <el-descriptions-item>
                    <template slot="label">
                        机构名称
                    </template>
                    {{infoData.row.name}}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        统计年份
                    </template>
                    {{infoData.row.date}}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        综合能耗
                    </template>
                    {{infoData.row.e}}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        单位建筑面积综合能耗
                    </template>
                    {{infoData.row.emz}}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        单位建筑面积电耗
                    </template>
                    {{infoData.row.emd}}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        人均综合能耗
                    </template>
                    {{infoData.row.erz}}
                </el-descriptions-item>
                <el-descriptions-item v-for="item in infoData.list" :key="item.name">
                    <template slot="label">
                        {{item.name}}用量
                    </template>
                    {{item.value}}
                </el-descriptions-item>
            </el-descriptions>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "History",
        data() {
            return {
                getListData: {
                    current: 1,
                    size: 10,
                    name: '',
                    date: ''
                },
                infoData: {
                    list: [],
                    row: {}
                },
                historyList: [],
                dialogFormVisible: false,
                pages: null
            }
        },
        methods: {
            getList() {
                this.getListData.current = 1
                this.onSubmit()
            },
            del(row) {
                this.$axios.get('http://127.0.0.1:8888/energyConsumption/remove/'+ row.institution_id + "/" + row.date, ).then((response) => {
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
            info(row) {
                this.$axios.get('http://127.0.0.1:8888/energyConsumption/getEnergyByInstitutionId/'+ row.institution_id + "/" + row.date, ).then((response) => {
                    this.infoData.list = response.data.data
                }).catch((err) => {
                    console.log(err);
                })
                this.infoData.row = row
                this.dialogFormVisible = true
            },
            currentChange(currentPage) {
                this.getListData.current = currentPage
                this.onSubmit()
            },
            onSubmit() {
                this.$axios.get('http://127.0.0.1:8888/energyConsumption/page', {params:this.getListData}).then((response) => {
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
