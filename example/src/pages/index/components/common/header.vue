<template>
  <Header  :style="{position: 'fixed', width: '100%', 'z-index': 1000 }">
    <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo">Kuaizi™</div>
        <div class="layout-avatar" v-if="!isLoginPage">
          <Dropdown @on-click="handleLogout">
            <Avatar :src="user.avatar" :title="user.email" />
            <Icon :size="18" type="md-arrow-dropdown"></Icon>
            <DropdownMenu slot="list">
              <DropdownItem name="logout">{{ $t('header.profile.menu.logout') }}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <i-language />
        <div class="layout-nav" v-if="!isLoginPage">
          <MenuItem v-for="(item, index) in navList" :key="index" :name="item.name">
              <router-link :to="item.link" :class="{ active: routerActive(item.link) }">
                <Icon :type="icons[index]"></Icon>
              {{ $t(item.name) }}</router-link>
          </MenuItem>
        </div>
    </Menu>
  </Header>
</template>

<script>
import { mapState } from 'vuex'
import { navList } from '@/config'
import iLanguage from '../language'
export default {
  components: {
    iLanguage
  },
  data () {
    return {
      isLoginPage: false,
      navList,
      curNav: '',
      icons: ['navigate', 'keypad', 'analytics', 'paper', 'basket-outline', 'bug-outline', 'contacts-outline'].map(item => `ios-${item}`),
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
        this.isLoginPage = path === '/login'
      },
      immediate: true
    }
  },
  methods: {
    handleLogout (name) {
      switch(name) {
        case 'logout':
          this.$store.dispatch('userSignOut')
                      .then(() => {
                        this.$Message.success('注销成功!')
                        this.$router.push('/login')
                      })
          break
      }
    },
    getLangInforTitle (title) {
      return this.$t(`dashboard.${title}`)
    },
    routerActive (path) {
      // console.log(path, this.$route.path)
      // console.log(this.$route.path.startsWith(path))
      return path === this.$route.path || (path !== '/' && this.$route.path.startsWith(path))
    }
  }
}
</script>

<style>
.layout-logo{
    width: 100px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-avatar {
  float: right;
  margin-right: 20px;
  color: hsla(0,0%,100%,.7);
}
.layout-avatar .ivu-dropdown-rel {
  color: hsla(0,0%,100%,.7);
}
.layout-avatar .ivu-dropdown-rel:hover {
  color: hsla(0,0%,100%,1);
}
.layout-nav{
    float: right;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-nav a{
  color: hsla(0,0%,100%,.7);
}
.layout-nav a:hover{
  color: hsla(0,0%,100%, 1);
}
.ivu-menu-item-selected .router-link-active,
.ivu-menu-item a.active {
  color: #2d8cf0;
}
</style>
