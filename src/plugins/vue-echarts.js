import Vue from 'vue'
import ECharts from 'vue-echarts/components/ECharts.vue' // 在 webpack 环境下指向 components/ECharts.vue

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/dataset'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

// 如果需要配合 ECharts 扩展使用，只需要直接引入扩展包即可
// 以 ECharts-GL 为例：
// 需要安装依赖：npm install --save echarts-gl，并添加如下引用
// import 'echarts-gl'

// 注册组件后即可使用
Vue.component('vChart', ECharts);
