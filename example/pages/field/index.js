import Page from '../../common/page';

Page({
  data: {
    sms: '',
    value: '',
    password: '',
    username: '',
    username2: '',
    message: '',
    phone: '1365577'
  },

  onTapIcon() {
    wx.showToast({
      icon: 'none',
      title: '点击图标'
    });
  }
});
