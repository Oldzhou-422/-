module.exports = {
  'post /api/order/getList': (req, res) => {
    if(req.body.pageNum < 4){
      res.json({
        status: 200,
        data: [
          {
            id: 1,
            name: '龙光民宿酒店',
            intro: '网红排行第一名',
            price: 180,
            src: 'https://img95.699pic.com/photo/50153/7563.jpg_wh300.jpg',
          },
          {
            id: 2,
            name: '龙光民宿酒店',
            intro: '网红排行第二名',
            price: 120,
            src:
              'https://q-xx.bstatic.com/xdata/images/hotel/840x460/171637670.jpg?k=101476991d3161364bfe8872ebb121c26cf8eebca7a5205ee6d151c48a5381f3&o=',
          },
          {
            id: 3,
            name: '深圳民宿酒店',
            intro: '网红排行第三名',
            price: 170,
            src:
              'https://q-xx.bstatic.com/xdata/images/hotel/840x460/202094650.jpg?k=c8c03cbd7cef44415db4d92c2efdf66c9dfbe0111885c9c717eafb9f49750874&o=',
          },
          {
            id: 4,
            name: '广州民宿酒店',
            intro: '网红排行第四名',
            price: 30000,
            src:
              'https://q-xx.bstatic.com/xdata/images/hotel/840x460/171707464.jpg?k=bda33e6f1dee246ffe4475381e6e981c7b3c2ad459843a2c92a13063c6da0b02&o=',
          },
          {
            id: 5,
            name: '汕头民宿酒店',
            intro: '网红排行第五名',
            price: 10,
            src:
              'https://q-xx.bstatic.com/xdata/images/hotel/840x460/171710220.jpg?k=f58a397c67d5a02de1cd8bdd9b93d72c5ef17810604a2cd7be0d5846da00148b&o=',
          },
          {
            id: 6,
            name: '汕头民宿酒店',
            intro: '网红排行第五名',
            price: 10,
            src:
              'https://q-xx.bstatic.com/xdata/images/hotel/840x460/171710220.jpg?k=f58a397c67d5a02de1cd8bdd9b93d72c5ef17810604a2cd7be0d5846da00148b&o=',
          },
          {
            id: 7,
            name: '汕头民宿酒店',
            intro: '网红排行第五名',
            price: 10,
            src:
              'https://q-xx.bstatic.com/xdata/images/hotel/840x460/171710220.jpg?k=f58a397c67d5a02de1cd8bdd9b93d72c5ef17810604a2cd7be0d5846da00148b&o=',
          },
          {
            id: 8,
            name: '汕头民宿酒店',
            intro: '网红排行第五名',
            price: 10,
            src:
              'https://q-xx.bstatic.com/xdata/images/hotel/840x460/171710220.jpg?k=f58a397c67d5a02de1cd8bdd9b93d72c5ef17810604a2cd7be0d5846da00148b&o=',
          },
        ],
      });
    }else{
      res.json({
        status:200,
        data:[]
      })
    }
    
  },
};
