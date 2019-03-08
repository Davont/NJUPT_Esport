

<template>
  <mu-container v-bind:style="maxHeight" id="callbackContent">
    <div class="alert-wrapper">
      <mu-alert color="success">
        <ol>
          <li>如反映问题，请您尽量写清具体时间、地点、学号姓名、以便您的问题及时得到核实处理。</li>
          <li>请勿重复留言</li>
          <li>留言内容请尽量叙述清晰、简明扼要</li>
        </ol>
      </mu-alert>
    </div>
    <!--卡片循环-->
    <mu-card
      style="width: 100%; max-width: 375px; margin: 10px auto;"
      v-for="(data) in nova"
      :key="data.id"
    >
      <mu-card-header :title="data.name" :sub-title="data.time">
        <mu-avatar slot="avatar">
          <img src="../assets/logo.png">
        </mu-avatar>
      </mu-card-header>
      <mu-card-media title sub-title>
        <img :src="data.url">
      </mu-card-media>
      <mu-card-text>{{data.commit}}</mu-card-text>
    </mu-card>
    <!--分页-->
    <mu-flex justify-content="center">
      <mu-pagination
        :total="pageNum"
        :current.sync="current"
        @change="pageChange()"
        style="margin: 15px 0;"
        :pageSize="pageSize"
      ></mu-pagination>
    </mu-flex>
    <div class="bottom-fix">
      <mu-row>
        <mu-col span="10" style="margin: auto;">
          <strong>
            <i>如果有反馈内容，请点击右边的的按钮哦！</i>
          </strong>
        </mu-col>
        <mu-col span="2">
          <mu-button color="red" id="sendText" @click="toForm()">
            <mu-icon value="send"></mu-icon>
          </mu-button>
        </mu-col>
      </mu-row>
    </div>
  </mu-container>
</template>
<script>
import qs from "qs";

let timer = null;
export default {
  data() {
    var Height = window.innerHeight - 112 - 50;
    return {
      maxHeight: {
        height: Height + "px",
        overflow: "auto"
      },
      value15: "",
      pageNum: 5,
      lidata: [],
      nova: [],
      current: 1,
      pageSize: 5,
      isTop: true,
      form: {
        input: "1",
        select: "",
        date: "",
        radio: "",
        checkbox: [],
        switch: false,
        slider: 30,
        textarea: ""
      }
    };
  },
  mounted: function() {
    this.needScroll();
    this.$axios
      .get("http://47.244.115.229:8080/show")
      .then(res => {
        //console.log(res); //返回请求的结果
        let flag = 0;
        this.lidata = res.data.data;
        this.lidata.reverse();
        this.pageNum = res.data.data.length;
        for (let index in res.data.data) {
          if (
            index < this.current * this.pageSize &&
            index > (this.current - 1) * this.pageSize - 1
          ) {
            this.nova.push(this.lidata[index]);
          }
        }
        for (let list of this.nova) {
          console.log(list);
          list.url = "http://47.244.115.229:8080/" + list.url;
          console.log(list.url);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
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
          document.getElementById("callbackContent").scrollTop ||
          document.getElementById("callbackContent").scrollTop;
        let ispeed = Math.floor(-osTop / 2);
        document.getElementById(
          "callbackContent"
        ).scrollTop = document.getElementById("callbackContent").scrollTop =
          osTop + ispeed;
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
    },
    toForm() {
      this.$router.push({ path: "../callbackForm" });
    }
  }
};
</script>
<style lang="less">
#sendImg {
  margin-top: 10px;
  min-width: 0;
}
#sendText {
  margin: 10px 0;
  min-width: 0;
}
.mr10 {
  margin-right: 15px;
}
.bottom-fix {
  width: 100%;
  padding: 0 10px;
  transform: translateX(-10px);
  border-top: 2px solid #eee;
  background: #fff;
  position: fixed;
  bottom: 56px;
  .mu-form-item-label {
    margin-left: 10px;
  }
  button {
    float: right;
  }
}
.alert-wrapper {
  margin-top: 10px;
  width: 100%;
  ol {
    font-size: 15px;
    line-height: 30px;
  }
  > .mu-alert {
    margin-bottom: 16px;
    padding: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
