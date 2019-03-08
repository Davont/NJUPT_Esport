<template >
  <mu-container v-bind:style="maxHeight">
    <div class="term">
      <div class="title">
        <h2>2018-2019第一学期</h2>
      </div>
      <mu-paper :z-depth="1">
        <mu-data-table
          stripe
          :columns="columns"
          :sort.sync="sort"
          @sort-change="handleSortChange"
          :data="list.slice(0, 7)"
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
    <div class="term">
      <div class="title">
        <h2>2018-2019第二学期</h2>
      </div>
      <mu-paper :z-depth="1">
        <mu-data-table
          stripe
          :columns="columns"
          :sort.sync="sort"
          @sort-change="handleSortChange"
          :data="list.slice(0, 6)"
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
          name: "乒乓球",
          porjectScore: 159,
          score: 6.0
        },
        {
          name: "2000米跑/分",
          porjectScore: 237,
          score: 9.0
        },
        {
          name: "立定跳远/cm",
          porjectScore: 262,
          score: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7
        },
        {
          name: "引体向上/个",
          porjectScore: 305,
          score: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8
        },
        {
          name: "平时成绩（十分制）",
          porjectScore: 356,
          score: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16
        },
        {
          name: "晨跑次数",
          porjectScore: 375,
          score: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0
        },
        {
          name: "总分",
          porjectScore: 392,
          score: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2
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
