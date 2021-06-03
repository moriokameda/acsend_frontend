const sayHello = () => {
    console.log('Hello World!');
};
$(function () {
    $('.in-submenu').hover(function () {
        jQuery(".sub-nav-menu").removeClass("open")
        jQuery(this).siblings('.sub-nav-menu').addClass("open");
        console.log("open")
    })
    $('.sub-nav-menu').mouseleave(function () {
        jQuery(this).removeClass("open")
        console.log("close");
    })
    $('.open-btn').on("click", function () {
        let elem = $(this).siblings(".col-10");
        $(this).hide()
        $(this).siblings(".close-btn").show(300)
        elem.children(".sub-nav-menu").show(500)
    })
    $('.close-btn').on("click", function () {
        let elem = $(this).siblings(".col-10");
        $(this).hide()
        $(this).siblings(".open-btn").show(300)
        elem.children(".sub-nav-menu").hide(300)
    })
})


sayHello();
