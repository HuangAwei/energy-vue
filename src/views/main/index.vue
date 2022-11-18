<template>
    <div id="home">
        <el-container style="height: 100%;">
            <el-aside width="auto" style="width:10%;min-width:160px;background-color: #889aa4;overflow: hidden">
                <NavMenu></NavMenu>
            </el-aside>
            <el-container style="height: 100%">
                <el-header style="background-color: #889aa4;text-align: center;height: 60px;line-height: 60px">
                    <h1>天之和</h1>
                </el-header>
                <el-main style="padding: 0;background: #f5f5f5;overflow: hidden">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import NavMenu from "@/components/NavMenu";
    export default {
        name: "Main",
        components: {NavMenu}
    }
</script>

<style scoped>
    #home {
        width: 100%;
        height: 100%;
    }
</style>
