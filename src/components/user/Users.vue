<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card>
      <el-row :gutter="20">
        <!-- 搜索 -->
        <el-col :span="7">
          <el-input placeholder="请输入内容" v-model="quertInfo.query">
            <el-button slot="append" icon="el-icon-search"> </el-button>
          </el-input>
        </el-col>
        <!-- 添加按钮 -->
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quertInfo: {
        // 请求参数
        query: "",
        pagenum: 1,
        pagesize: 2,
      },
    };
  },
  //   生命周期函数
  created() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      const { data: res } = await this.$http.get("users", {
        params: this.quertInfo,
      });
      console.log(res);
    },
  },
};
</script>

<style lang="less" scoped>
</style>