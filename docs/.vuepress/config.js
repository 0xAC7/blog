module.exports = {
    title: '涂鸦板',
    description: '记录生活感悟和技术心得',
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: 'JavaScript',
                link: '/javascript/'
            },
            {
                text: 'Java',
                items: [{
                        text: 'Spring',
                        link: '/java/spring/'
                    },
                    {
                        text: 'Mybatis',
                        link: '/java/mybatis/'
                    }
                ]
            },
            {
                text: '关于我',
                link: '/about/'
            },
            {
                text: 'Github',
                link: '#'
            }
        ],
        sidebar: {
            '/javascript/': [
                '',
                'function',
                'object'
            ],
            '/java/spring/': [
                ''
            ],
            '/java/mybatis/': [
                ''
            ],
            '/about/': [
                ''
            ]
        }
    }
}