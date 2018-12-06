<template>
  <div class="layout">
    <Layout>
        <home-header />
        <Layout :style="{ margin: '88px 20px 0', 'min-height': 'calc(100vh - 150px)' }">
            <Sider hide-trigger :style="{background: '#fff'}" v-show="showSidebar">
                <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            常用菜单
                        </template>
                        <MenuItem name="1-1">Option 1</MenuItem>
                        <MenuItem name="1-2">Option 2</MenuItem>
                        <MenuItem name="1-3">Option 3</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            快捷方式
                        </template>
                        <MenuItem name="2-1">Option 1</MenuItem>
                        <MenuItem name="2-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            报表导出
                        </template>
                        <MenuItem name="3-1">Option 1</MenuItem>
                        <MenuItem name="3-2">Option 2</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout :style="{padding: '0 24px 0'}">
                <router-view></router-view>
            </Layout>
        </Layout>
        <homeFooter></homeFooter>
    </Layout>
  </div>
</template>

<script>
import homeHeader from './common/header'
import homeFooter from './common/footer'
export default {
  components: {
    homeHeader,
    homeFooter
  },
  data () {
    return {
      showSidebar: false
    }
  },
  watch: {
    '$route': {
      handler ({ meta }) {
        this.showSidebar = !(meta.sidebar === 0)
      }
    }
  }
}
</script>

<style>

.layout{
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

</style>
