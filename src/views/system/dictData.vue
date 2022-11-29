<template>
  <div style="min-width: 1300px;background: #f5f5f5;padding: 20px">
    <el-form :model="getListData" class="demo-form-inline" style="height: 50px;width: 100%;display: flex;line-height: 100px;padding-left: 224px">
      <el-form-item style="width: 200px;margin: 0 30px">
        <el-select clearable v-model="getListData.dictType" placeholder="请选择字典类型" filterable>
          <el-option
              v-for="item in typeList"
              :key="item.dictType"
              :label="item.dictName"
              :value="item.dictType">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="margin: 0 30px">
        <el-button type="primary" @click="getList" style="margin-right: 20px">查询</el-button>
        <el-button @click="add">新增</el-button>
      </el-form-item>
    </el-form>

    <div style="width: 100%;text-align: center">

      <el-table
          ref="multipleTable"
          :data="dictDataList"
          border
          max-height="60%"
          tooltip-effect="dark"
          :header-cell-style="{ textAlign: 'center' }"
          :cell-style="{padding: '5px 0', textAlign: 'center'}"
          :row-style="{lineHeight:'30px', textAlign: 'center'}"
          style="width: 70%; line-height: 40px;display: inline-block;min-height: 497px">
        <el-table-column
            prop="dictType"
            label="字典类型">
        </el-table-column>
        <el-table-column
            prop="dictLabel"
            label="字典标签">
        </el-table-column>
        <el-table-column
            prop="dictValue"
            label="字典值">
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
            <el-button @click="update(scope.row)" type="text" size="small">编辑</el-button>
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
    <el-dialog :visible.sync="dialogFormVisible" center width="500px">
      <el-form :model="dictDataInfo" >
        <el-form-item label="字典标签" label-width="120px">
          <el-input v-model="dictDataInfo.dictLabel" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="字典值" label-width="120px">
          <el-input v-model="dictDataInfo.dictValue" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="字典类型" label-width="120px">
          <el-select clearable v-model="dictDataInfo.dictType" placeholder="请选择字典类型" filterable>
            <el-option
                v-for="item in typeList"
                :key="item.dictType"
                :label="item.dictName"
                :value="item.dictType">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "DictData",
      data() {
        return {
          getListData: {
            current: 1,
            size: 10,
            dictType: ''
          },
          dialogFormVisible: false,
          dictDataList: [],
          dictDataInfo: {
            dictType : '',
            dictLabel : '',
            dictValue : ''
          },
          typeList:[],
          pages: null
        }
      },
      methods: {
        getList() {
          this.getListData.current = 1
          this.onSubmit()
        },
        del(id) {
          this.$axios.post('http://127.0.0.1:8888/dict/removeData', [id]).then((response) => {
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
        save() {
          this.$axios.post('http://127.0.0.1:8888/dict/saveData',this.dictDataInfo).then((response) => {
            let result = response.data.success
            this.$message({
              message: result? '保存成功' : '保存失败:' + response.data.message,
              center: true,
              type: result ? 'success' : 'error'
            });
            if (result){
              this.dialogFormVisible = false
              this.onSubmit()
            }
          }).catch((err) => {
            console.log(err);
          })
        },
        add() {
          this.dictDataInfo = {
            dictType : '',
            dictLabel : '',
            dictValue : ''
          }
          this.dialogFormVisible = true
        },
        update(row) {
          this.dictDataInfo = {
            id : row.id,
            dictType: row.dictType,
            dictLabel: row.dictLabel,
            dictValue: row.dictValue
          }
          this.dialogFormVisible = true
        },
        getTypeList() {
          this.$axios.get('http://127.0.0.1:8888/dict/typeList').then((response) => {
            this.typeList = response.data.data
          }).catch((err) => {
            console.log(err);
          })
        },
        currentChange(currentPage) {
          this.getListData.current = currentPage
          this.onSubmit()
        },
        onSubmit() {
          this.$axios.get('http://127.0.0.1:8888/dict/dataPage', {params:this.getListData}).then((response) => {
            this.dictDataList = response.data.data.records
            this.pages = response.data.data.pages
          }).catch((err) => {
            console.log(err);
          })
        }
      },
      created() {
        this.getTypeList()
        this.onSubmit()
      }
    }
</script>

<style scoped>

</style>
