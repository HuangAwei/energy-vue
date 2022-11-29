<template>
  <div style="min-width: 1300px;background: #f5f5f5;padding: 20px">
    <el-form :model="getListData" class="demo-form-inline" style="height: 50px;width: 100%;display: flex;line-height: 100px;padding-left: 224px">
      <el-form-item style="width: 200px;margin: 0 10px">
        <el-input v-model="getListData.realName" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item style="width: 200px;margin: 0 10px">
        <el-select clearable v-model="getListData.gender" placeholder="请选择性别" filterable>
          <el-option
              v-for="item in genderType"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="width: 200px;margin: 0 10px">
        <el-cascader
            placeholder="请选择部门"
            :options="deptList"
            :props="{ checkStrictly: true, expandTrigger: 'hover' }"
            @change="change"
            :show-all-levels="false"
            clearable></el-cascader>
      </el-form-item>
      <el-form-item style="margin: 0 30px">
        <el-button type="primary" @click="getList" style="margin-right: 20px">查询</el-button>
        <el-button @click="add">新增</el-button>
      </el-form-item>
    </el-form>

    <div style="width: 100%;text-align: center">

      <el-table
          ref="multipleTable"
          :data="userList"
          border
          max-height="60%"
          tooltip-effect="dark"
          :header-cell-style="{ textAlign: 'center' }"
          :cell-style="{padding: '5px 0', textAlign: 'center'}"
          :row-style="{lineHeight:'30px', textAlign: 'center'}"
          style="width: 70%; line-height: 40px;display: inline-block;min-height: 497px">
        <el-table-column
            prop="realName"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="genderDesc"
            label="性别">
        </el-table-column>
        <el-table-column
            prop="email"
            label="邮箱">
        </el-table-column>
        <el-table-column
            prop="mobile"
            label="电话">
        </el-table-column>
        <el-table-column
            prop="deptName"
            label="部门">
        </el-table-column>
        <el-table-column
            prop="statusDesc"
            label="状态">
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
      <el-form ref="form" :model="userInfo" label-width="80px">
        <el-form-item label="身份证号">
          <el-input v-model="userInfo.idNumber"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="userInfo.realName"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="userInfo.gender" placeholder="请选择性别">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
            <el-option label="保密" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="userInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" v-if="isInsert">
          <el-input v-model="userInfo.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="userInfo.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
        <el-input v-model="userInfo.mobile"></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-cascader
              placeholder="请选择部门"
              :options="deptList"
              :props="{ checkStrictly: true, expandTrigger: 'hover' }"
              @change="saveChange"
              :show-all-levels="false"
              clearable></el-cascader>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="userInfo.status" placeholder="请选择用户状态">
            <el-option label="停用" value="0"></el-option>
            <el-option label="正常" value="1"></el-option>
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
        name: "User",
      data() {
        return {
          genderType: [{
            value: '0',
            label: '男'
          }, {
            value: '1',
            label: '女'
          }, {
            value: '2',
            label: '保密'
          }],
          getListData: {
            current: 1,
            size: 10,
            realName: '',
            gender: '',
            deptId: ''
          },
          userInfo: {
            idNumber: '',
            realName: '',
            gender: '',
            username: '',
            password: '',
            email: '',
            mobile: '',
            deptId: '',
            status: ''
          },
          dialogFormVisible: false,
          pages: null,
          userList: [],
          deptList: [],
          isInsert: false
        }
      },
      methods: {
          saveChange(v) {
            this.userInfo.deptId = v[v.length - 1]
          },
        change(v){
          this.getListData.deptId = v[v.length - 1]
        },
        getList() {
          this.getListData.current = 1
          this.onSubmit()
        },
        del(id) {
          this.$axios.post('http://127.0.0.1:8888/user/remove', [id]).then((response) => {
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
          this.$axios.post('http://127.0.0.1:8888/user/save',this.userInfo).then((response) => {
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
          this.isInsert = true
          this.userInfo =  {
              idNumber: '',
              realName: '',
              gender: '',
              username: '',
              password: '',
              email: '',
              mobile: '',
              deptId: '',
              status: ''
          }
          this.dialogFormVisible = true
        },
        update(row) {
          this.isInsert = false
          this.userInfo =  {
              id: row.id,
              idNumber: row.id_number,
              realName: row.real_name,
              gender: row.gender + '',
              username: row.username,
              email: row.email,
              mobile: row.mobile,
              deptId: row.dept_id + '',
              status: row.status + ''
          }
          this.dialogFormVisible = true
        },
        currentChange(currentPage) {
          this.getListData.current = currentPage
          this.onSubmit()
        },
        onSubmit() {
          this.$axios.get('http://127.0.0.1:8888/user/page', {params:this.getListData}).then((response) => {
            this.userList = response.data.data.records
            this.pages = response.data.data.pages
          }).catch((err) => {
            console.log(err);
          })
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
        getDeptList() {
          this.$axios.get('http://127.0.0.1:8888/dept/list', ).then((response) => {
            this.deptList = response.data.data
            this.dataFormat(this.deptList)
          }).catch((err) => {
            console.log(err);
          })
        }
      },
      created() {
        this.getDeptList()
        this.onSubmit()
      }
    }
</script>

<style scoped>

</style>
