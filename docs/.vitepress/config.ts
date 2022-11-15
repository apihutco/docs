// import { defineConfig } from 'vitepress'

export default {
    lang: 'zh-CN',
    title: 'APIHut',
    description: 'APIHut 文档.',
    lastUpdated: true,
    cleanUrls: 'without-subfolders',

    head: [
        ['meta', {name: 'theme-color', content: '#646cff'}]
    ],

    themeConfig: {
        socialLinks:[
            {icon:'github',link:'https://github.com/apihutco'}
        ],
        outlineTitle: '大纲',
        lastUpdatedText: '最后更新于',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        sidebar: [
            {
                text: '指引',
                items: [
                    {text: '状态码', link: '/guide/code'},
                    {text:'更新日志',link: '/guide/changelog'},
                    {text:'从v1迁移',link:'/guide/migration'}
                ]
            },
            {
                text: '接口',
                items: [
                    {text: 'IP 定位', link: '/api/ip'},
                    {text: '哈希头像', link: '/api/avatar'},
                    {
                        text: '协议测试', items: [
                            {text: 'GET', link: '/api/protocol/get'},
                            {text: 'POST', link: '/api/protocol/post'},
                            {text: 'WebSocket', link: '/api/protocol/websocket'},
                        ]
                    },
                    {text: '一句问候', link: '/api/greet'},
                    {text: '天气状况', link: '/api/weather'}
                    ,]
            },
            {
                text: '关于',
                items: [
                    {text: '常见问题', link: '/about/faq'},
                    {text: '联系我们', link: '/about/contact'},
                ]
            },

        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        nav:[
            {
                text:'2.0',
                items:[
                    {text:'1.0',link:'https://v1.docs.apihut.net'}
                ]
            }
        ]
    }
}
