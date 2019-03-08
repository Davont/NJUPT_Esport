<template>
  <mu-container v-bind:style="maxHeight">
    <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
      <mu-card-header :title="chosenData.username" :sub-title="chosenData.releaseTime">
        <mu-avatar slot="avatar">
          <img src="../assets/logo.png">
        </mu-avatar>
      </mu-card-header>
      <mu-card-media title>
        <img :src="imgUrl" width="500" height="300">
      </mu-card-media>
      <mu-card-title :title="chosenData.title"></mu-card-title>
      <mu-card-text>{{chosenData.content}}</mu-card-text>
    </mu-card>
  </mu-container>
</template>
<script>
export default {
  data() {
    var Height = window.innerHeight - 112;
    console.log(Height);
    return {
      maxHeight: {
        height: Height + "px",
        overflow: "auto"
      },
      lidata: {},
      imgUrl: "",
      chosenData: {}
    };
  },
  created: function() {
    this.getParams();
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
  },
  methods: {
    getParams: function() {
      // 取到路由带过来的参数
      var routerParams = this.$route.query.id;
      // 将数据放在当前组件的数据内
      console.log("传来的参数==" + routerParams);
      this.$axios
        .get("http://47.107.32.15:8080/sport/admin_ann_list")
        .then(res => {
          console.log(res); //返回请求的结果
          let flag = 0;
          for (let index in res.data.data) {
            if (
              index < this.current * this.pageSize &&
              index > (this.current - 1) * this.pageSize - 1
            ) {
              this.nova.push(res.data.data[index]);
            }
          }
          this.lidata = res.data.data;
          for (let i in this.lidata) {
            if (this.lidata[i].id == routerParams) {
              this.chosenData = this.lidata[i];
            }
          }
          this.imgUrl =
            "http://47.107.32.15:8080/sport/admin_ann_img?id=" + routerParams;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
