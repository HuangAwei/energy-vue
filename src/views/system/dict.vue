<template>
  <div style="min-width: 1300px;background: #f5f5f5;padding: 20px">
    <el-button @click="add" style="margin-left: 210px;margin-bottom: 5px">新增</el-button>
    <div style="width: 100%;text-align: center">
      <el-table
          ref="multipleTable"
          :data="dictTypeList"
          border
          max-height="60%"
          tooltip-effect="dark"
          :header-cell-style="{ textAlign: 'center' }"
          :cell-style="{padding: '5px 0', textAlign: 'center'}"
          :row-style="{lineHeight:'30px', textAlign: 'center'}"
          style="width: 70%; line-height: 40px;display: inline-block;min-height: 497px">
        <el-table-column
            prop="dictName"
            label="字典名称">
        </el-table-column>
        <el-table-column
            prop="dictType"
            label="字典类型">
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
    </div>
    <el-dialog :visible.sync="dialogFormVisible" center width="500px">
      <el-form :model="dictTypeInfo" >
        <el-form-item label="字典类型" label-width="120px">
          <el-input v-model="dictTypeInfo.dictType" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>、
        <el-form-item label="字典名称" label-width="120px">
          <el-input v-model="dictTypeInfo.dictName" autocomplete="off" style="width: 300px"></el-input>
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
        name: "Dict",
      data() {
        return {
          dialogFormVisible: false,
          dictTypeList: [],
          dictTypeInfo: {
            dictType : '',
            dictName : ''
          }
        }
      },
      methods: {
        del(id) {
          this.$axios.post('http://127.0.0.1:8888/dict/removeType', [id]).then((response) => {
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
          this.$axios.post('http://127.0.0.1:8888/dict/saveType',this.dictTypeInfo).then((response) => {
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
          this.dictTypeInfo = {
            dictType : '',
            dictName : ''
          }
          this.dialogFormVisible = true
        },
        update(row) {
          this.dictTypeInfo = {
            id : row.id,
            dictType: row.dictType,
            dictName: row.dictName
          }
          this.dialogFormVisible = true
        },
        onSubmit() {
          this.$axios.get('http://127.0.0.1:8888/dict/typeList').then((response) => {
            this.dictTypeList = response.data.data
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
