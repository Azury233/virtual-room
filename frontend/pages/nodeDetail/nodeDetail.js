// pages/nodeDetail/nodeDetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    list: [
        {
          tag: 2,
          time: "2022-04-19 10:50",
          value: "语文第一条",
        },
        {
          tag: 3,
          time: "2022-04-19 10:50",
          value: "语文第二条",
        },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.name);
    this.setData({
      name: options.name,
    });
    // console.log(this.data.name)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
