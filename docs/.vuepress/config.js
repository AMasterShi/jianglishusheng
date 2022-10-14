module.exports = {
    dest: 'public',
    // 指定 dev server 的端口。
    // port: 8686,
    // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
    title: '一朵白山茶',
    // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    description: '皓皓知难污，尘飞谩自红。',
    // head标记。
    head: [
        // 移动端优化。
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        // 网页标签栏图标。
        ['link', { rel: 'icon', href: '/avatar.jpeg' }]
    ],
    // 多语言配置。
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    // 显示行号
    lineNumbers: true, 
    // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
    themeConfig: {
        // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式。
        mode: 'auto',
        // 默认 true，false 不显示模式调节按钮，true 则显示。
        modePicker: false,
        // 导航栏左侧logo。
        logo: '/avatar.jpeg',
        // 首页右侧信息栏头像。
        authorAvatar: '/avatar.jpeg',
        // 全局作者姓名。
        author: '一朵白山茶',
        // 设置首页风格。
        type: 'blog',
        // 侧边栏。
        sidebar: {
            '/blogs/markdown/': [
                {
                    title: 'Markdown',
                    collapsable: true,
                    children: [
                        '202210121400',
                        '202210121411'
                    ]
                }
            ],
            '/blogs/html/': [
                {
                    title: 'Html',
                    collapsable: true,
                    children: [
                        '202210150325',
                        '202210150339',
                        '202210150437',
                        '202210150553'
                    ]
                }
            ],
            '/blogs/java/': [
                {
                    title: 'Java',
                    collapsable: true,
                    children: [
                        'test'
                    ]
                }
            ],
            '/blogs/vue/': [
                {
                    title: 'Vue',
                    collapsable: true,
                    children: [
                        'test'
                    ]
                }
            ],
            '/blogs/mysql/': [
                {
                    title: 'MySQL',
                    collapsable: true,
                    children: [
                        'test'
                    ]
                }
            ]
        },
        // 文章右侧目录。
        subSidebar: 'auto',
        // 博客配置。
        blogConfig: {
            category: {
                location: 2,    // 在导航栏菜单中所占的位置，默认2
                text: '分类'    // 默认文案 “分类”
            },
            tag: {
                location: 3,    // 在导航栏菜单中所占的位置，默认3
                text: '标签'    // 默认文案 “标签”
            }
        },
        // 顶部导航。
        nav: [
            { text: '主页', link: '/', icon: 'reco-home' },
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
        ],

        // 项目开始时间，只填写年份。
        // startYear: '2020',

        // 友链。
        friendLink: [
            {
              title: '午后南杂',
              desc: 'Enjoy when you can, and endure when you must.',
              email: 'recoluan@qq.com',
              link: 'https://www.recoluan.com'
            },
            {
                title: '葵花宝典',
                desc: '一点一滴都是进步',
                link: 'https://hejunlan.gitee.io/'
            },
            // ...
        ]
    },
    // 插件。
    plugins: [
        // 背景连线特效。来源：https://github.com/vxhly/vuepress-plugin-nest
        ['nest', {
            color: '255,156,192', // color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
            pointColor: '0,0,0', // color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
            opacity: 1, // the opacity of line (0~1), default: 0.5.
            count: 99, // the number of lines, default: 99.
            zIndex: -1, // z-index property of the background, default: -1.
            showInMobile: false // whether to display on the mobile side, default: false.
        }],
        // 一键复制。来源：https://github.com/vxhly/vuepress-plugin-one-click-copy
        ['one-click-copy', {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功!', // default is 'Copied successfully!'
            toolTipMessage: '复制到剪贴板', // default is ''Copy to clipboard'
            duration: 300, // prompt message display time
        }]
    ]
}
