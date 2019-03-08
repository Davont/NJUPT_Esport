import Vue from 'vue'

import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import search from '@/components/search'
import news from '@/components/news'
import callback from '@/components/callback'
import runDetail from '@/components/runDetail'
import newsDetail from '@/components/newsDetail'
import callbackForm from '@/components/callbackForm'
import sportsScores from '@/components/sportsScores'
import physicalScore from '@/components/physicalScore'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: login
    },
    {
      path: '/index',
      component: index,
      redirect: '/index/search',
      children: [{
          path: 'search',
          component: search,
        },
        {
          path: 'news',
          component: news,
        },
        {
          path: 'callback',
          component: callback,
        },
        {
          path: 'rundetail',
          component: runDetail,
        },
        {
          path: 'newsdetail',
          component: newsDetail,
        },
        {
          path: 'callbackForm',
          component: callbackForm,
        },
        {
          path: 'sportsScores',
          component: sportsScores,
        },
        {
          path: 'physicalScore',
          component: physicalScore,
        }
      ]
    }
  ]
})
