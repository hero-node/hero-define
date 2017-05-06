var host = window.location.origin;
var getDefaultUIViews = function () {
    return {

        backgroundColor: '4dd0e1', // 整页背景色
        tintColor: '303e53', // 着色
        // 导航栏显示内容
        nav: {
            title: 'Welecome to Hero',
            navigationBarHidden: true

        },
        views: [
            // 一个界面元素
            {
                class: 'HeroLabel',
                name: 'name',
                textColor: '43a047',
                text: 'Hello Hero!',
                size: 36,
                frame: {
                    'w': '1x',
                    h: '80'
                },
                alignment: 'center'
            }, {
                class: 'HeroButton',
                titleColor: 'ffffff',
                title: '探索更多',
                backgroundColor: '388e3c',
                cornerRadius: 10,
                size: 16,
                frame: {
                    w: '0.5x',
                    h: '44'
                },
                center: {
                    x: '0.5x',
                    y: '0.9x'
                },
                click: {
                    command: 'goto:' + host + '/hero_define/hero_defines.html'
                }
            }, {
                class: 'HeroButton',
                titleColor: 'ffffff',
                title: '第一次交互',
                name: 'btnFirstTry',
                backgroundColor: '43a047',
                cornerRadius: 150,
                borderWidth: 2,
                borderColor: '22ff22',
                size: 24,
                frame: {
                    w: '260',
                    h: '260'
                },
                center: {
                    x: '0.5x',
                    y: '0.5x'
                },
                click: {
                    datas: [
                        {
                            name: 'name',
                            text: 'You are a hero !',
                            size: 36,
                            textColor: 'f57f17'
                        }, {
                            name: 'btnFirstTry',
                            title: 'Bingo!'
                        }
                    ]
                }
            }

        ]

    };
};

export default getDefaultUIViews;
