<route-meta>
{
  "keepAlive": true
}
</route-meta>

<template>
  <Layout>
      <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>{{ pageName }}</BreadcrumbItem>
      </Breadcrumb>
      <Content :style="{padding: '24px 0 0', minHeight: '280px'}">
          <router-view>
          </router-view>
      </Content>
  </Layout>
</template>

<script>
import { mapState } from 'vuex'
import { navList } from '@/config'
export default {
  data () {
    return {
      curNav: '',
      pageName: '',
      lang: '',
      navList,
      icons: ['navigate', 'keypad', 'analytics', 'paper', 'basket-outline', 'bug-outline', 'contacts-outline'].map(item => `ios-${item}`),
      inforCardData: [
        
        { title: 'newCreation', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: 'clickTotal', icon: 'md-locate', count: 23432, color: '#19be6b' },
        { title: 'newTag', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: 'shareTotal', icon: 'md-share', count: 657, color: '#ed3f14' }
        
        
      ],
      pieData: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 1548, name: '搜索引擎'}
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.User
    })
  },
  watch: {
    '$route': {
      handler ({ path }) {
        const result = path.match(/\/([^/]*)/)
        this.pageName = result[1] === '' ? 'Dashboard' : this.$t('header.nav.'+result[1])
        this.curNav = path
      },
      immediate: true
    }
  },
  methods: {
    getLangInforTitle (title) {
      return this.$t(`dashboard.${title}`)
    },
    goHello () {
      this.$router.push({ path: '/manage/hello' })
    }
  }
}
</script>

