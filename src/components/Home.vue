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
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- 折叠按钮 -->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- <sidebar>侧边栏组件</sidebar> -->
        <el-menu
          background-color="#323744"
          text-color="#fff"
          active-text-color="#4895e8"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menulist"
            :key="item.id"
          >
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <!-- <i class="iconfont icon-tijikongjian"></i> -->
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <!-- ---------------------------- -->
      </el-aside>
      <!-- 右侧主体 -->
      <el-main>
        <!-- welcome路由占位符 -->
        <router-view></router-view>
        <!-- welcome路由占位符end -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menulist: [],
      // 为循环菜单添加对应图标
      iconsObj: {
        125: "iconfont icon-ziyuan",
        103: "iconfont icon-tijikongjian",
        101: "iconfont icon-shangpingouwudai2",
        102: "iconfont icon-danju",
        145: "iconfont icon-danju",
      },
      isCollapse: false,
    };
  },
  created() {
    this.getMenuList();
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
    // 侧边栏点击按钮，切换
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
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
  .el-menu {
    border-right: 0;
  }
}
.el-main {
  background-color: #eaedf2;
}
.iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>