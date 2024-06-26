module.exports = {
    dest: 'public',
    // 指定 dev server 的端口，有特殊需要可以指定，默认端口号8080。
    // port: 8686,
    // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
    title: '江离书生',
    // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    description: '盼前尘回首，三生亦师友。',
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
    theme: 'reco',
    // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
    themeConfig: {
        // 设置主题浅色还是深色模式，默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式。
        mode: 'auto',
        // 设置模式调节按钮，默认 true，false 不显示模式调节按钮，true 则显示。
        modePicker: true,
        // 导航栏左侧logo。
        logo: '/avatar.jpg',
        // 首页右侧信息栏头像。
        authorAvatar: '/avatar.jpg',
        // 全局作者姓名。
        author: '史博辉',
        // 设置首页风格。
        type: 'blog',
        // 侧边栏。
        sidebar: {
            '/blogs/markdown/': [
                {
                    title: 'Markdown',
                    collapsable: true,
                    children: [
                        {title: "Markdown 介绍", path: "202210121400"},
                        {title: "Markdown 语法", path: "202210121411"},
                        {title: "Markdown 字体样式", path: "202406052257"}
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
                                {title: "HTML5 简介", path: "第1章-HTML5 简介/"},
								{title: "HTML 历史与 HTML5", path: "第1章-HTML5 简介/202210150325"},
								{title: "HTML 发展历史", path: "第1章-HTML5 简介/202210150339"},
								{title: "HTML 4.01 和 XHTML", path: "第1章-HTML5 简介/202210150437"},
								{title: "HTML 和 XHTML 的文档类型定义（DTD）", path: "第1章-HTML5 简介/202210150553"},
								{title: "从 XHTML 到 HTML5", path: "第1章-HTML5 简介/202210151704"},
								{title: "HTML5 的优势", path: "第1章-HTML5 简介/202210160450"},
								{title: "解决跨浏览器问题", path: "第1章-HTML5 简介/202210161611"},
								{title: "部分代替了原来的 JavaScript", path: "第1章-HTML5 简介/202210161632"},
								{title: "更明确的语义支持", path: "第1章-HTML5 简介/202210161905"},
								{title: "增强了 Web 应用程序的功能", path: "第1章-HTML5 简介/202210161919"},
								{title: "HTML5 的基本结构和语法变化", path: "第1章-HTML5 简介/202210161929"},
								{title: "HTML5 的基本结构", path: "第1章-HTML5 简介/202210161936"},
								{title: "标签不再区分大小写", path: "第1章-HTML5 简介/202210162343"},
								{title: "元素可以省略结束标签", path: "第1章-HTML5 简介/202210170007"},
								{title: "支持 boolean 值的属性", path: "第1章-HTML5 简介/202210170048"},
								{title: "允许属性值不使用引号", path: "第1章-HTML5 简介/202210170109"},
								{title: "小结", path: "第1章-HTML5 简介/202210170126"}
							]
						},
                        {
							title: 'HTML5 的常用元素与属性',
							collapsable: true,
							children: [
                                {title: "HTML5 的常用元素与属性", path:"第2章-HTML5 的常用元素与属性/"},
								{title: "HTML5 保留的常用元素", path: "第2章-HTML5 的常用元素与属性/202306300027"},
                                {title: "基本元素", path: "第2章-HTML5 的常用元素与属性/202306301426"},
                                {title: "文本格式相关元素", path: "第2章-HTML5 的常用元素与属性/202307010123"},
                                {title: "语义相关元素", path: "第2章-HTML5 的常用元素与属性/202307011227"},
                                {title: "使用 a 元素添加超链接和锚点", path: "第2章-HTML5 的常用元素与属性/202307012345"},
                                {title: "列表相关元素", path: "第2章-HTML5 的常用元素与属性/202307021538"}
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
                        {
                            title: 'Java 面试题',
                            collapsable: true,
                            children: [
                                {title: "Arraylist 和 LinkedList 的区别", path: "Java 面试题/202406220952"},
                                {title: "什么是动态数组", path: "Java 面试题/202406221052"},
                                {title: "Java 类的加载过程", path: "Java 面试题/202406221508"},
                                {title: "List、Set 和 Map 的区别？", path: "Java 面试题/202406242250"},
                                {title: "HashMap 的实现原理", path: "Java 面试题/202406242308"},
                                {title: "什么是线程安全", path: "Java 面试题/202406242328"},
                                {title: "java 中接口和抽象类的区别", path: "Java 面试题/202406242338"}
                                
                            ]
                        }
                    ]
                }
            ],
            '/blogs/nvm/': [
                {
                    title: 'nvm',
                    collapsable: true,
                    children: [
                        {title: "nvm 介绍", path: "202406051941"},
                        {title: "nvm 安装", path: "202406052011"},
                        {title: "nvm 配置", path: "202406061735"},
                        {title: "nvm 常用命令", path: "202406061758"}
                    ]
                }
            ],
            '/blogs/pnpm/': [
                {
                    title: 'pnpm',
                    collapsable: true,
                    children: [
                        {title: "pnpm 介绍", path: "202406061925"},
                        {title: "pnpm 安装", path: "202406061930"},
                        {title: "pnpm 常用命令", path: "202406061950"}
                    ]
                }
            ],
            '/blogs/vue3/': [
                {
                    title: 'vue3',
                    collapsable: true,
                    children: [
                        {title: "vue 介绍", path: "202307281841"},
                        {title: "vue 如何工作", path: "202307291511"},
                        {title: "vue 项目的创建", path: "202307301454"}
                    
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
            ],
            '/blogs/life/': [
                {
                    title: '日常生活',
                    collapsable: true,
                    children: [
                        {title: "企业年报申请流程", path: "202406062017"},
                        {title: "如何在电脑端获取微信里分享的百度盘小程序链接", path: "202406251728"}
                    ]
                }
            ],
            '/blogs/questions/': [
                {
                    title: '常见问题',
                    collapsable: true,
                    children: [
                        {title: "使用 nvm 出现 exit status 145:乱码 问题", path: "202406061909"},
                        {title: "浏览器 url 地址殊字符转义编码", path: "202406251641"}
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
