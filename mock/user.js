module.exports = {
  'post /api/user/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 10,
        username: 'xuJiaNa',
        tel: '15521214781',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBfL4w9rjjidqe52kAjksjtJjkgD9EQDkCA&usqp=CAU',
      },
    });
  },
  'post /api/user/editDetail': (req, res) => {
    res.json({
      status: 200,
      data:'编辑成功',
    });
  },
  'post /api/user/login':(req,res)=>{
    res.json({
      status:200,
      data:{
        username:req.body.username,
        id:100
      }
    })
  }
};
