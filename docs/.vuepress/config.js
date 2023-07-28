module.exports = {
    dest: 'public',
    // 指定 dev server 的端口。
    // port: 8686,
    // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
    title: '江离书生',
    // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    description: '停车坐爱枫林晚，霜叶红于二月花。',
    // head标记。
    head: [
        // 移动端优化。
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        // 网页标签栏图标。
        ['link', { rel: 'icon', href: '/avatar.jpg' }]
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
        logo: '/avatar.jpg',
        // 首页右侧信息栏头像。
        authorAvatar: '/avatar.jpg',
        // 全局作者姓名。
        author: '江离书生',
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
                    title: 'HTML',
                    collapsable: true,
                    children: [
						{
							title: 'HTML5 简介',
							collapsable: true,
							children: [
                                {title: 'HTML5 简介', path: '第1章-HTML5 简介/'},
								{title: 'HTML 历史与 HTML5', path: '第1章-HTML5 简介/202210150325'},
								{title: 'HTML 发展历史', path: '第1章-HTML5 简介/202210150339'},
								{title: 'HTML 4.01 和 XHTML', path: '第1章-HTML5 简介/202210150437'},
								{title: 'HTML 和 XHTML 的文档类型定义（DTD）', path: '第1章-HTML5 简介/202210150553'},
								{title: '从 XHTML 到 HTML5', path: '第1章-HTML5 简介/202210151704'},
								{title: 'HTML5 的优势', path: '第1章-HTML5 简介/202210160450'},
								{title: '解决跨浏览器问题', path: '第1章-HTML5 简介/202210161611'},
								{title: '部分代替了原来的 JavaScript', path: '第1章-HTML5 简介/202210161632'},
								{title:'更明确的语义支持', path: '第1章-HTML5 简介/202210161905'},
								{title:'增强了 Web 应用程序的功能', path: '第1章-HTML5 简介/202210161919'},
								{title:'HTML5 的基本结构和语法变化', path: '第1章-HTML5 简介/202210161929'},
								{title:'HTML5 的基本结构', path: '第1章-HTML5 简介/202210161936'},
								{title:'标签不再区分大小写', path: '第1章-HTML5 简介/202210162343'},
								{title:'元素可以省略结束标签', path: '第1章-HTML5 简介/202210170007'},
								{title:'支持 boolean 值的属性', path: '第1章-HTML5 简介/202210170048'},
								{title:'允许属性值不使用引号', path: '第1章-HTML5 简介/202210170109'},
								{title:'小结', path: '第1章-HTML5 简介/202210170126'}
							]
						},
                        {
							title: 'HTML5 的常用元素与属性',
							collapsable: true,
							children: [
                                {title: 'HTML5 的常用元素与属性', path:'第2章-HTML5 的常用元素与属性/'},
								{title: 'HTML5 保留的常用元素', path: '第2章-HTML5 的常用元素与属性/202306300027'},
                                {title: '基本元素', path: '第2章-HTML5 的常用元素与属性/202306301426'},
                                {title: '文本格式相关元素', path: '第2章-HTML5 的常用元素与属性/202307010123'},
                                {title: '语义相关元素', path: '第2章-HTML5 的常用元素与属性/202307011227'},
                                {title: '使用 a 元素添加超链接和锚点', path: '第2章-HTML5 的常用元素与属性/202307012345'}
							]
						},
						{
							title: 'HTML5 表单相关的元素和属性',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: 'HTML5 的绘图支持',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: 'HTML5 的多媒体支持',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: '级联样式单与 CSS 选择器',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: '字体与文本相关属性',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: '背景、边框和边距相关属性',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: '大小、定位、轮廓相关属性',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: '盒模型与布局相关属性',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: '表格、列表相关属性及 media query',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: '变形与动画相关属性',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: 'JavaScript 语法详解',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: 'DOM 编程详解',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: '事件处理机制',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: '本地存储与离线应用',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: '文件支持与二进制数据',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: 'Web Worker 多线程 API',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: '客户端通信',
							collapsable: true,
							children: [
								
							]
						},
						{
							title: 'HTML5 疯狂俄罗斯方块',
							collapsable: true,
							children: [
								
							]
						}
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
                        {
                            title: 'vue 介绍',
                            collapsable: true,
							children: [
								{title: 'vue 介绍', path: '1-vue 介绍/202307281841'}
							]
                        }
                        
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
        // 背景连线特效。来源：https://github.com/vxhly/vuepress-plugin-nest | 62, 175, 124 原始绿 | color: '255, 156, 192' 粉紫色 | color: '0, 47, 167' 克莱茵兰
        ['nest', {
            color: '62, 175, 124', // color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
            pointColor: '0,0,0', // color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
            opacity: 1, // the opacity of line (0~1), default: 0.5.
            count: 99, // the number of lines, default: 99.
            zIndex: -1, // z-index property of the background, default: -1.
            showInMobile: false // whether to display on the mobile side, default: false.
        }],
        // 一键复制。来源：https://github.com/vxhly/vuepress-plugin-one-click-copy
        ['one-click-copy', {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功!', // default is 'Copied successfully!' 复制成功后的提示信息
            toolTipMessage: '复制到剪贴板', // default is ''Copy to clipboard' 鼠标移到图标上显示的文字
            duration: 1000, // prompt message display time 复制成功后提示信息的显示时间
        }]
    ]
}
