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
        $(this).siblings(".close-btn").show()
        elem.children(".sub-nav-menu").show(500)
    })
    $('.close-btn').on("click", function () {
        let elem = $(this).siblings(".col-10");
        $(this).hide()
        $(this).siblings(".open-btn").show()
        elem.children(".sub-nav-menu").hide(500)
    })
    let pcNavLinks = $('.pc-nav .nav-link')
    let pathName = location.pathname.split("/")[1]
    console.log(location.pathname.split("/"))
    pcNavLinks.each(function (index,pcNavLink) {
        console.log($(pcNavLink).attr("href"))
        console.log(`/${pathName}`)
        if ($(pcNavLink).attr("href") === `/${pathName}`) {
            console.log(true)
            $(pcNavLink).find(".nav-item").addClass("active")
        }
    })
})
