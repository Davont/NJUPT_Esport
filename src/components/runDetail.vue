<template>
<mu-container id="runDetail" v-bind:style="maxHeight">
    <mu-ripple class="mu-ripple-rundetail rundetail" color="yellow" :opacity="0.7">
    <strong>28</strong>
    <i class="material-icons">arrow_upward</i>
    <p>Twenty-eight times</p>
    </mu-ripple>
    <div class="demo-step-container">
    <mu-stepper  orientation="vertical" :linear="false">
        <mu-step>
            <mu-step-label>
            <span>10月20日</span>  <span class="runTime"> 6：50--7：10</span>
            <mu-icon slot="icon" value="info" color="blue"></mu-icon>
            </mu-step-label>
        </mu-step>
        <mu-step>
            <mu-step-label>
            <span>10月19日</span>  <span class="runTime"> 6：50--7：10</span>
            <mu-icon slot="icon" value="info" color="blue"></mu-icon>
            </mu-step-label>
        </mu-step>
        <mu-step>
            <mu-step-label>
            <span>10月18日</span>  <span class="runTime"> 6：50--7：10</span>
            <mu-icon slot="icon" value="info" color="blue"></mu-icon>
            </mu-step-label>
        </mu-step>
                <mu-step>
            <mu-step-label>
            <span>10月17日</span>  <span class="runTime"> 6：50--7：10</span>
            <mu-icon slot="icon" value="info" color="blue"></mu-icon>
            </mu-step-label>
        </mu-step>
                <mu-step>
            <mu-step-label>
            <span>10月16日</span>  <span class="runTime"> 6：50--7：10</span>
            <mu-icon slot="icon" value="info" color="blue"></mu-icon>
            </mu-step-label>
        </mu-step>
                <mu-step>
            <mu-step-label>
            <span>10月15日</span>  <span class="runTime"> 6：50--7：10</span>
            <mu-icon slot="icon" value="info" color="blue"></mu-icon>
            </mu-step-label>
        </mu-step>
    </mu-stepper>
    </div>
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
  }
};
</script>
<style lang='less'>
.mu-ripple-rundetail {
  position: relative;
  height: 8rem;
  display: flex;
  margin: 16px 10px;
  justify-content: center;
  font-size: 1rem;
  background-color: #fff;
  border-radius: 4px;
  &.rundetail {
    background-color: #2196f3;
    color: #fff;
  }
  i {
    margin-left: 3.5rem;
    font-size: 2rem;
    position: absolute;
    top: 2.2rem;
  }
  strong {
    margin-top: 1rem;
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
  .runTime{
      margin-left: 1rem;
  }
</style>
