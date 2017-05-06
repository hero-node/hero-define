var getDefaultUIViews = function () {
    return {
        version: 0,
        nav: {
            title: 'Hero元素表',
            navigationBarHidden: false
        },
        views: [
            {
                class: 'HeroTableView',
                name: 'table',
                frame: {
                    x: '0',
                    y: '0',
                    r: '0',
                    h: '1x'
                }
            }, {
                class: 'HeroToast',
                name: 'toast'
            }
        ]
    };
};

export default getDefaultUIViews;
