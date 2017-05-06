var getDefaultUIViews = function () {
    return {

        version: 0,
        nav: {
            title: '单元测试'
        },
        views:
        [
            {
                class: 'UIView',
                name: 'parent',
                backgroundColor: '303e53',
                frame: { x: '0', y: '0', r: '0', h: '0.8x' }
            },


            {
                class: 'HeroTextView',
                name: 'test',
                frame: { x: '0', y: '0.81x', r: '0', h: '0.19x' }
            },

            {
                class: 'HeroToast',
                name: 'toast'
            }
        ]

    };
};

export default getDefaultUIViews;
