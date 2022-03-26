import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'zh-CN',
    title: 'SIAE-课程管理系统',
    description: '使用说明',
    base: "/",

    plugins: ["@vuepress/plugin-active-header-links"],

    // 主题和它的配置
    theme: '@vuepress/theme-default',

    themeConfig: {
        logo: "/images/siae.png",
        repo: 'laorange/allu-docs',
        docsDir: 'docs/',
        docsBranch: 'master/',
        lastUpdatedText: "更新时间",
        contributors: false,
        tip: "提示",
        warning: "小心",
        danger: "注意",
        backToHome: "回到首页",

        navbar: [
            // NavbarItem
            {
                text: '信息查询',
                link: 'http://new.siae.top/',
            },
            // NavbarGroup
            {
                text: '友情链接',
                children: [
                    {
                        text: "Mayder",
                        link: "http://mayder.natapp1.cc/"
                    },
                    {
                        text: "V3课表",
                        link: "http://kb.siae.top/"
                    }
                ],
            },
        ],

        sidebar: [
            "/guide/README.md",
            "/guide/subscriber.md",
            "/guide/manager.md",
            '/guide/faq.md',
        ],
    },

})