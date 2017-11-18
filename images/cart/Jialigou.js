/**
 * Created by xiejiannan on 15/6/1.
 */
$(document).ready(function(){
    $(".m-category-nav-info").mousemove(function(){
        $(this).addClass("s-category-nav-info").children(".m-category-sub-nav").removeClass("f-dn").addClass("f-db").siblings(".category-main").children(".f-pr").children(".category-detail").children("a").removeClass("detail").parent().siblings("h3").children("a").css("color","#3B2C33");
    }).mouseout(function(){
        $(this).children(".m-category-sub-nav").mouseover(function(){
            $(this).removeClass("f-dn").addClass("f-db").parents(".m-category-nav-info").addClass("s-category-nav-info").children(".m-category-sub-nav").removeClass("f-dn").addClass("f-db").siblings(".category-main").children(".f-pr").children(".category-detail").children("a").removeClass("detail").parent().siblings("h3").children("a").css("color","#ffffff");
        }).mouseout(function(){
            $(this).removeClass("f-db").addClass("f-dn").parents(".m-category-nav-info").removeClass("s-category-nav-info").children(".m-category-sub-nav").removeClass("f-db").addClass("f-dn").siblings(".category-main").children(".f-pr").children(".category-detail").children("a").addClass("detail").parent().siblings("h3").children("a").css("color","#ffffff");
        });
        $(this).removeClass("s-category-nav-info").children(".m-category-sub-nav").removeClass("f-db").addClass("f-dn").siblings(".category-main").children(".f-pr").children(".category-detail").children("a").addClass("detail").parent().siblings("h3").children("a").css("color","#ffffff");
    });
    $(".j-today").click(function(){
        $(".j-today-live").removeClass("f-dn").addClass("f-db").siblings(".j-last-live").removeClass("f-db").addClass("f-dn");
        $(this).addClass("s-hot-query-highlight").siblings(".j-last").removeClass("s-hot-query-highlight");
    });
    $(".j-last").click(function(){
        $(".j-last-live").removeClass("f-dn").addClass("f-db").siblings(".j-today-live").removeClass("f-db").addClass("f-dn");
        $(this).addClass("s-hot-query-highlight").siblings(".j-today").removeClass("s-hot-query-highlight");
    });

    //$("#wrappertable").css("cssText","display:none!important");
    $("#hidead").mouseover(function(){
        $(this).css("cursor","pointer");
    }).click(function(){
        $("#ad").css("display","none");
    });
    $(".j-flash-nav").children().mouseover(function(){
        var current = $(this).index();
        $(this).removeClass("f-flash-nav2").addClass("f-flash-nav1").siblings().removeClass("f-flash-nav1").addClass("f-flash-nav2").parents().find("ul").children().eq(current).fadeIn().siblings().fadeOut();
    });

    $(".j-pro-nav").children().css("cursor","pointer").click(function(){
        var current = $(this).index();
        $(this).children("span").removeClass("f-nav-logo").addClass("f-nav-logo1").parent().siblings().children("span").removeClass("f-nav-logo1").addClass("f-nav-logo");
        $(".j-pro-change").children().eq(current).fadeIn().siblings().fadeOut();
    });

    $(".j-input").val("").focus(function(){
        $(this).parent().children("span").eq(0).css("color","#c9c9c9");
    }).keypress(function(){
        $(this).next().css("display","block").click(function(){
            $(this).css("display","none").prev().val("").parent().children("span").eq(0).css({"display":"block","color":"black"});
        }).parent().children("span").eq(0).css("display","none");
    });

    //全选
    $(".j-select-all").css("cursor","pointer").click(function(){
        $(".j-input-choose").each(function(){
           $(this).prop("checked",true).next().addClass("f-cart-img1");
        });
    });
    //删除购物车中选中的商品
    $(".j-select-del").css("cursor","pointer").click(function(){
        $(".j-input-choose").each(function(){
            if($(this).is(":checked")){
                $(this).prop("checked",false).next().removeClass("f-cart-img1");
            }
        });
    });
    //单个操作-选中与否
    function jchoose(element,classname){
        $(element).each(function(){
            if($(this).is(":checked")){
                $(this).next().addClass(classname);
            }else{
                $(this).next().removeClass(classname);
            }
        }).click(function(){
            if($(this).is(":checked")){
                $(this).next().addClass(classname);
            }else{
                $(this).next().removeClass(classname);
            }
        }).css("cursor","pointer").next().css("cursor","pointer");
    }
    jchoose(".j-input-choose","f-cart-img1");
    //jchoose(".j-input-choose-star","f-cart-img2");
    //评价星号
    $(".j-input-choose-star").mousemove(function(){
        var psibilings = $(this).parent().prevAll().find(".j-input-choose-star");
        var nsibilings =  $(this).parent().nextAll().find(".j-input-choose-star");
        $(this).attr("checked",true).next().addClass("f-cart-img2").parent().siblings("b").text($(this).attr("title"));
        psibilings.next().addClass("f-cart-img2");
        nsibilings.removeAttr("checked").next().removeClass("f-cart-img2");
    });
    //单个删除
    $(".j-del-one").css("cursor","pointer").click(function(){
       $(this).parent().siblings().eq(0).find(".j-input-choose").prop("checked",false).next().removeClass("f-cart-img1");
    });
    //编辑商品数量
    $(".j-sub").css("cursor","pointer").click(function(){
        var sum = $(this).next().html();
        if(parseInt(sum)>0){
            $(this).next().html(parseInt(sum)-1);
        }
    }).siblings(".j-plus").css("cursor","pointer").click(function(){
        var sum = $(this).prev().html();
        if(parseInt(sum)<15){
            $(this).prev().html(parseInt(sum)+1);
        }
    });
    //直播页左导航
    //$(".j-tv-nav").css("cursor","pointer").mousemove(function(){
    //    $(this).next().removeClass("f-dn").addClass("f-db");
    //}).mouseout(function(){
    //    $(this).parents(".f-nav-unit").mouseleave(function(){
    //        $(this).children(".j-tv-nav").next().removeClass("f-db").addClass("f-dn");
    //    });
    //});
    //直播页左导航
    $(".j-tv-nav").css("cursor","pointer").mousemove(function(){
        $(this).next().removeClass("f-dn").addClass("f-db");
    }).mouseout(function(){
        $(this).parents(".f-nav-unit").mouseleave(function(){
            $(this).children(".j-tv-nav").next().removeClass("f-db").addClass("f-dn").parents("ul").css({"height":"359px","padding-top":0});
            $(this).parents("li").css({"position":"relative","top":"inherit"});
        });
    });
    //更多地址
    $(".j-more-add-click").css("cursor","pointer").click(function(){
        $("#j-more-add").toggleClass("more-add");
    });
    //提交订单页
    $(".j-addr").css("cursor","pointer").click(function(){
        $(this).siblings("ul").find("li:gt(0)").fadeIn();
    });
    $(".j-add-address").css("cursor","pointer").click(function(){
        $(this).parents().find(".j-add-addr").fadeIn();
    });
    //分类
    $(".j-wrapper").children("div").css("cursor","pointer").click(function(){
        $(this).parent().siblings().find("ul").css("display","none");
        $(this).siblings("ul").toggle();
    });
    //最佳搭配
    $(".j-partner").children("li").css({"cursor":"pointer","border":"1px solid #ffffff"}).mouseover(function(){
        $(this).css("border","1px solid #E8E8E7");
    }).mouseleave(function(){
        $(this).css("border","1px solid #ffffff");
    });
    //alert($(".j-wrapper").length);
    //导航
    $(".j-nav-page").children(".itm").click(function(){
        $(this).children().css("color","#E5007F");
    });
    //显示目录
    $(".j-nav-sub").css("cursor","pointer").click(function(){
        $(this).next().slideToggle();
    });
    //$(".j-nav-sub").css("cursor","pointer").click(function(){
    //    $(this).next().slideToggle();
    //});
    //$(".j-nav-sub-two").css("cursor","pointer").click(function(){
    //    //$(this).siblings().slideToggle();
    //    alert("ddd");
    //});
//首页轮播效果
    var current_img,img_length,time,color = "green";
    time = setTimeout(img_auto,3000);
    $(".j-slider").children().each(function(){
        $(this).mouseover(function(){
            clearTimeout(time);
            var index = $(this).index();
            $(this).addClass("s-slider-red").removeClass("s-slider-black").siblings().addClass("s-slider-black").removeClass("s-slider-red").parent().siblings().children().eq(index).fadeIn().siblings().fadeOut();
            current_img = index;
        }).mouseout(function(){
            clearTimeout(time);
            img_auto();
        });
    });
    function img_auto(){
        img_length = $(".j-slider").siblings().children().length;
        if( !(current_img) && current_img != 0 || current_img >= img_length || current_img < 0 ){
            current_img = 0;
        }else{
            $(".j-slider").children().eq(current_img).addClass("s-slider-red").removeClass("s-slider-black").siblings().addClass("s-slider-black").removeClass("s-slider-red").parent().siblings().children().eq(current_img).fadeIn().siblings().fadeOut();
            current_img++;
        }
        time = setTimeout(img_auto,3000);
    }
    function change_color(point){
        var url = window.location.href;
        var res = new RegExp("[a-z]{4}://[a-z]{3}.[a-z]{8}.[a-z]{3}/([a-z]*)/([a-z]*_*[a-z]*).html");
        var re = url.match(res);
        if( url != "http://www.jialigou.com/" && re[point] != "index"){
            $("."+re[point]).css("color","#E91456");
        }else if(point==1){
            $(".index").css("color","#E91456");
        }else{
            return 0;
        }
    }
    change_color(1);
    change_color(2);

    $(".s-floor-container").mouseover(function(){
        $(this).removeClass("s-white-border").addClass("s-border");
    }).mouseout(function(){
        $(this).removeClass("s-border").addClass("s-white-border");
    });
    $("ul.s-tv-live li").mouseover(function(){
        $(this).removeClass("s-white-border").addClass("s-border");
    }).mouseout(function(){
        $(this).removeClass("s-border").addClass("s-white-border");
    });
    $("li.j-m-recommendation").css("border","1px solid #ffffff").mouseover(function(){
        $(this).css("border","1px solid #989898");
    }).mouseout(function(){
        $(this).css("border","1px solid #ffffff");
    });


});
change();
function change(){
    var url3 = window.location.href;
    var res3 = new RegExp("[a-z]{4}://[a-z]{3}.[a-z]{8}.[a-z]{3}/[a-z]*/([a-z]*_*[a-z]*)[.html]*[/]*[a-z]*[/]*[0-9]*[.html]*");
    var re3 = url3.match(res3);
    $("#j-order-detail").addClass(re3[1]);
}


sliderlogo();

function sliderlogo(){
    var lt = $("#wrappertable").position().left;
    if(lt==0 || lt > -145){
        lt = lt - 5;
        $("#wrappertable").css("left",lt);
        setTimeout("sliderlogo()",1);
    }else if(lt <= -145){
        lt = 0;
        $("#wrappertable").css("left",lt);
        setTimeout("sliderlogo()",2000);
    }
}