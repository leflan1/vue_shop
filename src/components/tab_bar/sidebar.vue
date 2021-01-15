<template>
  <el-menu
    background-color="#323744"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 一级菜单 -->
    <el-submenu index="1" v-for="item in menulist" :key="item.id">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <!-- 二级菜单 -->
      <el-menu-item index="1-1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import tab from "./tab.vue";
export default {};
</script>

<style lang="less" scoped>
</style>