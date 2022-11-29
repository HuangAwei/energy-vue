<template>
  <div style="min-width: 1300px;background: #f5f5f5;padding: 20px">
      <el-button @click="add" style="margin-left: 200px;margin-bottom: 20px">新增</el-button>
    <div style="width: 100%;text-align: center">

      <el-table
          ref="multipleTable"
          :data="deptList"
          border
          max-height="60%"
          tooltip-effect="dark"
          :header-cell-style="{ textAlign: 'center' }"
          row-key="id"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
          :cell-style="{padding: '5px 0', textAlign: 'center'}"
          :row-style="{lineHeight:'30px', textAlign: 'center'}"
          style="width: 70%; line-height: 40px;display: inline-block;min-height: 497px">
        <el-table-column
            prop="name"
            label="名称">
        </el-table-column>
        <el-table-column
            prop="createDate"
            label="创建时间">
        </el-table-column>
        <el-table-column
            prop="updateDate"
            label="更新时间">
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
      <el-form :model="deptInfo" >
        <el-form-item label="部门名称" label-width="120px">
          <el-input v-model="deptInfo.name" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="上级部门" label-width="120px">
          <el-cascader
              :options="deptList"
              :props="{ checkStrictly: true, expandTrigger: 'hover' }"
              @change="change"
              :disabled="isUpdate"
              :show-all-levels="false"
              clearable></el-cascader>
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
        name: "Dept",
      data() {
        return {
          dialogFormVisible: false,
          deptList: [],
          deptInfo: {
            name : '',
            pid : ''
          },
          isUpdate: false
        }
      },
      methods: {
          change(v){
            this.deptInfo.pid = v[v.length - 1]
          },
        del(id) {
          this.$axios.post('http://127.0.0.1:8888/dept/remove', [id]).then((response) => {
            let result = response.data.success
            this.$message({
              message: result? '删除成功' : '删除失败',
              center: true,
              type: result ? 'success' : 'error'
            })
            this.getList()
          }).catch((err) => {
            console.log(err);
          })
        },
        save() {
          this.$axios.post('http://127.0.0.1:8888/dept/save',this.deptInfo).then((response) => {
            let result = response.data.success
            this.$message({
              message: result? '保存成功' : '保存失败:' + response.data.message,
              center: true,
              type: result ? 'success' : 'error'
            });
            if (result){
              this.dialogFormVisible = false
              this.getList()
            }
          }).catch((err) => {
            console.log(err);
          })
        },
        add() {
            this.isUpdate = false
          this.deptInfo = {
            name : '',
            pid : 0
          }
          this.dialogFormVisible = true
        },
        update(row) {
            this.isUpdate = true
          this.deptInfo = {
            id : row.id,
            name : row.name,
            pid : row.pid
          }
          this.dialogFormVisible = true
        },
        dataFormat(arr){
            arr.forEach(item => {
              if (item.children.length > 0){
                this.dataFormat(item.children)
              } else {
                this.$delete(item,'children')
              }
            })
        },
        getList() {
          this.$axios.get('http://127.0.0.1:8888/dept/list', ).then((response) => {
            this.deptList = response.data.data
            this.dataFormat(this.deptList)
          }).catch((err) => {
            console.log(err);
          })
        }
      },
      created() {
        this.getList()
      }
    }
</script>

<style scoped>

</style>
