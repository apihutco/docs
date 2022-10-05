// import { defineConfig } from 'vitepress'

export default {
    lang: 'zh-CN',
    title: 'APIHut',
    description:'APIHut 文档.',
    lastUpdated: true,
    cleanUrls: 'without-subfolders',

    head:[
        ['meta', { name: 'theme-color', content: '#646cff' }]
    ],

    themeConfig:{
        outlineTitle: '大纲',
        lastUpdatedText: '最后更新于',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        sidebar:[
            {
                text: '全局',
                items: [
                    {text: '状态码', link: '/code'},
                ]
            },
            {
                text:'接口',
                items:[
                    {text:'IP定位',link:'/api/ip'},
                    {text:'哈希头像',link:'/api/avatar'},
                    {text:'协议测试',link:'/api/protocol'},
                ]
            },
            {
                text:'关于',
                items:[
                    {text:'常见问题',link:'/about/faq'},
                    {text:'联系我们',link:'/about/contact'},
                ]
            },

        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        }
    }
}
