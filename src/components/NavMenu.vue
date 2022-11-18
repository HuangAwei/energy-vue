<template>
    <el-row class="tac">
        <el-col :span="12">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical"
                    @open="handleOpen"
                    @close="handleClose"
                    :router="true">
                <el-submenu index="/risk">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>风险评价</span>
                    </template>
                    <el-menu-item index="/risk/assessment">风险系数计算</el-menu-item>
                    <el-menu-item index="/risk/history">历史记录</el-menu-item>
                </el-submenu>
                <el-submenu index="/energyConsumption">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>能耗计算</span>
                    </template>
                    <el-menu-item index="/energyConsumption/consumption">能耗定额计算</el-menu-item>
                    <el-menu-item index="/energyConsumption/institution">机构管理</el-menu-item>
                    <el-menu-item index="/energyConsumption/energy">能源类型管理</el-menu-item>
                    <el-menu-item index="/energyConsumption/history">历史记录</el-menu-item>
                </el-submenu>
                <el-submenu index="/system">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>系统管理</span>
                    </template>
                    <el-menu-item index="/system/user">用户管理</el-menu-item>
                    <el-menu-item index="/system/dept">部门管理</el-menu-item>
                    <el-menu-item index="/system/dict">字典项管理</el-menu-item>
                    <el-menu-item index="/system/dictData">字典值管理</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "NavMenu",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .tac {
        background-color: #ffffff;
        width: 100%;
        height: 100%;
    }
    .el-col,.el-menu {
        width: 100%;
        border-right: 0;
    }
</style>
