// import Vue from 'vue'
import bootstrap from '@/bootstrap'
import Router from '@/router'
import routes from './routes'
import App from './App'
// const routes = []

// 单页语言配置
import '@/i18n'

bootstrap({ Router, Component: App, routes, options: { validate: false } })
