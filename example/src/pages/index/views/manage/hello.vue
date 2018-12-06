<template>
  <Row>
    <Card shadow>
      <h4 style="margin-bottom: 20px">{{ $t('dashboard.sysLog') }}</h4>
      <Timeline>
        <TimelineItem color="green">发布1.0版本 <a @click.stop="goViewId(1)">view</a></TimelineItem>
        <TimelineItem color="green">发布2.0版本 <a @click.stop="goViewId(2)">view</a></TimelineItem>
        <TimelineItem color="red">严重故障 <a @click.stop="goViewId(3)">view</a></TimelineItem>
        <TimelineItem color="blue">发布3.x0版本 <a @click.stop="goViewId(4)">view</a></TimelineItem>
        <router-view></router-view>
    </Timeline>
    </Card>
  </Row>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    goViewId (id) {
      this.$router.push({ name: 'word', params: { id } })
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
.copyright {
  text-align: center;
}


</style>
