$(window).on('load',function(){
    console.log('页面加载完成')
    $('.loader').fadeOut(400)
    console.log('加载图隐藏')
    $('#div-body').css({
        'overflow-y':'overlay',
    })
    console.log('滚动条出现')
    $('.head-name').slideDown(600)
    console.log('头部出现')
})
