const data = {
  note: {
    //   @获取list的接口
    noteItem: ["语文", "数学", "英语",'这是我的与文笔222及','2','2','3','4'],
    // @获取具体itme的接口
    noteDetail: {
      fatherName: "语文",
      data: [
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
      ],
    },
  },
};

module.exports = data;
