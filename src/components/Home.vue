<template>
  <el-container class="home-sontainer">
    <!-- hender -->
    <el-header>
      <div>
        <img src="../assets/img/heima.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <sidebar><!-- 侧边栏组件 --></sidebar>
      </el-aside>
      <!-- 右侧主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import sidebar from "./tab_bar/sidebar.vue";

export default {
  data() {
    return {
      menulist: [],
    };
  },
  created() {
    this.getMenuList();
  },
  components: {
    sidebar,
  },
  methods: {
    logout() {
      //   清空
      window.sessionStorage.clear();
      //   重定向到登录页面
      this.$router.push("/login");
    },
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menulist = res.data;
      console.log(res);
    },
  },
};
</script>



<style lang="less" scoped>
.home-sontainer {
  height: 100%;
}
.el-header {
  padding-left: 0;
  //   设置按钮不上下贴边
  align-items: center;
  background-color: #373d41;
  //   弹性布局
  display: flex;
  //   左右贴边
  justify-content: space-between;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    > span {
      margin: 0 15px;
    }
  }
}
.el-aside {
  background-color: #323744;
}
.el-main {
  background-color: #eaedf2;
}
</style>