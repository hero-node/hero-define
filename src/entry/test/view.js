var getDefaultUIViews = function () {
    return {

        version: 0,
        nav: {
            title: '单元测试'
        },
        views: [
            {
                class: 'UIView',
                name: 'parent',
                backgroundColor: '303e53',
                frame: {
                    x: '0',
                    y: '0',
                    r: '0',
                    h: '0.33x'
                }
            }, {
                class: 'HeroTextView',
                name: 'define',
                frame: {
                    x: '0',
                    y: '0.33x',
                    w: '0.6x',
                    h: '0.33x'
                }
            }, {
                class: 'HeroTextView',
                name: 'test',
                frame: {
                    x: '0.6x',
                    y: '0.33x',
                    w: '0.4x',
                    h: '0.33x'
                }
            }, {
                class: 'HeroTableView',
                name: 'table',
                frame: {
                    x: '0',
                    y: '0.66x',
                    r: '0',
                    h: '0.34x'
                }
            }, {
                class: 'HeroToast',
                name: 'toast'
            }
        ]

    };
};

export default getDefaultUIViews;
