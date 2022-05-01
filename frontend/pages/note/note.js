// pages/note/note.js
const noteMock = require('../../mock').note
Page({

    /**
     * 页面的初始数据
     */
    data: {
noteItem:[]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    this.setData({
        noteItem:noteMock.noteItem
    })
    console.log(this.data.noteItem)
        // this.getNoteData()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
// console.log('ready')
// console.log(noteMock)
    },
    toNoteDetailPage(e) {
        console.log(e.currentTarget.dataset.name)
        wx.navigateTo({
            url: '/pages/nodeDetail/nodeDetail?name='+e.currentTarget.dataset.name,
          })
      },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    getNoteData(){
console.log('hello')
    }
})