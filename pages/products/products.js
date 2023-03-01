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
    let applyRes = {    
      result: {resultCode: "SUCCESS",resultStatus: "S",resultMessage: "success"},
      accessToken: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJtM3VRMTM0ejVHN2ZLR3ZoZk9FVFYybDU2RWtSY09LN1dBYlBnRHZ3RTJ3In0.eyJleHAiOjE2Nzc2NjUyODUsImlhdCI6MTY3NzY2MTcwNCwianRpIjoiZTdkMTA4ODktNWZmYy00MGE4LWFmOTctNDQ2Zjc5ZGZhOGU3IiwiaXNzIjoiaHR0cHM6Ly90ZXN0MS52b2RhZm9uZS5jb20uZWcvYXV0aC9yZWFsbXMvdmYtcmVhbG0iLCJzdWIiOiJmOmVmYWMzNDk4LWMyYzAtNDY4NS1hMWY3LWJmNzg0YjZmNWFkYzoxMDk2NTc3MjA3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWluaXByZyIsInNlc3Npb25fc3RhdGUiOiIxY2NkOWRhNi0yYTU1LTQ3NjctYjQyNC01ZmI3NmJkNzA4NzYiLCJhY3IiOiIwIiwic2NvcGUiOiJ1c2VybmFtZSIsInNpZCI6IjFjY2Q5ZGE2LTJhNTUtNDc2Ny1iNDI0LTVmYjc2YmQ3MDg3NiJ9.MC7VO5VPfEeU0KogRw2PwJ4VE4ogfpBxURcE-SfQ3C8UO-tw-DNybEaInRZD941BD03h9rjtnOGNpOyV2nf0aJtcnj6x4ioZrirhIq7Uzy6sCz5JGFF_FRWXJ55npQublPX3bHP6ifrTBwYRbFtbDjh5n_43YcaoBjFBkttRVUekfqgtz9otERDwWo5m1JQgtZ3TfCVIV8-v6rmONv2ShhQ-K1ss_vqXP48wG5k4i8rC1aGXvoAHMzdNE_UvaK1TBEPgWBNeYJgZzcqLYTp11Crb469pnVkzEhfk_n8vcpgUo-4swAhl5j7mH3xaGpMZCDKTDb2_huXFEaeNTO62Hg",    
      accessTokenExpiryTime: "3581",    
      refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmZjQzZjNhNy05NDM3LTRiZGItYWE1My05MWQwMmQ3NzM0ZjQifQ.eyJleHAiOjE2Nzc2NjUyODUsImlhdCI6MTY3NzY2MTcwNCwianRpIjoiNDEwYWM1ZDUtZDRmOC00MWZhLWI1MjMtODViMGZmMjExOGRlIiwiaXNzIjoiaHR0cHM6Ly90ZXN0MS52b2RhZm9uZS5jb20uZWcvYXV0aC9yZWFsbXMvdmYtcmVhbG0iLCJhdWQiOiJodHRwczovL3Rlc3QxLnZvZGFmb25lLmNvbS5lZy9hdXRoL3JlYWxtcy92Zi1yZWFsbSIsInN1YiI6ImY6ZWZhYzM0OTgtYzJjMC00Njg1LWExZjctYmY3ODRiNmY1YWRjOjEwOTY1NzcyMDciLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoibWluaXByZyIsInNlc3Npb25fc3RhdGUiOiIxY2NkOWRhNi0yYTU1LTQ3NjctYjQyNC01ZmI3NmJkNzA4NzYiLCJzY29wZSI6InVzZXJuYW1lIiwic2lkIjoiMWNjZDlkYTYtMmE1NS00NzY3LWI0MjQtNWZiNzZiZDcwODc2In0.bXr0OGzHNvZb66sNm3sZYk77EjIsIp4LhC5ooSEttiE",    
      refreshTokenExpiryTime: "3581"
    }
    my.alert({"content":"mapped token"+applyRes.accessToken})
    let time = requestTime()
    
    my.getAuthCode({
      scopes: ['username'],
      success: (res) => {
        if (res.authCode) {
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
            //  my.alert({content : "accessToken: "+res.accessToken})
              if (applyRes.accessToken) {
                //my.alert({ content: "Token api succeded" + res });
                my.request({
                  url: 'https://test1.vodafone.com.eg/services/dxl/v2/users/inquiryUserInfo',
                  method: 'POST',
                  headers: {
                    'Request-Time': `${time}`,
                    'Signature': '3333010071465913xxxddsdaasddzzxxx'
                  },
                  data: {
                    accessToken: applyRes.accessToken,
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
        }
        else {
          my.alert({ content: "authcode is undefined" })
        }
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
