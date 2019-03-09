<template>
  <mu-container id="news" v-bind:style="maxHeight">
    <mu-ripple
      class="mu-ripple-news news"
      color="skyblue"
      :opacity="0.7"
      @click="pathToDatail(data.id)"
      v-for="(data,index) in nova"
      :key="data.id"
    >
      <img :src="imgUrl[index]" alt>
      <div class="bg"></div>
      <div id="content">
        <p id="news-title">{{data.title}}</p>
        <p id="news-time">{{data.releaseTime}}</p>
      </div>
    </mu-ripple>
    <mu-flex justify-content="center">
      <mu-pagination
        :total="pageNum"
        :current.sync="current"
        @change="pageChange()"
        style="margin: 15px 0;"
        :pageSize="pageSize"
      ></mu-pagination>
    </mu-flex>
  </mu-container>
</template>
<script>
let timer = null;
export default {
  data() {
    var Height = window.innerHeight - 112;
    return {
      maxHeight: {
        height: Height + "px",
        overflow: "auto"
      },
      pageNum: 5,
      lidata: {},
      imgUrl: [],
      imgUrlIfr: "",
      nova: [],
      current: 1,
      pageSize: 5,
      isTop: true
    };
  },
  mounted: function() {
    console.log("news");
    //this.needScroll();
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
        this.pageNum = res.data.data.length;
        //console.log(res.data.data);
        // console.log(this.lidata);
        // console.log(this.nova.id);
        // console.log(this.nova);
        // console.log(this.pageNum);
        var num = 0;
        for (let list of this.nova) {
          this.imgUrl.push(
            "http://47.107.32.15:8080/sport/admin_ann_img?id=" + list.id
          );
        }
        //console.log(this.imgUrl);
        //document.getElementById("bgColor").add;
      })
      .catch(err => {
        console.log(err);
      });
  },

  computed: {
    classObject: function() {
      return function(index) {
        return "ifr" + index;
      };
    }
  },
  methods: {
    pathToDatail: function(id) {
      this.$router.push({
        path: "../newsdetail",
        query: {
          id: id
        }
      });
    },
    needScroll() {
      let clientHeight = document.body.clientHeight;
      window.onscroll = function() {
        if (!this.isTop) {
          clearInterval(timer);
        }
        this.isTop = false;
      };
    },
    goTop() {
      timer = setInterval(function() {
        let osTop =
          document.getElementById("news").scrollTop ||
          document.getElementById("news").scrollTop;
        let ispeed = Math.floor(-osTop / 2);
        document.getElementById("news").scrollTop = document.getElementById(
          "news"
        ).scrollTop = osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
    pageChange() {
      console.log(this.nova);
      console.log(this.current);
      this.goTop();

      let flag = 0;
      this.nova = [];
      for (let index in this.lidata) {
        if (
          index < this.current * this.pageSize &&
          index > (this.current - 1) * this.pageSize - 1
        ) {
          this.nova.push(this.lidata[index]);
        }
      }
    }
  }
};
</script>


<style lang="less">
.mu-ripple-news {
  position: relative;
  background: #f39c11;
  height: 10rem;
  display: flex;
  margin: 16px 10px;
  justify-content: left;
  align-items: center;
  font-size: 1rem;
  background-color: #fff;
  color: #fff;
  border-radius: 4px;
  opacity: 1;
  img {
    width: 100%;
    height: 100%;
  }
  .bg {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    opacity: 0.5;
  }
  #content {
    width: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    bottom: 0;
  }
  .bgcolor0 {
    background: #f39c11;
  }
  .bgcolor1 {
    background: red;
  }
  .bgcolor2 {
    background: yellow;
  }
  .bgcolor3 {
    background: purple;
  }
  #news-title {
    margin: 0.5rem 0;
    position: relative;
    bottom: 0.2rem;
    left: 0.5rem;
  }
  #news-time {
    position: relative;
    margin: 0.5rem 0;
    bottom: 0.2rem;
    left: 0.5rem;
    font-size: 0.8rem;
    opacity: 0.7;
  }
  i {
    position: absolute;
    right: 2rem;
    font-size: 2.3rem;
  }
}
</style>
