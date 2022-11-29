<template>
    <div style="width: 100%;height: 100%;text-align: center;padding-top: 20px;overflow: scroll">

        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">评价语录</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">低</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">较低</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">中</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">较高</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">高</div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">政治风险</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[0][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[0][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[0][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[0][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[0][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">经济风险</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[1][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[1][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[1][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[1][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[1][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">能源价格风险</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[2][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[2][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[2][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[2][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[2][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">信息不对称</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[0][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[0][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[0][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[0][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[0][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">需求风险</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[1][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[1][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[1][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[1][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[1][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">竞争风险</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[2][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[2][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[2][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[2][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r2[2][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">融资困难</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[0][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[0][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[0][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[0][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[0][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">融资成本高</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[1][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[1][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[1][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[1][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[1][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">资金周转困难</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[2][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[2][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[2][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[2][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r3[2][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">技术先进性</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[0][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[0][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[0][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[0][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[0][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">技术可行性</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[1][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[1][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[1][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[1][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[1][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">技术质量</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[2][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[2][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[2][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[2][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r4[2][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">管理风险</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[0][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[0][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[0][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[0][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[0][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">合同风险</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[1][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[1][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[1][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[1][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[1][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">客户风险</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[2][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[2][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[2][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[2][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[2][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">维护风险</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[3][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[3][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[3][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[3][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r5[3][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">能源审计</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[0][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[0][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[0][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[0][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[0][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">节能量测定</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[1][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[1][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[1][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[1][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r1[1][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">预期改造效果</div></el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[2][0]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[2][1]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[2][2]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[2][3]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                    <el-input v-model="R.r6[2][4]" type="number" max="10" min="0" size="mini"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="24" style="padding-top: 20px">
            <el-col :span="12"><div class="grid-content"><el-button @click="s">提交</el-button></div></el-col>
            <el-col :span="12"><div class="grid-content" v-show="ifLevel">风险系数：{{level}}</div></el-col>
        </el-row>
        <el-dialog title="输入项目名称" :visible.sync="dialogFormVisible" width="300px" center>
            <el-input v-model="name" autocomplete="off"></el-input>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="sub">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "Assessment",
        data(){
            return {
                level:'',
                dialogFormVisible : false,
                ifLevel: false,
                name: '',
                R: {
                    r1 :[
                        [0.0,0.3,0.5,0.2,0.0],
                        [0.1,0.4,0.4,0.1,0.0],
                        [0.0,0.1,0.4,0.4,0.1]
                    ],
                    r2 : [
                        [0.2,0.5,0.2,0.1,0.0],
                        [0.2,0.3,0.3,0.2,0.0],
                        [0.2,0.5,0.2,0.1,0.0]
                    ],
                    r3 : [
                        [0.1,0.2,0.4,0.3,0.0],
                        [0.1,0.4,0.3,0.2,0.0],
                        [0.1,0.6,0.2,0.1,0.0]
                    ],
                    r4 : [
                        [0.6,0.3,0.1,0.0,0.0],
                        [0.5,0.4,0.1,0.0,0.0],
                        [0.4,0.5,0.1,0.0,0.0]
                    ],
                    r5 : [
                        [0.3,0.4,0.3,0.0,0.0],
                        [0.3,0.5,0.2,0.0,0.0],
                        [0.2,0.3,0.3,0.2,0.0],
                        [0.3,0.4,0.2,0.1,0.0]
                    ],
                    r6 : [
                        [0.0,0.5,0.4,0.1,0.0],
                        [0.3,0.6,0.1,0.0,0.0],
                        [0.7,0.3,0.0,0.0,0.0]
                    ]
                }
            }
        },
        methods: {
            s(){
                for (const key in this.R) {
                    let arr = this.R[key]
                    for (let i = 0; i < arr.length; i++) {
                        let num = 0
                        for (let j = 0; j < arr[i].length; j++) {
                            num += arr[i][j] * 10
                        }
                        if (num !== 10){
                            this.$message({
                                message: '数据有误',
                                center: true,
                                type: 'error'
                            })
                            return
                        }
                    }
                }
                this.dialogFormVisible =  true
            },
            sub() {
                if(this.name == ''){
                    this.$message({
                        message: '请输入项目名',
                        center: true,
                        type: 'error'
                    })
                    return
                }
                this.ifLevel =false
                this.level = 10
                this.$axios({
                    method: "post",
                    url: "http://127.0.0.1:8888/risk/riskAssessment",
                    data: {
                        name: this.name,
                        r: this.R
                    }
                }).then((res) => {
                    //接口成功返回结果执行
                    this.$message({
                        message: res.data.success ? '风险系数为' + res.data.data : '计算失败',
                        center: true,
                        type: res.data.success ? 'success' : 'error'
                    })
                    if (res.data.success){
                        this.level = res.data.data
                        if (this.level<=1){
                            this.level += ',为低风险'
                        }else if (this.level<=3){
                            this.level += ',为较低风险'
                        }else if (this.level<=5){
                            this.level += ',为风险适中'
                        }else if (this.level<=7){
                            this.level += ',为较高风险'
                        }else {
                            this.level += ',为高风险'
                        }
                        this.ifLevel = true
                        this.dialogFormVisible = false
                        this.name = ''
                    }
                }).catch((err) =>{
                        //请求失败或者接口返回失败或者.then()中的代码发生错误时执行
                        this.$message({
                            message: err,
                            center: true
                        })
                    })
            }
        }
    }
</script>

<style scoped>
    .el-row {
        width: 80%;
        display: inline-block;
        margin-bottom: 5px;
    }
</style>
