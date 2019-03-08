<template>
  <div>
    <div id="top-bar">
      <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left" @click="$router.back(-1)">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>欢迎
        <mu-menu slot="right">
          <mu-button flat>MENU</mu-button>
          <mu-list slot="content">
            <mu-list-item button>
              <mu-list-item-content>
                <mu-list-item-title>个人信息</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-content>
                <mu-list-item-title>登出</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
          </mu-list>
        </mu-menu>
      </mu-appbar>
    </div>
    <router-view/>
    <mu-container id="buttom-nav">
      <mu-bottom-nav>
        <mu-bottom-nav-item title="查询" icon="restore" href="#/index/search/"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="新闻" icon="favorite" href="#/index/news/"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="反馈" icon="location_on" href="#/index/callback/"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      docked: false,
      open: false,
      position: "left"
    };
  }
};
</script>
<style>
#buttom-nav {
  position: absolute;
  bottom: 0;
  padding: 0;
}
</style>

