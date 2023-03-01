import jwt_decode from "jwt-decode";
import { requestTime } from '../../utils/utils'
const app = getApp();
Page({
  data: {
    products: [],
    language: "",
    content: {},
    filtered: [],
    scrollTop: 0,
    hideTapBar: false,
    chosenCategories: [],
    tabBarData: [],
    userinfo: ""
  },
  updateTabBarData() {
    this.setData({
      ...this.data,
      tabBarData: [...app.tabBarData]
    });
  },
  initFilterCategory(e) {
    if (!this.data.chosenCategories.includes(e.category)) {
      my.showLoading();
      setTimeout(() => {
        my.hideLoading();
        const newCategories = [...this.data.chosenCategories, e.category];
        this.setData({
          ...this.data,
          filtered: app.products.filter(item => {
            return newCategories.every(element => {
              return item.categories.includes(element);
            });
          }),
          chosenCategories: [...newCategories]
        });
      }, 400);
    }
    // this.setData({
    //   ...this.data,
    //   userinfo:'something binded'

    //  });
  },
  deleteAndResetChosenCategory(e) {
    const newCategories = this.data.chosenCategories.filter(item => {
      return item != e.category;
    });
    this.setData({
      ...this.data,
      filtered: app.products.filter(item => {
        return newCategories.every(element => {
          return item.categories.includes(element);
        });
      }),
      chosenCategories: [...newCategories]
    });

  },
  scrollHandler(event) {
    let hideTapBar;
    // hide tapbar while scrolling down
    if (event.detail.scrollTop > this.data.scrollTop && !this.data.hideTapBar) {
      hideTapBar = true;
      // show tapbar while scrolling down
    } else if (
      event.detail.scrollTop < this.data.scrollTop &&
      this.data.hideTapBar
    ) {
      hideTapBar = false;
    } else {
      hideTapBar = this.data.hideTapBar;
    }
    this.setData({
      ...this.data,
      scrollTop: event.detail.scrollTop,
      hideTapBar
    });
  },
  scan() {
    my.scan({
      type: 'qr',
      success: (res) => {
        my.alert({ title: res.code });
      },
    });
  },
  onGetAuthorize() {
    my.getAuthCode({
      success: (res) => {
        console.info(authcode);

        my.getAuthUserInfo({
          scopes: ['auth_user'],
          success: (res) => {
            this.userInfo = res;
            my.alert({ content: "get user success: " + res })
          },
          fail: (res) => {
            my.alert({ content: "get user error: " + res })
          },
        });
        my.alert({ content: "get authcode success: " + res })

      },
      fail: (res) => {
        my.alert({ content: "get authcode error: " + res })
      },
    });
  },
  onLoad(query) {
    // Page load


  },

  onReady() {
    // Page loading is complete
  },
  async onShow() {
    this.setData({
      ...this.data,
      hideTapBar: false,
      products: app.products,
      filtered: app.products,
      language: app.language,
      content: app.content.products,
      scrollTop: 0,
      chosenCategories: [],
      tabBarData: app.tabBarData,
    });
    //this.scan();
    //my.showLoading();
    let time = requestTime()
    my.getAuthCode({
      scopes: ['username'],
      success: (res) => {
        my.request({
          url: 'https://test1.vodafone.com.eg/services/dxl/v2/authorizations/applyToken',
          method: 'POST',
          headers: {
            'Request-Time': `${time}`,
            'Client-Id': 'miniprg',
            'Signature': '3333010071465913xxxddsdaasddzzxxx'
          },
          data: {
            grantType: 'authorization_code',
            authCode: res.authCode,
            authClientId: 'miniprg',
            appId: app.appId
          },
          dataType: 'json',
          success: (res) => {
            //my.alert({ content: "Token api succeded" + res });
            my.request({
              url: 'https://test1.vodafone.com.eg/services/dxl/v2/users/inquiryUserInfo',
              method: 'POST',
              headers: {
                'Request-Time': `${time}`,
                'Signature': '3333010071465913xxxddsdaasddzzxxx'
              },
              data: {
                accessToken: res.accessToken,
                authClientId: 'miniprg',
                appId: app.appId
              },
              dataType: 'json',
              success: (res) => {
                my.alert({ content: "user info api succeded" + res.userInfo.msisdn });
    
              },
              fail: (err) => {
                console.log({ err })
                my.alert({ content: "user info api failed" });
              }
            });

          },
          fail: (err) => {
            console.log({ err })
            my.alert({ content: "Token api failed" });
          }
        });
      },
      fail: (res) => {
        my.alert({ content: "fail can't get auhcode" });
      },
    });

    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
  }
});
