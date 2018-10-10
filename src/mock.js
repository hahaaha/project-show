const Mock = require('mockjs')
Mock.mock('/api/home',{
    'homeContent|1000': [{
        'id|+1': 1,
        name: "@ctitle(3,6)",
        img: "@image('285x196')"
    }]
})