<template>
  <mu-container v-bind:style="maxHeight">
    <mu-row>
      <mu-col span="10" style="margin:0 auto">
        <div class="title">
          <h2>请填写反馈表格</h2>
        </div>
        <mu-form id="callbackForm" ref="form" :model="validateForm" class="mu-demo-form">
          <mu-form-item
            label="学号+姓名（BXXXXXXXX张三）"
            help-text="帮助文字"
            :rules="usernameRules"
            prop="username"
          >
            <mu-text-field v-model="validateForm.username" name="username"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="电话" :rules="passwordRules" prop="password">
            <mu-text-field v-model="validateForm.password" name="phone"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="内容" :rules="textRules" prop="text">
            <mu-text-field
              v-model="validateForm.text"
              placeholder="不允许超过100个字符"
              multi-line
              :rows="3"
              :max-length="100"
              name="commit"
            ></mu-text-field>
          </mu-form-item>
          <br>
          <mu-button type="button" @click="change_input()">上传照片</mu-button>
          <div id="addTextForm" @change="setImg($event)"></div>
          <div id="img-wrapper" @click="deleteImg($event)"></div>
          <mu-form-item class="center">
            <mu-button color="primary" @click="submit">提交</mu-button>
            <mu-button @click="clear">重置</mu-button>
          </mu-form-item>
        </mu-form>
      </mu-col>
    </mu-row>
  </mu-container>
</template>

<script>
function getFileUrl(obj) {
  let url;
  url = window.URL.createObjectURL(obj.files.item(0));
  return url;
}
export default {
  data() {
    var Height = window.innerHeight - 112;
    return {
      maxHeight: {
        height: Height + "px",
        overflow: "auto"
      },
      usernameRules: [
        { validate: val => !!val, message: "必须填写学号和姓名" },
        {
          validate: val => /^[B|Q][0-9]{8}[\u4e00-\u9fa5]{2,4}$/.test(val),
          message: "用户名长度大于3"
        }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => /^1[34578]\d{9}$/.test(val),
          message: "密码长度大于3小于10"
        }
      ],
      textRules: [{ validate: val => !!val, message: "必须填写内容！" }],
      value16: "",
      imgNum: 1, //上传的照片数量，可根据实际情况自定义
      validateForm: {
        username: "",
        password: "",
        text: ""
      }
    };
  },
  mounted() {
    for (let i = 0; i < this.imgNum; i++) {
      //生成input框，默认为1
      let my_input = $(
        '<input type="file" name="multipartFile" style="display:none"/>'
      ); //创建一个input
      my_input.attr("id", i); //为创建的input添加id
      $("#addTextForm").append(my_input); //将生成的input追加到指定的form生成img，默认为1
      let my_img = $('<img src="">');
      my_img.attr("id", "img_" + i);
      my_img.css({ "max-width": "50%", "max-height": "200px" }); //添加样式，由于vue的执行机制，页面加载的时候img标签还没有生成，直接写在style样式会不生效
      $("#img-wrapper").append(my_img);
      console.log(13);
    }
  },
  methods: {
    doUpload(files) {
      var that = this;
      this.uploadOneImage(files, function(err, data) {
        if (err) {
          that.formItem.fc_icon = data.url;
          that.organizationLogoIsShow = true;
        } else {
          alert("图片上传失败");
        }
      });
    },
    handleDelete() {
      this.deleteModel = true;
    },
    //当input选择了图片的时候触发,将获得的src赋值到相对应的img
    setImg(e) {
      console.log(e.target);
      let target = e.target;

      $("#img_" + target.id).attr("src", getFileUrl(e.srcElement));
    },
    deleteImg(e) {
      let target = e.target;
      let inputID = ""; //需要清除value的input
      if (target.nodeName == "IMG") {
        target.src = "";
        inputID = target.id.replace("img_", ""); //获得需要清除value的input
        $("input#" + inputID).val("");
      }
    },
    //根据点击上传按钮触发input
    change_input() {
      let inputArr = $("#addTextForm input");
      let add_inputId = ""; //需要被触发的input
      for (let i = 0; i < inputArr.length; i++) {
        // 根据input的value值判断是否已经选择文件
        if (!inputArr[i].value) {
          //如果没有选择,获得这个input的ID
          add_inputId = inputArr[i].id;
          break;
        }
      }
      if (add_inputId) {
        //如果需要被触发的input ID存在,将对应的input触发
        return $("#" + add_inputId).click();
      } else {
        alert("最多选择" + this.imgNum + "张图片");
      }
    },
    submit() {
      this.$refs.form.validate().then(result => {
        console.log(this.$refs);
        console.log("form valid: ", result);
        if (result) {
          // $("#addTextForm").ajaxSubmit({
          //   url: "http://47.244.115.229:8080/add",
          //   type: "post",
          //   data: {
          //     username: "davont",
          //     commit: "sadsdasd",
          //     phone: "123455"
          //   },
          //   success: data => {
          //     console.log(data);
          //     if (data.code == 0) {
          //       console.log("提交成功");
          //       $("#addTextForm input").val("");

          //       $("div#img-wrapper img").attr("src", "");
          //     } else {
          //       alert("提交失败");
          //     }
          //   }
          // });
          var form = document.getElementById("callbackForm");
          var fd = new FormData(form);
          console.log(fd.get("username"));
          console.log(fd.get("commit"));
          console.log(fd.get("phone"));
          console.log(fd.get("multipartFile"));
          $.ajax({
            url: "http://47.244.115.229:8080/add",
            type: "POST",
            data: fd,
            enctype: "multipart/form-data",
            processData: false, // 告诉jQuery不要去处理发送的数据
            contentType: false, // 告诉jQuery不要去设置Content-Type请求头
            success: function(response, status, xhr) {
              console.log(response);
              console.log(status);
              console.log(xhr);
            }
          });
        }
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        text: "",
        isAgree: false
      };
    }
  }
};
</script>
<style>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
.title {
  text-align: center;
  margin: 10% 0;
}
.center {
  margin: 8% 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>