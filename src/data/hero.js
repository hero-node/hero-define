var heroDefines = [

    // 元素的基本形式、一切其它元素都“继承”自它
    // create by Hero
    //
    //
    {
        class: 'HeroView',
        animation: 0, // 熟悉变化的动画时间 float
        animationDelay: '', // 属性变化动画延迟时间 float
        animationType: '', // 定义好的动画名字 shake、其它暂无
        alpha: 1, // float 0.0~1.0
        backgroundColor: 'ff3344', // 六位表示无alpha颜色，8位包含alpha通道
        tinyColor: '', // 着色，ios中的概念，为了系统一致性，建议少用
        hidden: false, // 隐藏 boolean
        ios_hidden: false, // 只在iOS中使用
        android_hidden: false, // 只在android中使用
        borderWidth: 0, // 边框
        borderColor: 'ff3344', // 边框颜色，单独使用默认的0.5f的边框
        shadowColor: 'ff3344', // 暂时只支持默认的shadow，使用shadow应该比较小心避免造成性能问题。推荐使用图片代替
        ripple: false, // ripple效果
        raised: false, // shadow效果，类似纸张在桌上
        rippleExpanding: false, // ripple 扩展效果
        enable: true, // 可触摸操作
        clip: true, // 子view是否可以超越边界
        cornerRadius: 0, // 圆角半径
        yOffset: '', // parent name+ offert ie:'username+20'
        xOffset: '', // parent name+ offert ie:'username+20'
        contentSizeElement: false, // 在iOS中它会撑大ScrollView 的contentSize
        frame: {
            x: '0.2x',
            y: '0.2x',
            r: '0.2x',
            h: '0.6x'
        }, // 布局，支持x,y,w,h,l,r,b,t,都可以为相对父view的值，
        center: {}, // {x:'',y:''}
        dashBorder: {}, // 虚线定义 {color:'ff0000',pattern:[2,1],left:true,right:true,bottom:true,top:true}
        subViews: [], // view的数组 ,设置会清楚之前的subviews
        testCase: [
            {
                animation: 0, // 熟悉变化的动画时间 float
                animationDelay: '', // 属性变化动画延迟时间 float
                animationType: '', // 定义好的动画名字 shake、其它暂无
                alpha: 1, // float 0.0~1.0
                backgroundColor: 'ff3344', // 六位表示无alpha颜色，8位包含alpha通道
                tinyColor: '', // 着色，ios中的概念，为了系统一致性，建议少用
                hidden: false, // 隐藏 boolean
                ios_hidden: false, // 只在iOS中使用
                android_hidden: false, // 只在android中使用
                borderWidth: 0, // 边框
                borderColor: 'ff3344', // 边框颜色，单独使用默认的0.5f的边框
                shadowColor: 'ff3344', // 暂时只支持默认的shadow，使用shadow应该比较小心避免造成性能问题。推荐使用图片代替
                ripple: false, // ripple效果
                raised: false, // shadow效果，类似纸张在桌上
                rippleExpanding: false, // ripple 扩展效果
                enable: true, // 可触摸操作
                clip: true, // 子view是否可以超越边界
                cornerRadius: 0, // 圆角半径
                yOffset: '', // parent name+ offert ie:'username+20'
                xOffset: '', // parent name+ offert ie:'username+20'
                contentSizeElement: false, // 在iOS中它会撑大ScrollView 的contentSize
                frame: {
                    x: '0.2x',
                    y: '0.2x',
                    r: '0.2x',
                    h: '0.6x'
                }, // 布局，支持x,y,w,h,l,r,b,t,都可以为相对父view的值，
                center: {}, // {x:'',y:''}
                dashBorder: {}, // 虚线定义 {color:'ff0000',pattern:[2,1],left:true,right:true,bottom:true,top:true}
                subViews: [], // view的数组 ,设置会清楚之前的subviews
                desc: '恢复默认值'
            }, {
                frame: {
                    x: '100',
                    y: '0.2x',
                    r: '0.2x',
                    h: '0.6x'
                },
                desc: '测试x值为绝对值100'
            }, {
                frame: {
                    x: '0.2x',
                    y: '20',
                    r: '0.2x',
                    h: '0.6x'
                },
                desc: '测试y值为绝对值20'
            }, {
                frame: {
                    x: '0.2x',
                    y: '0.2x',
                    r: '100',
                    h: '0.6x'
                },
                desc: '测试r值为绝对值100'
            }, {
                frame: {
                    x: '0.2x',
                    y: '0.2x',
                    r: '0.2x',
                    h: '100'
                },
                desc: '测试h值为绝对值100'
            }, {
                frame: {
                    x: '0.2x',
                    y: '0.2x',
                    w: '100',
                    h: '0.6x'
                },
                desc: '测试w值为绝对值100'
            }, {
                frame: {
                    x: '10',
                    y: '10',
                    r: '10',
                    b: '10'
                },
                animation: 0.4,
                desc: '测试animation 0.4s'
            }, {
                frame: {
                    x: '10',
                    y: '10',
                    r: '10',
                    b: '10'
                },
                animation: 0.4,
                animationDelay: 2,
                desc: '测试animation delay 2s'
            }, {
                animation: 0.4,
                animationType: 'shake',
                desc: '测试animation shake'
            }, {
                alpha: 0.5,
                desc: '测试alpha 0.5'
            }, {
                alpha: 1,
                desc: '测试alpha 1'
            }, {
                backgroundColor: '00ff00',
                desc: '测试颜色'
            }, {
                backgroundColor: '00ff0099',
                desc: '测试带透明颜色'
            }, {
                subViews: [
                    {
                        class: 'HeroButton',
                        frame: {
                            x: '10',
                            y: '10',
                            w: '100',
                            h: '33'
                        },
                        title: '测试tintColor'
                    }
                ],
                tinyColor: 'ff0000',
                desc: '测试tintColor'
            }, {
                hidden: true,
                desc: '测试hidden'
            }, {
                hidden: false,
                desc: '测试not hidden'
            }, {
                ios_hidden: true,
                desc: '测试ios_hidden'
            }, {
                android_hidden: false,
                desc: '测试not android_hidden'
            }, {
                android_hidden: true,
                desc: '测试android_hidden'
            }, {
                borderWidth: 2,
                borderColor: '0000ff',
                desc: '测试borderWidth'
            }, {
                borderColor: '0000ff',
                desc: '测试borderColor'
            }, {
                shadowColor: 'ff0000',
                desc: '测试shadowColor'
            }, {
                ripple: true,
                desc: '测试ripple'
            }, {
                raised: true,
                desc: '测试 raised'
            }, {
                rippleExpanding: true,
                desc: '测试 rippleExpanding'
            }, {
                enable: false,
                desc: '测试 enable'
            }, {
                clip: true,
                subViews: [
                    {
                        class: 'UIView',
                        frame: {
                            x: '0.9x',
                            y: '10',
                            w: '0.2x',
                            h: '33'
                        },
                        backgroundColor: '0000ff'
                    }
                ],
                desc: '测试 clip true'
            }, {
                clip: false,
                desc: '测试 clip false'
            }, {
                cornerRadius: 5,
                desc: '测试 cornerRadius'
            }, {
                center: {
                    x: '0.5x',
                    y: '0.5x'
                },
                desc: '测试 center'
            }, {
                dashBorder: {
                    color: '00f0e0',
                    pattern: [
                        2, 1
                    ],
                    bottom: true,
                    top: true
                },
                desc: '测试 dash Border'
            }, {
                subViews: [
                    {
                        class: 'HeroButton',
                        frame: {
                            x: '10',
                            y: '10',
                            w: '100',
                            h: '33'
                        },
                        title: '锚点View',
                        name: 'anchorView',
                        backgroundColor: '0000ff'

                    }, {
                        class: 'HeroButton',
                        frame: {
                            x: '10',
                            y: '0',
                            w: '100',
                            h: '33'
                        },
                        title: '参考View',
                        backgroundColor: '0000ff',
                        yOffset: 'anchorView+10'
                    }
                ],
                desc: '测试 yOffse'
            }
        ]
    },
    // HeroButton 按钮
    // create by Hero
    //
    //
    {
        class: 'HeroButton',
        title: '确认', //
        titleH: '确认', // hightlight title
        size: 14, // fontSize
        titleColor: 'ff0000', // title颜色
        backgroundColor: 'ffffff', //
        titleDisabledColor: 'ffffff', //
        backgroundDisabledColor: 'ff3344', //
        titleColorH: 'ffffff', //
        imageN: '', // image normal
        imageH: '', // image normal
        click: {}, // 点击时候发送的对象
        testCase: [
            {
                title: '确认', //
                titleH: '确认', // hightlight title
                size: 14, // fontSize
                titleColor: 'ff0000', // title颜色
                backgroundColor: 'ffffff', //
                titleDisabledColor: 'ffffff', //
                backgroundDisabledColor: 'ff3344', //
                titleColorH: 'ffffff', //
                imageN: '', // image normal
                imageH: '', // image normal
                click: {},
                frame: {
                    x: '0',
                    y: '0',
                    w: '1x',
                    h: '1x'
                },
                desc: '恢复默认值'
            }, {
                frame: {
                    x: '0.2x',
                    y: '0.2x',
                    r: '0.2x',
                    h: '0.6x'
                },
                desc: '测试frame'
            }, {
                title: 'title',
                desc: '测试 title'
            }, {
                titleH: 'titleH',
                desc: '测试 titleH'
            }, {
                size: 16,
                desc: '测试 title size'
            }, {
                titleColor: 'ffffff', // title颜色
                desc: '测试 title color'
            }, {
                backgroundColor: '333333', // background 颜色
                desc: '测试 backgroundColor'
            }, {
                imageN: 'delete',
                desc: '测试 imageN'
            }, {
                imageH: 'cancel',
                desc: '测试 imageH'
            }, {
                click: {
                    datas: [
                        {
                            name: 'toast',
                            text: 'You are a hero !'
                        }
                    ]
                },
                desc: '测试 click event'
            }, {
                enable: false,
                desc: '测试 disable'
            }, {
                enable: true,
                desc: '测试 enable'
            }

        ]
    },
    // HeroImageView
    // create by Hero
    //
    //
    {
        class: 'HeroImageView',
        base64image: '', // base64 字符串
        image: 'delete', // png／jpg／gif图片名，如果包含http则为网络图片
        showBig: true, // 点击后是否展示详细图
        testCase: [
            {
                base64image: '', // base64 字符串
                image: 'delete', // png／jpg／gif图片名，如果包含http则为网络图片
                showBig: true,
                frame: {
                    x: '0',
                    y: '0',
                    w: '1x',
                    h: '1x'
                },
                desc: '恢复默认值'
            }, {
                frame: {
                    x: '0.1x',
                    y: '10',
                    r: '0.1x',
                    h: '200'
                },
                desc: '测试x值为相对值'
            }, {
                base64image: 'data:image/jpeg;base64,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',
                desc: '测试加载Base64字符串图片'
            }, {
                image: 'https://www.dianrong.com/static/images/public/home/site-logo-1@1x.png',
                desc: '测试加载网络图片'
            }, {
                localImage: 'image1',
                name: 'feedback1',
                localImageReady: {
                    imageReady: 'feedback1'
                },
                localImageDelete: {
                    imageDelete: 'feedback1'
                },
                desc: '测试本地选取文件'
            }
        ]
    },
    // HeroLabel
    // create by Hero
    //
    //
    {
        class: 'HeroLabel',
        text: 'you are hero', // Label Text
        alignment: 'center', // center left right
        numberOfLines: 1, // number of lines
        warpType: 'start', // 暂时只支持start
        size: 14, // fontsize
        textColor: '000000', // fontsize
        font: '', // 暂时只支持bold
        lineBreakMode: 'NSLineBreakByWordWrapping', // NSLineBreakByWordWrapping
        // NSLineBreakByCharWrapping
        // NSLineBreakByTruncatingHead
        // NSLineBreakByTruncatingTail
        // NSLineBreakByTruncatingMiddle
        attribute: {}, // {color(0,1):ff0000,size:(1,1):12,middleline(0,1):true,gap:15}
        hAuto: true, // 高度自动，并会发送之后的frame
        wAuto: true, // 宽度自动，并会发送之后的frame
        canCopy: false, // 长按可复制
        // frame:{x:'20',y:'0.2x',w:'1',h:'100'},
        testCase: [
            {
                text: 'you are hero', // Label Text
                alignment: 'center', // center left right
                numberOfLines: 1, // number of lines
                warpType: 'start', // 暂时只支持start
                size: 14, // fontsize
                textColor: '000000', // fontsize
                font: '', // 暂时只支持bold
                lineBreakMode: 'NSLineBreakByWordWrapping', // NSLineBreakByWordWrapping
                // NSLineBreakByCharWrapping
                // NSLineBreakByTruncatingHead
                // NSLineBreakByTruncatingTail
                // NSLineBreakByTruncatingMiddle
                attribute: {}, // {color(0,1):ff0000,size:(1,1):12,middleline(0,1):true,gap:15}
                hAuto: true, // 高度自动，并会发送之后的frame
                wAuto: true, // 宽度自动，并会发送之后的frame
                canCopy: false,
                frame: {
                    x: '0',
                    y: '0',
                    w: '1x',
                    h: '1x'
                },
                desc: '恢复默认值'
            }, {
                frame: {
                    x: '20',
                    y: '0.2x',
                    w: '0.4x',
                    h: '0.2x'
                },
                desc: '测试x值为绝对值'
            }, {
                alignment: 'right',
                desc: '测试Alignment'
            }, {
                alignment: 'center',
                desc: '测试Alignment center'
            }, {
                alignment: 'left',
                desc: '测试Alignment left'
            }, {
                numberOfLines: 2,
                desc: '测试number of lines'
            }, {
                size: 24,
                desc: '测试size'
            }, {
                attribute: {
                    'color(0,11)': 'aaaaaa',
                    'color(11,12)': '00bd8c',
                    'size(0,3)': '20',
                    'middleline(0,1)': true,
                    gap: '5'
                },
                desc: '测试attribute'
            }
        ]
    },

    // HeroIndicator
    // create by Hero
    //
    //
    // {
    //     class:'HeroIndicator',
    //     style:'largeWhite',            //largeWhite 大白 white 小白 否则 小灰
    //     stop:false,                   //停止
    //     testCase:[
    //         {
    //             frame:{x:'0.1x',y:'10',r:'0.1x',h:'200'},
    //             desc:'测试x值为相对值'
    //         }
    //     ]
    // },
    // HeroCheckBox 按钮
    // create by Hero
    //
    //
    {
        class: 'HeroCheckBox',
        checked: true, // 选中 boolean
        selectedImage: '', // 自定义选中图片
        unselectedImage: '', // 自定义非选中图片
        click: {
            datas: [
                {
                    name: 'toast',
                    text: 'You are a hero !'
                }
            ]
        }, // 点击时候发送的对象
        testCase: [
            {
                checked: true, // 选中 boolean
                selectedImage: '', // 自定义选中图片
                unselectedImage: '', // 自定义非选中图片
                click: {
                    datas: [
                        {
                            name: 'toast',
                            text: 'You are a hero !'
                        }
                    ]
                },
                frame: {
                    x: '0',
                    y: '0',
                    w: '1x',
                    h: '1x'
                },
                desc: '恢复默认值'
            }, {
                frame: {
                    x: '0.1x',
                    y: '10',
                    r: '0.1x',
                    h: '200'
                },
                desc: '测试x值为相对值'
            }, {
                selectedImage: 'https://www.materialui.co/materialIcons/toggle/check_box_black_144x144.png',
                unselectedImage: 'https://www.materialui.co/materialIcons/toggle/check_box_outline_blank_black_144x144.png',
                desc: '测试自定义图片'
            }
        ]
    },
    // HeroDevice
    // create by Hero
    //
    //
    {
        class: 'HeroDevice',
        getInfo: {
            'sysInfo': {},
            'appInfo': {},
            'deviceInfo': {}
        },
        // 获取系统信息deviceInfo:true,sysInfo:true,channel:true,UMDeviceToken:true,deviceId:true
        copy: '', // copy字符串
        paste: true, // copy的字符串回送
        testCase: [
            {
                getInfo: {
                    'sysInfo': {},
                    'appInfo': {},
                    'deviceInfo': {}
                },
                copy: '', // copy字符串
                paste: true,
                desc: '恢复默认值'
            }, {
                getInfo: {
                    'channel': {},
                    'UMDeviceToken': {},
                    'deviceId': {}
                },
                desc: '测试其他系统信息'
            }, {
                getAppList: {},
                desc: '测试获取已安装App列表'
            }

        ]
    },
    // HeroLocationView
    // create by Hero
    //
    //
    {
        class: 'HeroLocationView',
        coordinate: {
            la: 34.2222,
            lo: 131.99222929
        }, // 地图经纬度
        // fetch_coordinate:{},                     //回馈当前经纬度
        name: 'testing',
        testCase: [
            {
                coordinate: {
                    la: 34.2222,
                    lo: 131.99222929
                },
                frame: {
                    x: '0',
                    y: '0',
                    w: '1x',
                    h: '1x'
                },
                desc: '恢复默认值'
            }, {
                frame: {
                    x: '0.1x',
                    y: '10',
                    r: '0.1x',
                    h: '200'
                },
                desc: '测试x值为相对值'
            }, {
                name: 'testing',
                fetch_coordinate: {
                    get: 'location'
                },
                desc: '测试获取当前位置'
            }
        ]
    },
    // HeroLockPatternView
    // create by Hero
    //
    //
    {
        class: 'HeroLockPatternView',
        tintColor: 'ff0000', // 选中的色
        color: 'ffffff', // 非选中的色
        track: true, // 是否显示轨迹
        bigTrack: true, // 选中的是否填充满
        values: [
            1, 2, 3
        ], // 当前选中的元素
        action: {
            'path': 'select'
        }, // 滑动中发送的对象
        testCase: [
            {
                tintColor: 'ff0000', // 选中的色
                color: 'ffffff', // 非选中的色
                track: true, // 是否显示轨迹
                bigTrack: true, // 选中的是否填充满
                values: [
                    1, 2, 3
                ], // 当前选中的元素
                action: {
                    'path': 'select'
                }, // 滑动中发送的对象
                frame: {
                    x: '0',
                    y: '0',
                    w: '1x',
                    h: '1x'
                },
                desc: '恢复默认值'
            }, {
                frame: {
                    x: '0.1x',
                    y: '10',
                    r: '0.1x',
                    h: '200'
                },
                desc: '测试x值为相对值'
            }, {
                tintColor: '00bd8c',
                color: '000000',
                desc: '测试color'
            }
        ]
    },
    // HeroPickerView
    // create by Hero
    //
    //
    {
        class: 'HeroPickerView',
        type: '', // date表示日期，当为date的时候其它数据源就不需要了
        hideToolBar: false, // toolBar隐藏
        frame: {}, // 如果设置frame，元素位置在界面当中，否则为下方present
        dateMode: '', // UIDatePickerModeTime
        // UIDatePickerModeDate
        // UIDatePickerModeDateAndTime
        method: 'show', // 无frame的情况下，开始展示
        datas: [
            {
                title: '1',
                rows: [1, 2, 3]
            }, {
                title: '2',
                rows: [1, 2, 3]
            }
        ], // 数据源[1,2,3]也可以
        selectIndex: {
            section: 0,
            row: 0
        }, // 当前选中
        selectAction: {
            select: true
        }, // 选中发送的对象
        testCase: [
            {
                type: 'date',
                desc: '测试选择日期',
                method: 'show'
            }, {
                type: 'date',
                dateMode: 'UIDatePickerModeTime',
                desc: '测试选择时间',
                method: 'show'
            }
        ]
    },
    // HeroScanBarCodeView
    // create by Hero
    //
    //
    {
        class: 'HeroScanBarCodeView',
        getBarCode: {
            getBarCode: true
        }, // 获得code后发送的对象
        testCase: []
    },
    // HeroScrollView
    // create by Hero
    //
    //
    {
        class: 'HeroScrollView',
        contentSize: {
            x: '320',
            y: '1000'
        }, // iOS设置内容大小
        contentOffset: {
            x: '0',
            y: '0'
        }, // 当前位置
        frame: {
            w: '1x',
            y: '0',
            h: '1x'
        },
        testCase: [

            {
                contentSize: {
                    x: '320',
                    y: '1000'
                }, // iOS设置内容大小
                contentOffset: {
                    x: '0',
                    y: '0'
                }, // 当前位置
                subViews: [],
                frame: {
                    x: '0',
                    y: '0',
                    w: '1x',
                    h: '1x'
                },
                desc: '恢复默认值'
            }, {
                subViews: [

                    {
                        parent: 'testing',
                        class: 'HeroTextField',
                        name: 'amountInput',
                        frame: {
                            w: '125',
                            h: '40'
                        },
                        center: {
                            x: '0.5x',
                            y: '0.5x'
                        },
                        size: '33',
                        text: 'Number',
                        alignment: 'center',
                        type: 'number',
                        textFieldDidEndEditing: {
                            textfield: 'amountInput'
                        }
                    }, {
                        class: 'HeroLabel',
                        parent: 'testing',
                        frame: {
                            x: '0',
                            h: '17',
                            b: '0',
                            w: '26'
                        },
                        alignment: 'right',
                        size: 18,
                        hAuto: true,
                        wAuto: true,
                        name: 'label1',
                        text: 'Bottom Label'
                    }, {
                        class: 'HeroLabel',
                        parent: 'testing',
                        frame: {
                            x: '0',
                            h: '17',
                            b: '0',
                            w: '26'
                        },
                        yOffset: 'label1+20',
                        alignment: 'right',
                        size: 18,
                        text: 'Behind Bottom Label',
                        hAuto: true,
                        wAuto: true
                    }
                ],
                desc: '测试增加子View'

            }

        ]
    },
    // HeroSegmentControl
    // create by Hero
    //
    //
    {
        class: 'HeroSegmentControl',
        dataSource: [
            {
                title: 'one'
            }, {
                title: 'two'
            }, {
                title: 'three'
            }
        ], // datasource
        selectedSegmentIndex: 0, // 选中tab index
        action: [
            {
                select: true,
                value: 'one'
            }, {
                select: true,
                value: 'two'
            }, {
                select: true,
                value: 'three'
            }
        ], // 选中发送的对象
        testCase: [
            {
                dataSource: [
                    {
                        title: 'one'
                    }, {
                        title: 'two'
                    }, {
                        title: 'three'
                    }
                ], // datasource
                selectedSegmentIndex: 0, // 选中tab index
                action: [
                    {
                        select: true,
                        value: 'one'
                    }, {
                        select: true,
                        value: 'two'
                    }, {
                        select: true,
                        value: 'three'
                    }
                ],
                frame: {
                    x: '0',
                    y: '0',
                    w: '1x',
                    h: '1x'
                },
                desc: '恢复默认值'
            }, {
                frame: {
                    x: '0.1x',
                    y: '10',
                    r: '0.1x',
                    h: '200'
                },
                desc: '测试x值为相对值'
            }, {
                selectedSegmentIndex: 0,
                desc: '测试修改当前选中index'
            }, {
                dataSource: [
                    {
                        title: 'one'
                    }, {
                        title: 'two'
                    }
                ],
                action: [
                    {
                        select: true,
                        value: 'new one'
                    }, {
                        select: true,
                        value: 'new two'
                    }
                ],
                desc: '测试dataSource更新'
            }
        ]
    },
    // HeroSlider
    // create by Hero
    //
    //
    {
        class: 'HeroSlider',
        value: 0.5, // value
        change: {
            name: 'test'
        }, // value 变化时候发送的对象
        end: {
            name: 'test'
        }, // value 变化时候发送的对象
        testCase: [
            {
                value: 0.5, // value
                change: {
                    name: 'test'
                }, // value 变化时候发送的对象
                end: {
                    name: 'test'
                },
                frame: {
                    x: '0',
                    y: '0',
                    w: '1x',
                    h: '1x'
                },
                desc: '恢复默认值'
            }, {
                frame: {
                    x: '0.1x',
                    y: '10',
                    r: '0.1x',
                    h: '200'
                },
                desc: '测试x值为相对值'
            }, {
                value: 0.8,
                desc: '测试Value更新'
            }
        ]
    },
    // HeroSwitch
    // create by Hero
    //
    //
    {
        class: 'HeroSwitch',
        value: true, // value
        click: {
            name: 'test'
        }, // value 变化时候发送的对象
        testCase: [
            {
                value: true, // value
                click: {
                    name: 'test'
                },
                frame: {
                    x: '0',
                    y: '0',
                    w: '1x',
                    h: '1x'
                },
                desc: '恢复默认值'
            }, {
                frame: {
                    x: '0.1x',
                    y: '10',
                    r: '0.1x',
                    h: '200'
                },
                desc: '测试x值为相对值'
            }, {
                value: false,
                desc: '测试Value更新'
            }
        ]
    },
    // HeroTableView
    // create by Hero
    //
    //
    {
        class: 'HeroTableView',
        name: 'testing',
        pullRefresh: {
            'idle': '正在由HER提供实时数据',
            'pulling': '检查服务器连接',
            'refreshing': '重新建立连接',
            'action': [
                {
                    'datas': {
                        name: 'testing',
                        method: 'closeRefresh'
                    }
                }, {
                    'datas': {
                        name: 'toast',
                        text: 'You are a hero !'
                    }
                }
            ]
        },
        drawMore: {
            'idle': '正在由HER提供实时数据',
            'pulling': '检查服务器连接',
            'refreshing': '重新建立连接',
            'action': [
                {
                    'datas': {
                        name: 'testing',
                        method: 'noMoreData'
                    }
                }, {
                    'datas': {
                        name: 'toast',
                        text: 'You are a hero !'
                    }
                }
            ]
        },
        header: {}, // view
        footer: {}, // view
        dataIndex: ['A'], // 索引 ['a','b','c']
        data: [
            {
                'sectionTitle': 'A',
                'rows': [
                    {
                        'p': '四川',
                        'title': '阿坝'
                    }, {
                        'p': '新疆',
                        'title': '阿克苏'
                    }, {
                        'p': '内蒙古',
                        'title': '阿拉善盟'
                    }
                ]
            }
        ], // 数据源
        height: 50, // 默认行高
        contentOffset: {
            x: '0',
            y: '0'
        }, // {x:'0',y:'100'}
        separatorColor: 'ffffff', // 分割线颜色
        fragmentData: {}, //
        // {command:'replace',section:0,data:[]} 替换一个section
        // {command:'append',data:[]} 添加一个section
        method: '', // closeRefresh 关闭下拉刷新
        // closeLoadMore 关闭load more
        // noMoreData 设置为无更多数据
        // resetMoreData 关闭更多数据
        // showLoadMore 显示更多数据

        testCase: [
            {
                header: {}, // view
                footer: {}, // view
                dataIndex: ['A'], // 索引 ['a','b','c']
                data: [
                    {
                        'sectionTitle': 'A',
                        'rows': [
                            {
                                'p': '四川',
                                'title': '阿坝'
                            }, {
                                'p': '新疆',
                                'title': '阿克苏'
                            }, {
                                'p': '内蒙古',
                                'title': '阿拉善盟'
                            }
                        ]
                    }
                ],
                separatorColor: 'ffffff',
                frame: {
                    x: '0',
                    y: '0',
                    w: '1x',
                    h: '1x'
                },
                fragmentData: {},
                desc: '恢复默认值'
            }, {
                frame: {
                    x: '0',
                    y: '0',
                    r: '0.1x',
                    h: '1x'
                },
                desc: '测试frame'
            }, {
                fragmentData: {
                    command: 'append',
                    data: [
                        {
                            'sectionTitle': 'B',
                            'rows': [
                                {
                                    'p': '河南',
                                    'title': '周口'
                                }, {
                                    'p': '湖南',
                                    'title': '株洲'
                                }, {
                                    'p': '河南',
                                    'title': '驻马店'
                                }
                            ]
                        }
                    ]
                },
                dataIndex: [
                    'A', 'B'
                ],
                desc: '测试fragmentData'
            }, {
                header: {
                    class: 'HeroLabel',
                    frame: {
                        x: '0',
                        y: '0',
                        w: '1x',
                        h: 20
                    },
                    text: '热门城市Header',
                    size: 12,
                    textColor: '999999'
                },
                desc: '测试Header'
            }, {
                footer: {
                    class: 'HeroLabel',
                    frame: {
                        x: '0',
                        y: '0',
                        w: '1x',
                        h: 20
                    },
                    text: '热门城市Footer',
                    size: 12,
                    textColor: '999999'
                },
                desc: '测试Footer'
            }, {
                data: [
                    {
                        'sectionTitle': 'A',
                        'rows': [
                            {
                                'p': '四川',
                                'title': '阿坝',
                                'height': 30
                            }, {
                                'p': '新疆',
                                'title': '阿克苏',
                                'height': 60
                            }, {
                                'p': '内蒙古',
                                'title': '阿拉善盟',
                                'height': 40
                            }
                        ]
                    }
                ],

                desc: '测试Height'
            }, {
                separatorColor: '00bc8d',
                desc: '测试separatorColor'
            }, {
                method: 'closeRefresh',
                desc: '测试stopRefresh'
            }, {
                method: 'resetMoreData',
                desc: '测试resetNoMore'
            }, {
                class: '',
                pullRefresh: {
                    'idle': '正在由HER提供实时数据',
                    'pulling': '检查服务器连接',
                    'refreshing': '重新建立连接',
                    'action': [
                        {
                            'datas': {
                                name: 'toast',
                                text: 'You are a hero !'
                            }
                        }
                    ]
                },
                desc: '测试pullRefresh'
            }
        ]
    },
    // HeroTableViewCell
    // create by Hero
    //
    //
    {
        class: 'HeroTableView',
        name: 'testing',
        displayName: 'HeroTableViewCell',
        header: {}, // view
        footer: {}, // view
        dataIndex: ['A'], // 索引 ['a','b','c']
        data: [
            {
                'sectionTitle': 'A',
                'rows': [
                    {
                        'p': '四川',
                        'title': '阿坝',
                        'textValue': '自治州'
                    }, {
                        'p': '新疆',
                        'title': '阿克苏',
                        'image': ''
                    }, {
                        'p': '内蒙古',
                        'title': '阿拉善盟'
                    }
                ]
            }
        ], // 数据源
        height: 50, // 默认行高
        contentOffset: {
            x: '0',
            y: '0'
        }, // {x:'0',y:'100'}
        separatorColor: 'ffffff', // 分割线颜色
        fragmentData: {}, //
        // {command:'replace',section:0,data:[]} 替换一个section
        // {command:'append',data:[]} 添加一个section
        method: '',
        testCase: [
            {
                data: [
                    {
                        'sectionTitle': 'A',
                        'rows': [
                            {
                                'p': '四川',
                                'title': '阿坝',
                                'textValue': '自治州'
                            }, {
                                'p': '新疆',
                                'title': '阿克苏',
                                'image': ''
                            }, {
                                'p': '内蒙古',
                                'title': '阿拉善盟'
                            }
                        ]
                    }
                ], // 数据源
                desc: '恢复默认值',
                height: 50
            }, {
                data: [
                    {
                        'sectionTitle': 'A',
                        'rows': [
                            {
                                'p': '四川',
                                'title': '阿坝',
                                'textValue': '自治州'
                            }, {
                                'p': '新疆',
                                'title': '阿克苏',
                                'image': 'https://www.dianrong.com/static/images/public/home/site-logo-1@1x.png'
                            }, {
                                'p': '内蒙古',
                                'title': '阿拉善盟'
                            }
                        ]
                    }
                ],
                desc: '测试HeroTableViewCell属性'
            }

        ]
    },
    // HeroTextField
    // create by Hero
    //
    //
    {
        class: 'HeroTextField',
        text: 'Hero', // text
        secure: false, // 是否为密码框
        placeHolder: '', // 占位字符串
        alignment: 'left', // center left right
        type: '', // number
        // email
        // phone
        // pin
        'return': true, // 会车按钮done
        maxLength: 6, // 允许输入的最大长度
        allowString: '', // 允许输入的字符
        textColor: '', // 字体颜色
        placeHolderColor: '', // 占位字体颜色
        size: 14, // 输入框字体大小
        clearButtonMode: 'whileEditing', // 输入的时候显示
        textFieldDidEditing: {}, // 输入时候发送的对象
        textFieldDidBeginEditing: {},
        textFieldDidEndEditing: {},
        testCase: [
            {
                text: 'Hero', // text
                secure: false, // 是否为密码框
                placeHolder: '', // 占位字符串
                alignment: 'left', // center left right
                type: '', // number
                // email
                // phone
                // pin
                'return': true, // 会车按钮done
                maxLength: 6, // 允许输入的最大长度
                allowString: '', // 允许输入的字符
                textColor: '', // 字体颜色
                placeHolderColor: '', // 占位字体颜色
                size: 14, // 输入框字体大小
                clearButtonMode: 'whileEditing', // 输入的时候显示
                textFieldDidEditing: {}, // 输入时候发送的对象
                textFieldDidBeginEditing: {},
                textFieldDidEndEditing: {},
                desc: '恢复默认值'
            }, {
                secure: true,
                desc: '测试secure'
            }, {
                placeHolder: 'This is placeHolder',
                desc: '测试placeHolder'
            }, {
                placeHolderColor: '00bc8d',
                desc: '测试placeHolder color'
            }, {
                alignment: 'left',
                desc: '测试alignment'
            }, {
                alignment: 'right',
                desc: '测试alignment'
            }, {
                alignment: 'center',
                desc: '测试alignment'
            }, {
                type: 'number',
                desc: '测试type为number'
            }, {
                type: 'phone',
                desc: '测试type为phone'
            }, {
                type: 'pin',
                desc: '测试type为pin'
            }, {
                maxLength: 9,
                desc: '测试maxLength'
            }, {
                allowString: 'abcd',
                desc: '测试allowString'
            }, {
                textColor: '999999',
                desc: '测试textColor'
            }, {
                size: 24,
                desc: '测试size'
            }, {
                textColor: '999999',
                desc: '测试textColor'
            }, {
                text: '',
                formatStyle: 'bankCard',
                desc: '测试formatStyle为bankCard'
            }, {
                text: '',
                formatStyle: 'money',
                desc: '测试formatStyle为money'
            }, {
                text: '',
                formatStyle: 'fixPhone',
                desc: '测试formatStyle为fixPhone'
            }

        ]
    },
    // HeroTextView
    // create by Hero
    //
    //
    {
        class: 'HeroTextView',
        text: '', // text
        appendText: '', // 结尾增加字符串
        placeHolder: '', // 占位字符串
        enableReturn: true, // 会车按钮done
        editable: true, // 允许输入
        textColor: '', // 字体颜色
        size: 14, // 输入框字体大小
        textFieldDidEditing: {}, // 输入时候发送的对象
        testCase: [
            {
                frame: {
                    x: '0',
                    y: '0',
                    w: '1x',
                    h: '1x'
                },
                text: '', // text
                appendText: '', // 结尾增加字符串
                placeHolder: '', // 占位字符串
                enableReturn: true, // 会车按钮done
                editable: true, // 允许输入
                textColor: '', // 字体颜色
                size: 14,
                desc: '恢复默认值'
            }, {
                frame: {
                    x: '0.1x',
                    y: '10',
                    r: '0.1x',
                    h: '200'
                },
                desc: '测试x值为相对值'
            }, {
                appendText: 'Hero',
                desc: '测试结尾增加字符串'
            }
        ]
    }

];

export default heroDefines;
