$(document).ready(function(){
    $("#fullpage").fullpage({
        menu:".topMenu",
        anchors:['m1st','m2st','m3st','m4st','m5st'],
        navigation:true,
        navigationTooltips: ['월드', '킹덤', '세계관', '캐릭터','커뮤니티'],
        showActiveTooltip: true,
        responsiveWidth: 1000,
        afterLoad:function(anchorslink,index){
            console.log(anchorslink+ ', ' + index);
            if(index == 1){
                $(".txt1st").addClass("end");
            }else{
                $(".txt1st").removeClass("end");
            }
        }
    })
})