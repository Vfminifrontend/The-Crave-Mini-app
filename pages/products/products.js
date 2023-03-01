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
    // let applyRes = {
    //   result:
    //     { resultCode: "SUCCESS", resultStatus: "S", resultMessage: "success" },
    //   accessToken: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJtM3VRMTM0ejVHN2ZLR3ZoZk9FVFYybDU2RWtSY09LN1dBYlBnRHZ3RTJ3In0.eyJleHAiOjE2Nzc2NzU1ODUsImlhdCI6MTY3NzY3MjAwMSwianRpIjoiNGY4NjViNTctZGQ2Yi00MWQ0LTg0NzYtOGM1NDkyMzhlNTlkIiwiaXNzIjoiaHR0cHM6Ly90ZXN0MS52b2RhZm9uZS5jb20uZWcvYXV0aC9yZWFsbXMvdmYtcmVhbG0iLCJzdWIiOiJmOmVmYWMzNDk4LWMyYzAtNDY4NS1hMWY3LWJmNzg0YjZmNWFkYzoxMDk2NTc3MjA3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWluaXByZyIsInNlc3Npb25fc3RhdGUiOiI5MGVmOTNhYi1mYzI1LTRjZmEtOGMwYi00OTBkZjNiNmY0NTYiLCJhY3IiOiIwIiwic2NvcGUiOiJ1c2VybmFtZSIsInNpZCI6IjkwZWY5M2FiLWZjMjUtNGNmYS04YzBiLTQ5MGRmM2I2ZjQ1NiJ9.UVeyeJCAkeLXGsnTngkoGELGRg8Z33tHRHOUvcaDPKDgZKBL5u-K3WT2n7H1ucqvDGUijE-N-hOsfX1K3uSF5VZCqFt_uK23blFsekEbuwARquR1tAYiZgplJBL9e77C662E85fPjBJkhevEkSWk56rnCxCZCM6p_WwrMM24dyZ9NvwRhfS_i0TaK35sxSk9WHlfjwnY-Ia0WyDXFTtUIzu9bYlwNe3LPHfPCdkmrU8dNPNqGCc8azj5DcFr9wGInak8GMd5zxdQ8-CrzcV718Z5lmItWoNd33vQ1vV8TxPEFPsQeRZDY16VnDpQOUfoXHKEFcr57MNLVzcpgOVm7g",
    //   accessTokenExpiryTime: "3584",
    //   refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmZjQzZjNhNy05NDM3LTRiZGItYWE1My05MWQwMmQ3NzM0ZjQifQ.eyJleHAiOjE2Nzc2NzU1ODUsImlhdCI6MTY3NzY3MjAwMSwianRpIjoiZmFhZjcyNjgtYTFlYy00MDk5LTkwOWYtYzVmYjI5NzZmNzM4IiwiaXNzIjoiaHR0cHM6Ly90ZXN0MS52b2RhZm9uZS5jb20uZWcvYXV0aC9yZWFsbXMvdmYtcmVhbG0iLCJhdWQiOiJodHRwczovL3Rlc3QxLnZvZGFmb25lLmNvbS5lZy9hdXRoL3JlYWxtcy92Zi1yZWFsbSIsInN1YiI6ImY6ZWZhYzM0OTgtYzJjMC00Njg1LWExZjctYmY3ODRiNmY1YWRjOjEwOTY1NzcyMDciLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoibWluaXByZyIsInNlc3Npb25fc3RhdGUiOiI5MGVmOTNhYi1mYzI1LTRjZmEtOGMwYi00OTBkZjNiNmY0NTYiLCJzY29wZSI6InVzZXJuYW1lIiwic2lkIjoiOTBlZjkzYWItZmMyNS00Y2ZhLThjMGItNDkwZGYzYjZmNDU2In0.gcGmNdjY4SXbWnXdHN1_gdo4cmgU3REXtCx06Eqr1Oc",
    //   refreshTokenExpiryTime: "3584"
    // }
    //my.alert({ "content": "mapped token" + applyRes.accessToken })
    let time = requestTime()
    this.$batchedUpdates(() => {
      my.getAuthCode({
        scopes: ['username'],
        success: (res) => {
          if (res.authCode) {
            this.$batchedUpdates(() => {
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
                  if (res.data.accessToken) {
                    this.$batchedUpdates(() => {
                      my.request({
                        url: 'https://test1.vodafone.com.eg/services/dxl/v2/users/inquiryUserInfo',
                        method: 'POST',
                        headers: {
                          'Request-Time': `${time}`,
                          'Signature': '3333010071465913xxxddsdaasddzzxxx'
                        },
                        data: {
                          accessToken: res.data.accessToken,
                          authClientId: 'miniprg',
                          appId: app.appId
                        },
                        dataType: 'json',
                        success: (res) => {
                          my.alert({ content: "user info api succeded" + res.data.userInfo.msisdn });
                          this.setData({
                            ...this.data,
                            userinfo: res.data.userInfo.msisdn
                          })
                        },
                        fail: (err) => {
                          my.alert({ content: "user info api failed" });
                        }
                      });
                    });
                  }
                  else {
                    my.alert({ content: "access token is undefined" })
                  }
                },
                fail: (err) => {
                  console.log({ err })
                  my.alert({ content: "Token api failed" });
                }
              });
            })
          }
          else {
            my.alert({ content: "authcode is undefined" })
          }
        },
        fail: (res) => {
          my.alert({ content: "fail can't get auhcode" });
        },
      })
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
