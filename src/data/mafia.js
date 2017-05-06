var mafiaDefines = [

      // 元素的基本形式、一切其它元素都“继承”自它
      // create by Hero
      //
      //

      // DRCell in TableView
    {
        class: 'DRTableView',
        package: 'mafia',
        frame: { w: '1x', h: '1x' },
        name: 'list',
        samples: {},
        data: [
            {
                sectionTitle: 'C1单行带说明的列表项',
                rows:
                [
              { class: 'DRCell1', package: 'mafia', title: { text: '标题文字' }, description: { 'text': '说明文字', color: '3213ef' } },
              { class: 'DRCell1', package: 'mafia', title: { text: '手机号' }, description: { 'text': '说明文字' } }
                ]
            },
            {
                sectionTitle: 'C2单行带跳转的列表项',
                rows:
                [
              { class: 'DRCell2', package: 'mafia', title: { text: '标题文字' } },
              { class: 'DRCell2', package: 'mafia', title: { text: '张晓红' } }
                ]
            },
            {
                sectionTitle: 'C3单行带按钮的列表项',
                rows:
                [
              { class: 'DRCell3', package: 'mafia', title: { text: '标题文字' }, button: { 'text': '说明文字', click: { 'click': 'first' }, enable: 'true' } },
              { class: 'DRCell3', package: 'mafia', title: { text: '张晓红' }, button: { 'text': '说明文字', click: { 'click': 'second' }, enable: 'true' } }
                ]
            },
            {
                sectionTitle: 'C4单行带图标、说明的列表项',
                rows:
                [
              { class: 'DRCell4', package: 'mafia', image: { image: 'szfzyh' }, title: { text: '标题文字' }, description: { 'text': '说明/数字' } },
              { class: 'DRCell4', package: 'mafia', image: { image: 'szfzyh' }, title: { text: '标题文字' }, description: { 'text': '说明/数字' } }
                ]
            },
            {
                sectionTitle: 'C5单行带跳转、说明的列表项',
                rows:
                [
              { class: 'DRCell5', package: 'mafia', title: { text: '标题文字' }, description: { 'text': '说明/数字' } },
              { class: 'DRCell5', package: 'mafia', title: { text: '张晓红' }, description: { 'text': '说明/数字' } }
                ]
            },
            {
                sectionTitle: 'C6单行带跳转、图标、说明的列表项',
                rows:
                [
              { class: 'DRCell6', package: 'mafia', image: { image: 'szfzyh' }, title: { text: '标题文字' }, description: { 'text': '说明文字' } },
              { class: 'DRCell6', package: 'mafia', image: { image: 'szfzyh' }, title: { text: '手机号' }, description: { 'text': '说明文字' } }
                ]
            },
            {
                sectionTitle: 'C7双行带说明文字的列表项',
                rows:
                [
              { class: 'DRCell7', package: 'mafia', title: { text: '标题文字' }, subtitle: { text: '说明文字', color: 'd70c18' }, description: { 'text': '数字' } },
              { class: 'DRCell7', package: 'mafia', title: { text: '客户名' }, subtitle: { text: '贷款类型' }, description: { 'text': '审核中' } }
                ]
            },
            {
                sectionTitle: 'C8双行带文字说明的列表项-disable',
                rows:
                [
              { class: 'DRCell8', package: 'mafia', enable: 'false', title: { text: '标题文字' }, subtitle: { text: '说明文字' }, description: { 'text': '数字' } },
              { class: 'DRCell8', package: 'mafia', title: { text: '客户名' }, subtitle: { text: '贷款类型' }, description: { 'text': '审核中' } }
                ]
            },
            {
                sectionTitle: 'C9双行带标示、说明的列表项',
                rows:
                [
              { class: 'DRCell9', package: 'mafia', title: { text: '标题文字' }, subtitle: { text: '说明文字' }, description: { 'text': '数字' } },
              { class: 'DRCell9', package: 'mafia', title: { text: '客户名' }, subtitle: { text: '贷款类型' }, description: { 'text': '审核中' } }
                ]
            },
            {
                sectionTitle: 'C10双行带数值信息的列表项',
                rows:
                [
              { class: 'DRCell10', package: 'mafia', title: { text: '标题文字' }, centertitle: { text: '2015-06-17' }, subtitle: { text: '说明文字' }, description: { 'text': '数字' } },
              { class: 'DRCell10', package: 'mafia', title: { text: '客户名' }, centertitle: { text: '2015-06-17' }, subtitle: { text: '贷款类型' }, description: { 'text': '审核中' } }
                ]
            },
            {
                sectionTitle: 'C11单行显示数据的列表项',
                rows:
                [
              { class: 'DRCell11', package: 'mafia', title: { text: '数字标题文字' }, description: { 'text': '9,000,000' } },
              { class: 'DRCell11', package: 'mafia', title: { text: '数字标题文字' }, description: { 'text': '数字' } }
                ]
            },
            {
                sectionTitle: 'C12单选列表项',
                rows:
                [
              { class: 'DRCell12', package: 'mafia', title: { text: 'cell standard' }, selected: true },
              { class: 'DRCell12', package: 'mafia', title: { text: 'cell standard' }, selected: false }
                ]
            },
            {
                sectionTitle: 'C13单选列表项-按钮',
                rows:
                [
              { class: 'DRCell13', package: 'mafia', title: { text: '标题文字' }, description: { 'text': '说明文字' }, selected: true },
              { class: 'DRCell13', package: 'mafia', title: { text: '标题文字' }, description: { 'text': '说明文字' }, selected: false }
                ]
            },
            {
                sectionTitle: 'C14带大图标、跳转、标签和显示栏',
                sectionFootTitle: '框下说明字eg:以上为borrow可能用到的cell，对其进行简单封装，方便开发者实用，省去大量重复时间。以上为borrow可能用到的cell，对其进行简单封装，方便开发者实用，省去大量重复时间。以上为borrow可能用到的cell，对其进行简单封装，方便开发者实用，省去大量重复时间。',
                rows:
                [
              { class: 'DRCell14', package: 'mafia', image: { image: 'szfzyh' }, title: { text: '标题文字' }, description: { 'text': '(选填)' }, tags: [{ text: '标签', color: 'ffac3a', backgroundColor: 'fff8e9' }, { text: '超大标签', color: 'd70c18', backgroundColor: 'fff8e9' }] },
              { class: 'DRCell14', package: 'mafia', image: { image: 'szfzyh' }, title: { text: '标题文字' }, description: { 'text': '(必填)' }, tags: [{ text: '超大标签大大', color: 'ffac3a', backgroundColor: 'fff8e9' }] }
                ]
            },
            {
                sectionTitle: 'C141带支行银行卡显示',
                rows:
                [
              { class: 'DRCell141', package: 'mafia', image: { image: 'zsyh' }, bankName: { text: '招商银行' }, cardType: { text: '储蓄卡' }, cardNum: { text: '**** **** **** 9876' }, branchName: { text: '上海招商银行有限公司张江支行' }, tags: [{ text: '放款', color: '00bd8c', backgroundColor: 'f0fcf9' }] }
                ]
            },
            {
                sectionTitle: 'C142不带支行银行卡显示',
                rows:
                [
              { class: 'DRCell142', package: 'mafia', image: { image: 'zsyh' }, bankName: { text: '招商银行' }, cardType: { text: '储蓄卡' }, cardNum: { text: '**** **** **** 9876' }, tags: [{ text: '代扣', color: 'ffa90c', backgroundColor: 'fff7e7' }, { text: '手动还款', color: 'a1c6f2', backgroundColor: 'f3f9ff' }] }
                ]
            },
            {
                sectionTitle: 'C15通知',
                rows:
                [
              { class: 'DRCell15', package: 'mafia', checked: true, title: { text: '标题文字' }, description: { 'text': '打网球ddddddd的期望的期望的期望的期望的期望的' }, date: { text: '昨天' } },
              { class: 'DRCell15', package: 'mafia', checked: false, title: { text: '标题文字' }, description: { 'text': '(必填)' }, date: { text: '今天' } }
                ]
            }
        ]

    },


      // HeroImageUploadView
    {
        class: 'HeroImageUploadView',
        package: 'mafia',
        frame: { x: '0', y: '20', w: '1x', h: '109' },
        backgroundColor: 'ffffff',
        name: 'upload',
        maxLines: 4,
        uploadName: 'file_MARRIAGE_CERTIFICATE_',
        uploadAction: { uploaded: 'uploadRet' },
        samples: {}
    },


      // DRMapView
    {
        class: 'DRMapView',
        samples: {},
        package: 'mafia',
        name: 'map',
        frame: { x: '0', r: '0', t: '120', b: '0' },
        backgroundColor: '000000',
        go: { lo: 121.5372, la: 31.182835 }
    },

      // DRPickerView
    {
        class: 'DRPickerView',
        samples: {},
        package: 'mafia',
        name: 'city',
        city: true,
        show: true

    },

      // DRSVGLoadingView
    {
        class: 'DRSVGLoadingView',
        samples: {},
        package: 'mafia',
        name: 'svgLoadingView',
        frame: { 'x': '15', 'r': '15', 'y': '30', 'h': '80' },
        bottomTextArray: ['请确保信息真实无误',
            '完成电商认证可提高审批通过率',
            '您提供的信息将被严格加密',
            '点融网已成功为百万用户提供借款',
            '信用的积累从现在开始'],
        action: 'start', countInfo: { from: 0, to: 90, duration: 6 }
    },

   // DRSliderView
    {
        class: 'DRSliderView',
        samples: {},
        package: 'mafia',
        frame: { x: '10', r: '10', t: '84', h: '54' },
        color: '999999',
        tintColor: '00bc8d',
        values: ['1月', '6月', '12月', '18月', '24月']
    },

        // DRButton

    {
        class: 'UIView',
        displayName: 'DRButton',
        samples: {},
        subViews: [{
            class: 'DRButton',
            package: 'mafia',
            DRStyle: 'B1',
            enable: 1,
            frame: { 'x': '15', 'r': '15', 'y': '30', 'h': '45' },
            title: 'B1 Button',
            click: { datas: [{ name: 'toast', text: '点击了B1按钮' }] }
        },
        {
            class: 'DRButton',
            package: 'mafia',
            DRStyle: 'B2',
            enable: 1,
            frame: { x: '15', r: '15', y: '90', h: '45' },
            title: 'B2 Button',
            click: { datas: [{ name: 'toast', text: '点击了B2按钮' }] }
        },
        {
            class: 'DRButton',
            package: 'mafia',
            DRStyle: 'B3',
            enable: 1,
            frame: { x: '15', r: '15', y: '150', h: '45' },
            title: 'B3 Button',
            click: { datas: [{ name: 'toast', text: '点击了B3按钮' }] }
        },
        {
            class: 'DRButton',
            package: 'mafia',
            DRStyle: 'B4',
            enable: 1,
            frame: { 'x': '15', 'r': '15', 'y': '210', 'h': '45' },
            title: 'B4 Button',
            click: { datas: [{ name: 'toast', text: '点击了B4按钮' }] }
        },
        {
            class: 'DRButton',
            package: 'mafia',
            DRStyle: 'B5',
            enable: 1,
            frame: { 'x': '15', 'r': '15', 'y': '270', 'h': '45' },
            title: 'B5 Button',
            click: { datas: [{ name: 'toast', text: '点击了B5按钮' }] }
        }]
    },

      // DRTextField
    {
        class: 'UIView',
        displayName: 'DRTextField',
        samples: {},
        backgroundColor: 'ffffff',
                  // 以下不会共存
        subViews: [
            {
                class: 'DRTextField',
                package: 'mafia',
                frame: { x: '15', r: '15', y: '0', h: '50' },
                placeHolder: '输入标题',
                rightImage: {
                    'image': 'drcomponenticon',
                    'click': { 'click': 'imageClick' }
                }
            },
            {
                class: 'DRTextField',
                package: 'mafia',
                name: 'sendBtn2',
                frame: { x: '15', r: '15', y: '50', h: '50' },
                placeHolder: '输入验证码',
                rightButton: {
                    'title': '点击发送',
                    'repeatTitle': '重新发送',
                    'click': { 'click': 'sendCode2' },
                    'time': '6',
                    'isSendFirst': false // 默认启动发送
                }
                          // hideBottomLine:true,
            },
            {
                class: 'DRTextField',
                package: 'mafia',
                frame: { x: '15', r: '15', y: '100', h: '50' },
                placeHolder: '输入密码',
                drSecure: { 'secure': true } // 带小眼睛
                          // hideBottomLine:true,
            },
            {
                class: 'DRTextField',
                package: 'mafia',
                frame: { x: '15', r: '15', y: '150', h: '50' },
                placeHolder: '输入金额',
                unitText: '单位',
                formatStyle: 'money',
                textFieldDidEditing: { textfield: 'money' },
                hideBottomLine: false
            },
            {
                class: 'DRTextField',
                package: 'mafia',
                frame: { x: '15', r: '15', y: '200', h: '50' },
                placeHolder: '输入银行卡号',
                formatStyle: 'bankCard',
                textFieldDidEditing: { textfield: 'bankNum' },
                hideBottomLine: false
            },
            {
                class: 'DRTextField',
                package: 'mafia',
                frame: { x: '15', r: '15', y: '250', h: '50' },
                placeHolder: '输入家里座机',
                formatStyle: 'fixPhone',
                textFieldDidEditing: { textfield: 'bankNum' },
                hideBottomLine: false
            },
            {
                class: 'DRTextField',
                package: 'mafia',
                frame: { x: '15', r: '15', y: '300', h: '50' },
                placeHolder: '输入标题',
                text: '禁止编辑',
                drLocked: true,
                hideBottomLine: false
            },
            {
                class: 'DRTextField',
                package: 'mafia',
                frame: { x: '15', r: '15', y: '350', h: '50' },
                title: '设定文字',
                placeHolder: '输入标题',
                hideBottomLine: false
            }
        ]
    },
  // DRTextView
    {
        class: 'DRTextView',
        package: 'mafia',
        frame: { x: '15', r: '15', y: '50', h: '200' },
        samples: {},
        floatingPlaceHolder: '可提供多行输入',
        textFieldDidEditing: { textView: 'editing' }
    },


  // DRSelectView
    {
        class: 'DRSelectView',
        package: 'mafia',
        samples: {},

        name: 'childNumSelected',
        frame: { x: '5', r: '0', y: '0', h: '50' },
        title: '选择',
        selectItems: [{ title: '标题1', description: '描述1' }, { title: '标题2', description: '描述2' }],
        selectAction: { selected: 'childNumSelected' }

    },

  // DRScrollView
    {

        class: 'DRScrollView',
        package: 'mafia',
        samples: {},
        backgroundColor: '333333',
        frame: { w: '1x', h: '1x' },
        DRPullRefresh: {
            action: [
          ({ datas: [{ name: 'toast', text: 'refreshing' }] }),
          { 'click': 'refresh' }
            ],
            color: '00bc8d'
        },
        name: 'list1',
        subViews: [
            {
                class: 'HeroLabel',
                frame: { w: '1x', x: '0', y: '150', h: '40' },
                alignment: 'center',
                textColor: 'ffffff',
                name: 'toast',
                size: '16',
                text: 'pull refresh'
            }
        ]


    },

  // MafiaContactView
    {
        class: 'MafiaContactView',
        package: 'mafia',
        samples: {},
        name: 'contact2',
        hidden: true,
        show: true,
        pickContact: { pick: 'contact2' }
    },


  // MafiaInfiniteScrollView
    {
        class: 'MafiaInfiniteScrollView',
        package: 'mafia',
        samples: {},
        name: 'adView',
        frame: { w: '1x', h: '110' },
        data: [
      { url: 'https://forum-img.dianrong.com/data/attachment/portal/201605/18/172651mshw8xhvle5xi8bv.jpg', action: { command: 'goto:http://mp.weixin.qq.com/s?__biz=MjM5NjA5NDczMg==&mid=504783141&idx=1&sn=f7b96b8f2bf4ab399dbdb7184bef37f7#rd' } },
      { url: 'https://forum-img.dianrong.com/data/attachment/portal/201605/16/142329po6jz0mrgfm2fj0g.jpg', action: { command: 'goto:https://mp.weixin.qq.com/s?__biz=MjM5NjA5NDczMg==&mid=2652266762&idx=1&sn=67edd3870dd32eff3f452b8e667dd4f9&key=b28b03434249256bfc7b6fe5d91528d0e5e3bfe3552810e950cdf1361d4c1d257af4d1a97a217b4f17c6869cd6ed408c&ascene=0&uin=MTE0NTM2Nzc0Mg%3D%3D&devicetype=iMac+MacBookAir7%2C2+OSX+OSX+10.11.3+build(15D21)&version=11020201&pass_ticket=15kb334KuBULlrlkhe21CG%2B81TDFg5hO2XFwCm49ymD5HA1wEIczQqXkY6YYOFyv' } },
      { url: 'https://forum-img.dianrong.com/data/attachment/portal/201605/13/123142boyhpfp66llolsl6.jpg', action: { command: 'goto:https://mp.weixin.qq.com/s?__biz=MjM5NjA5NDczMg==&mid=504782979&idx=1&sn=8416da517b3a8e9bc9c372ae6cff4ecb#rd' } }

        ]
    },

  // DRCodeView
    {
        class: 'DRCodeView',
        package: 'mafia',
        samples: {},
        name: 'authenticationCode',
        frame: { x: '15', r: '15', y: '10', h: '60' },
        count: 6,
        size: 40,
        textFieldDidEditing: { textfield: 'authenticationCode' }
    },

  // MafiaLabel
    {
        class: 'MafiaLabel',
        package: 'mafia',
        samples: {},
        frame: { x: '15', r: '15', y: '10', h: '60' },
        text: 'This is a Label',
        size: 24,
        textColor: '999999'
    },

  // MafiaLabel
    {
        class: 'UIView',
        displayName: 'MafiaSecureLabel',
        samples: {},
        backgroundColor: 'ffffff',
        subViews:
        [
            {
                class: 'MafiaSecureLabel',
                package: 'mafia',
                samples: {},
                frame: { x: '15', r: '15', y: '10', h: '60' },
                phone: '13112345677',
                size: 24,
                textColor: '999999'
            },
            {
                class: 'MafiaSecureLabel',
                package: 'mafia',
                samples: {},
                frame: { x: '15', r: '15', y: '80', h: '60' },
                personId: '310113199991919191',
                size: 24,
                textColor: '999999'
            },
            {
                class: 'MafiaSecureLabel',
                package: 'mafia',
                samples: {},
                frame: { x: '15', r: '15', y: '150', h: '60' },
                bankCard: '1323313313131313333',
                size: 24,
                textColor: '999999'
            }

        ]

    },
    {
        class: 'DRSegmentView',
        name: 'viewpager',
        package: 'mafia',
        samples: {},
        frame: { w: '1x', h: '1x' },
        pages: [
            {
                title: 'tab1',
                tag: 'home',
                childView: {
                    class: 'UIView',
                    frame: { x: '0', y: '10', h: '300', w: '1x' },
                    backgroundColor: '009333',
                    subViews: [
                        {
                            class: 'UIView',
                            frame: { x: '10', r: '10', y: '30', h: '40' },
                            backgroundColor: '00bc8d'

                        },
                        {
                            class: 'DRButton',
                            package: 'mafia',
                            DRStyle: 'B1',
                            enable: 1,
                            frame: { 'x': '15', 'r': '15', 'y': '90', 'h': '45' },
                            title: 'Hide Tab2 Red Dot by Tag',
                            click: { datas: [{ name: 'viewpager', dots: { tag: 'money', hidden: true } }] }
                        },
                        {
                            class: 'DRButton',
                            package: 'mafia',
                            DRStyle: 'B2',
                            enable: 1,
                            frame: { 'x': '15', 'r': '15', 'y': '150', 'h': '45' },
                            title: 'Show Tab2 Red Dot by Index',
                            click: { datas: [{ name: 'viewpager', dots: { index: 1, hidden: false } }] }
                        },
                        {
                            class: 'DRButton',
                            package: 'mafia',
                            DRStyle: 'B3',
                            enable: 1,
                            frame: { 'x': '15', 'r': '15', 'y': '220', 'h': '45' },
                            title: 'Select Tab2 by Index',
                            click: { datas: [{ name: 'viewpager', selectIndex: 1 }] }
                        }
                    ]

                }
            },
            {
                title: 'tab2',
                tag: 'money',
                childView: {
                    class: 'UIView',
              // frame:{y:'100',w:'1x',b:'100'},
                    backgroundColor: '091233',
                    subViews: [
                        {
                            class: 'UIView',
                            frame: { x: '10', r: '10', y: '100', h: '40' },
                            backgroundColor: '00bd12'
                        },
                        {
                            class: 'DRButton',
                            package: 'mafia',
                            DRStyle: 'B4',
                            enable: 1,
                            frame: { 'x': '15', 'r': '15', 'y': '150', 'h': '45' },
                            title: 'Select Tab1 by tag',
                            click: { datas: [{ name: 'viewpager', selectTag: 'home' }] }
                        }

                    ]
                }
            }

        ]
    },
    {
        class: 'DRTelephoneView',
        package: 'mafia',
        name: 'companyPhoneField',
        frame:
          { x: '20', r: '15', y: '50', h: '100' },
        title: '办公电话',
        placeHolder: '区号-电话号码-分机号(选填)',
        infoText: '若办公电话为11位手机号，则区号可不填，请勿填写400电话',
        textFieldDidEditing: { textfield: 'companyPhoneInput' },
        text: { areaCode: '021', phone: '88888888', ext: '6666' },
        testCase: [
            {
                frame: { x: '0.1x', y: '0.7x', r: '0.1x', h: '200' },
                desc: '测试x值为相对值'
            },
            {
                title: '家庭电话',
                desc: '测试title'
            },
            {
                placeHolder: '区号-电话号码-分机号',
                desc: '测试placeHolder'
            },
            {
                infoText: '若办公电话为11位手机号,则...',
                desc: '测试infoText'
            },
            {
                text: { areaCode: '010', phone: '11111111', ext: '2222' },
                desc: '测试text'
            }

        ]
    }
];

export default mafiaDefines;
