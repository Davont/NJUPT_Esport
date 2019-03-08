<template >
  <mu-container v-bind:style="maxHeight">
    <div class="term">
      <div class="title">
        <h2>2018-2019学年</h2>
      </div>
      <mu-paper :z-depth="1">
        <mu-data-table
          stripe
          :columns="columns"
          :sort.sync="sort"
          @sort-change="handleSortChange"
          :data="list.slice(0, 10)"
        >
          <template slot-scope="scope">
            <td>{{scope.row.name}}</td>
            <td class="is-right">{{scope.row.porjectScore}}</td>
            <td class="is-right">{{scope.row.score}}</td>
          </template>
        </mu-data-table>
      </mu-paper>
    </div>
    <mu-divider></mu-divider>
  </mu-container>
</template>
<script>
export default {
  data() {
    var Height = window.innerHeight - 112;
    return {
      maxHeight: {
        height: Height + "px",
        overflow: "auto"
      },
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        { title: "项目", width: 150, name: "name" },
        {
          title: "项目成绩",
          name: "porjectScore",
          width: 100,
          align: "left",
          sortable: true
        },
        {
          title: "分数",
          name: "score",
          width: 100,
          align: "right",
          sortable: true
        }
      ],
      list: [
        {
          name: "肺活量/ml",
          porjectScore: 159,
          score: 6.0
        },
        {
          name: "BMI",
          porjectScore: 237,
          score: 9.0
        },
        {
          name: "立定跳远/cm",
          porjectScore: 262,
          score: 16.0
        },
        {
          name: "50米跑/s",
          porjectScore: 305,
          score: 3.7
        },
        {
          name: "1000米跑/分",
          porjectScore: 356,
          score: 16.0
        },
        {
          name: "坐位体前屈",
          porjectScore: 375,
          score: 0.0
        },
        {
          name: "引体向上",
          porjectScore: 392,
          score: 0.2
        },
        {
          name: "体重/千克",
          porjectScore: 392,
          score: 0.2
        },
        {
          name: "身高/厘米",
          porjectScore: 392,
          score: 0.2
        },
        {
          name: "总分",
          porjectScore: 392,
          score: 0.2
        }
      ]
    };
  },
  methods: {
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === "asc" ? a[name] - b[name] : b[name] - a[name]
      );
    }
  }
};
</script>
<style lang="less">
.term {
  margin: 10% auto;
  .title {
    text-align: center;
  }
}
</style>
