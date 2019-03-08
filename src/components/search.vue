<template>
  <mu-container id="content" v-bind:style="maxHeight">
    <!-- <div class="blur "></div> -->
    <mu-ripple
      class="mu-ripple-running running"
      color="yellow"
      :opacity="0.7"
      @click="pathToRunning"
    >
      <span>跑操次数</span>
      <img src="../assets/foot.png" width="80" height="80">
      <strong>28</strong>
      <p>Today at 6.51————7.10AM</p>
    </mu-ripple>
    <mu-ripple class="mu-ripple-sport sport" color="yellow" :opacity="0.7" @click="pathToSporting">
      <span>体育成绩</span>
      <i class="material-icons">trending_flat</i>
    </mu-ripple>
    <mu-ripple
      class="mu-ripple-test test"
      color="yellow"
      :opacity="0.7"
      @click="pathToSportTesting"
    >
      <span>体测成绩</span>
      <i class="material-icons">trending_flat</i>
    </mu-ripple>
    <mu-ripple class="mu-ripple-others others" color="yellow" :opacity="0.7">
      <span>其他</span>
      <i class="material-icons">trending_flat</i>
    </mu-ripple>
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
      }
    };
  },
  methods: {
    pathToRunning: function() {
      this.$router.push("../rundetail");
    },
    pathToSporting: function() {
      this.$router.push("../sportsScores");
    },
    pathToSportTesting: function() {
      this.$router.push("../physicalScore");
    }
  }
};
</script>


<style lang="less">
.blur {
  height: 100%;
  position: absolute;
  z-index: 10;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
}
.mu-ripple-running {
  position: relative;
  height: 17rem;
  display: flex;
  margin: 16px 10px;
  justify-content: center;
  font-size: 1rem;
  background-color: #fff;
  border-radius: 4px;
  &.running {
    background-color: #2196f3;
    color: #fff;
  }
  span {
    margin-top: 20px;
  }
  i {
    position: absolute;
    right: 2rem;
    font-size: 2.5rem;
  }
  img {
    position: absolute;
    top: 4rem;
  }
  strong {
    position: absolute;
    top: 10rem;
    font-size: 3rem;
    font-weight: 300;
  }
  p {
    position: absolute;
    bottom: 0;
    font-weight: 200;
    opacity: 0.7;
  }
}
.mu-ripple-sport {
  position: relative;
  height: 4rem;
  display: flex;
  margin: 16px 10px;
  justify-content: left;
  align-items: center;
  font-size: 1rem;
  background-color: #fff;
  border-radius: 4px;
  &.sport {
    background-color: #2dcc70;
    color: #fff;
  }
  span {
    margin-left: 1rem;
  }
  i {
    position: absolute;
    right: 2rem;
    font-size: 2.3rem;
  }
}
.mu-ripple-test {
  position: relative;
  height: 4rem;
  display: flex;
  margin: 16px 10px;
  justify-content: left;
  align-items: center;
  font-size: 1rem;
  background-color: #fff;
  border-radius: 4px;
  &.test {
    background-color: #f39c11;
    color: #fff;
  }
  span {
    margin-left: 1rem;
  }
  i {
    position: absolute;
    right: 2rem;
    font-size: 2.3rem;
  }
}
.mu-ripple-others {
  position: relative;
  height: 4rem;
  display: flex;
  margin: 16px 10px;
  justify-content: left;
  align-items: center;
  font-size: 1rem;
  background-color: #fff;
  border-radius: 4px;
  &.others {
    background-color: #c86cd7;
    color: #fff;
  }
  span {
    margin-left: 1rem;
  }
  i {
    position: absolute;
    right: 2rem;
    font-size: 2.3rem;
  }
}
</style>
