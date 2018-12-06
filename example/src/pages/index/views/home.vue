<template>
  <div>
    <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem></BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px 0 0', minHeight: '280px'}">
        <Row :gutter="20">
          <i-col span="6" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;">
            <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
              <count-to :end="infor.count" count-class="count-style"/>
              <p>{{ getLangInforTitle(infor.title) }}</p>
            </infor-card>
          </i-col>
        </Row>
        <Row :gutter="20" style="margin-top: 20px;">
        <i-col span="8">
          <Card shadow>
            <chart-pie style="height: 300px;" :value="pieData" :text="$t('dashboard.userAccess')"></chart-pie>
          </Card>
        </i-col>
        <i-col span="16">
          <Card shadow>
            <chart-bar style="height: 300px;" :value="barData" :text="$t('dashboard.weekAmountCreation')"/>
          </Card>
        </i-col>
      </Row>
      <Row style="margin-top: 20px;">
        <Card shadow>
          <h4 style="margin-bottom: 20px">{{ $t('dashboard.sysLog') }}</h4>
          <Timeline>
            <TimelineItem color="green">发布1.0版本</TimelineItem>
            <TimelineItem color="green">发布2.0版本</TimelineItem>
            <TimelineItem color="red">严重故障</TimelineItem>
            <TimelineItem color="blue">发布3.0版本</TimelineItem>
        </Timeline>
        </Card>
      </Row>
    </Content>
  </div>
</template>

<script>
import InforCard from '@/components/info-card'
import CountTo from '@/components/count-to'
import { ChartPie, ChartBar } from '@/components/charts'

export default {
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar
  },
  data () {
    return {
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
  methods: {
    getLangInforTitle (title) {
      return this.$t(`dashboard.${title}`)
    }
  }
}
</script>

