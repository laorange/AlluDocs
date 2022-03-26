import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    base: "/allu-docs/",

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'SIAE-课程管理系统',
            description: '使用说明',
        },
        '/en-US/': {
            lang: 'en-US',
            title: 'SIAE Course Manager',
            description: 'Introduction',

        },
        '/fr-FR/': {
            lang: 'fr-FR',
            title: 'SIAE - Administrateur de cours',
            description: 'Introduction',
        },
    },

    plugins: ["@vuepress/plugin-active-header-links"],

    // 主题和它的配置
    theme: '@vuepress/theme-default',

    themeConfig: {
        logo: "/images/siae.png",
        repo: 'laorange/allu-docs',
        docsDir: 'docs/',
        docsBranch: 'master/',

        contributors: false,

        navbar: [
            {
                text: '信息查询',
                link: 'http://new.siae.top/',
            },
            {
                text: '友情链接',
                children: [
                    {
                        text: "Mayder",
                        link: "http://mayder.natapp1.cc/"
                    },
                    {
                        text: "V3",
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

        locales: {
            '/': {
                selectLanguageName: '简体中文',
                lastUpdatedText: "更新时间",
                tip: "提示",
                warning: "注意",
                danger: "危险",
                backToHome: "回到首页",
            },
            '/en-US/': {
                selectLanguageName: 'English',
                navbar: [
                    {
                        text: 'Query Info',
                        link: 'http://new.siae.top/',
                    },
                    {
                        text: 'Relevant Sites',
                        children: [
                            {
                                text: "Mayder",
                                link: "http://mayder.natapp1.cc/"
                            },
                            {
                                text: "V3",
                                link: "http://kb.siae.top/"
                            }
                        ],
                    },
                ],
                sidebar: [
                    "/en-US/guide/README.md",
                ],
            },
            '/fr-FR/': {
                selectLanguageName: 'Français',
                navbar: [
                    {
                        text: "Requêter l'information",
                        link: 'http://new.siae.top/',
                    },
                    {
                        text: 'Sites connexes',
                        children: [
                            {
                                text: "Mayder",
                                link: "http://mayder.natapp1.cc/"
                            },
                            {
                                text: "V3",
                                link: "http://kb.siae.top/"
                            }
                        ],
                    },
                ],
                sidebar: [
                    "/fr-FR/guide/README.md",
                ],
            }
        },
    },

})