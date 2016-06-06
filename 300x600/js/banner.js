var tl,
    imagesLoaded = false,
    backup = false;


$(document).ready(function () {

});

function preloadAssets() {

    var i = ["logo_aa.svg", "logo-qantas-colour.svg", "logo-qantas-mono.svg", "shape-mask.svg", "shape-red.svg", "shape-blue.svg", "shape-red-end-frame.svg", "shape-red-end-frame2.svg", backgroundImage];

    preloadimages(i).done(function (images) {
        // ONCE IMAGES ARE PRE-LOADED BEGIN ANIMATION
        //initCSS();
        //startAnimation();
        //adjustCopyLayout();

        // TERMS & CONDITIONS FUNCTIONALITY / COMMENT OUT IF NOT NEEDED
        $(".overlay-close").click(function () {
            $(".overlay").hide();
            $(".terms-wrapper").show();
        });

        $(".terms-wrapper").click(function () {
            $(".terms-wrapper").hide();
            $(".overlay").show();
        });

        imagesLoaded = true;
    })
}


function initCSS() {
    // SET STARTING POSITIONS FOR ELEMENTS
    TweenLite.set($("#qantas-logo-colour"), {autoAlpha: 0});
    TweenLite.set($("#white-shape"), {alpha: .9, rotation: 50, scaleX: 0.4, scaleY: 0.4, x:-294, y:169});

    TweenLite.set($("#red-shape-end-frame2"), {autoAlpha:0, rotation:100, x:100, y:-200, scaleX:.3, scaleY:.5});
    TweenLite.set($("#blue-shape"), {alpha: .9, rotation: 0, scaleX: 0.4, scaleY: 0.4, x: 96, y: 65, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape"), {alpha: .9, rotation: -20, scaleX: 0.4, scaleY: 0.4, x: 160, y: 73, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.4, scaleY: 0.4, x: -2235, y: -1300, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 190, transformOrigin: "50% 50%", overwrite: "none", force3D: false});

    TweenLite.set($("#red-shape-end-frame2"), {autoAlpha:0, rotation:100, x:100, y:-200, scaleX:.3, scaleY:.5});
    TweenLite.set($("#red-shape-end-frame"), {x: 0, y: 100, overwrite: "none", force3D: false});

    TweenLite.set($("#qantas-logo-container"), {scaleX: 1.5, scaleY: 1.5, x:-27, y:-30});
    TweenLite.set($("#aa-logo"), {scaleX: 1.5, scaleY: 1.5, x:2, y:54});

}

function adjustCopyLayout() {

    // RE-POSITION TEXT ELEMENTS DEPENDING ON WHAT VALUES ARE ENTERED IN THE HTML

    // IF THE DESTINATION TEXT IS TOO LONG TO FIT ON ONE LINE, WE REDUCE THE FONT SIZE
    //    if($("#destination").text().length > 14){
    //        $("#destination").css("fontSize","24px");
    //    }

    // if ($("#f1-copy h1").text().length >= 27) {
    //     $("#f1-copy h1").css({
    //         "fontSize": "28px",
    //         "lineHeight": "39px"
    //     })
    // }
}

function backupAnimation() {
    backup = true;
    if (imagesLoaded) {
        initBanner();
    } else {
        si = setInterval(function() {
            if (imagesLoaded) {
                initBanner();
                clearInterval(si);
            }
        }, 250)
    }
}

// MAIN ANIMATION --------------------------------------------------------------------
function startAnimation() {

    // HIDES PRE-LOADER CIRCLE AND SHOWS BANNER
    $(".container").show();
    $(".loader").hide();


    //WE USE GREENSOCK ANIMATION PLATFORM, SEE THIS FOR MORE INFO > http://greensock.com/timelinelite
    tl = new TimelineLite();
    var shapes = $(".shapes"),
        redShape = $("#red-shape"),
        maskShape = $("#mask-shape"),
        blueShape = $("#blue-shape"),
        bgImage = $(".bg-image"),
        whiteShape = $("#white-shape"),
        redShapeEndFrame01 = $("#red-shape-end-frame"),
        redShapeEndFrame02 = $("#red-shape-end-frame2"),
        qantasLogoContainer = $("#qantas-logo-container"),
        qantasLogoMono = $("#qantas-logo-mono"),
        qantasLogoColour = $("#qantas-logo-colour"),
        aaLogo = $("#aa-logo"),
        logoDivider = $("#logo-divider"),
        f1Copy = $("#f1-copy"),
        f2Copy = $("#f2-copy"),
        f3Copy = $("#f3-copy"),
        termsWrapper = $(".terms-wrapper"),
        ctaBtn = $(".button");

    setTimeout(function(){
      var f3CopyHeight = $('#f3-copy').outerHeight(true);
      var ctaBtnOffset = 81 + f3CopyHeight + 20;
      $(".button").css("top", ctaBtnOffset);
    },200)

    //FRAME 01

    tl.from(whiteShape, 2, {alpha:0, ease: Sine.easeOut}, "1.3")
    .to(shapes, 2, {rotation: -10, transformOrigin: "50% 50%"}, "0")
    .from(redShape, .5, {rotation: 200, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut}, "0")

    .to(maskShape, 1.5, {rotation: 0, scaleX: 1.5, scaleY: 1.5, x: -2070, y: -1315,  ease: Sine.easeInOut}, "0")
    .to(redShape, 1, {rotation: -20, scaleX: 2, scaleY: 2, x: 211, y: -20, ease: Sine.easeInOut}, ".3")
    .to(blueShape, 1, {rotation: -10, scaleX: 1.5, scaleY: 1.5, x: 13, y: 177, ease: Sine.easeInOut}, ".3")

    .from("#f1-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "1.7")
    .from(".bg-image", 2, {alpha: 0, ease: Sine.easeOut}, "0")

    .to(maskShape, .7, {rotation: 0, scaleX: 3, scaleY: 5, x: -1850, y: -1315, ease: Back.easeIn}, "1.1")
    .to(blueShape, .6, {rotation: -70, scaleX: 3, scaleY: 3, x: -230, y: 425, ease: Sine.easeInOut}, "1.4")
    .to(redShape, .6, {rotation: -100, scaleX: 4, scaleY: 4.5, x: 340, y: -195, ease: Sine.easeInOut}, "1.4")

    //FRAME 02
    .to(f1Copy, .5, {alpha: 0, ease: Sine.easeIn}, "4.7")
    .from(f2Copy, 1.5, {alpha: 0, ease: Sine.easeOut}, "5.2")

    //FRAME 03
    tl.to(shapes, 2, {rotation:-90, transformOrigin: "50% 50%", ease: Sine.easeInOut}, "7.5")
    tl.to(whiteShape, 2, {alpha:1, rotation:180, scaleX: 1.2, scaleY: 1.2, x: -354, y: -83, transformOrigin: "50% 50%", ease: Sine.easeInOut}, "7.5")
    tl.to(redShape, 2, {alpha: 1, rotation: 30, scaleX: 11, scaleY: 11, x: 250, y: 160, ease: Sine.easeInOut}, "7.5")

    tl.from(qantasLogoContainer, 1, {alpha: 0, y:-175, ease: Sine.easeOut}, "8.2")
    tl.from(aaLogo, 1, {alpha: 0, y:175, ease: Sine.easeOut}, "8.2")

    tl.to(f2Copy, .5, {autoAlpha:0, ease: Sine.easeOut}, "9.5")
    tl.to(".bg-image-01", 2, {autoAlpha:0, ease: Sine.easeOut}, "9.5")
    tl.to("#video", 2, {autoAlpha:0, ease: Sine.easeOut}, "9.5")
    tl.to(redShape, .1, {autoAlpha: 0}, "11.5")
    tl.to(maskShape, .1, {autoAlpha: 0}, "4")

    // //FRAME 04
    tl.to(shapes, 2.2, {rotation:-160, transformOrigin: "50% 50%", ease: Sine.easeInOut}, "10.5")
    tl.to(whiteShape, 2.5, {rotation: 0, scaleX: 1, scaleY: 1, x: -173, y: -539, ease: Sine.easeInOut}, "10.5")

    tl.to(qantasLogoContainer, 1.6, {x:-75, y:306, scaleX: 1, scaleY: 1, ease: Sine.easeInOut}, "11.2")
    tl.to(aaLogo, 1.6, {x:68, y:216, scaleX: 1, scaleY: 1, ease: Sine.easeInOut}, "11.2")
    //
    tl.to(qantasLogoMono, .5, {autoAlpha:0, ease: Sine.easeOut}, "11.4")
    tl.to(qantasLogoColour, .5, {autoAlpha:1, ease: Sine.easeOut}, "11.4")
    tl.from(logoDivider, 1, {scaleY: 0, transformOrigin: "50% 0%", y:"-20", ease: Sine.easeOut}, "12.3")
    tl.from(termsWrapper, 1, {alpha: 0, ease: Sine.easeOut}, "12.1")

    if(backup) {
      $("#f3-copy").html("<h1>Plan your USA adventure with Qantas and American Airlines</h1>")
      $("#f3-copy h1").css({fontSize:'38px', lineHeight:'44px'})
    }

    tl.to("#red-shape-end-frame", 3, {autoAlpha:.5, scaleX: .6, scaleY: .6, x: -290, y: 10, rotation:-220, ease: Sine.easeOut}, "10.2")
    tl.to("#red-shape-end-frame2", 3, {autoAlpha:.4, rotation:100, scaleX: 1.4, scaleY: 1.4, x:20, y:160, ease: Sine.easeInOut}, "10.2")

    tl.from(f3Copy, 1, {alpha: 0, y: -10, ease: Sine.easeOut}, "12.3")
    tl.from(ctaBtn, 1.7, {alpha: 0, scaleX: .5, scaleY: .5, ease: Expo.easeOut}, "13.2")

    // TESTING - goto specific time of animation
    // tl.pause(10)
}


// PRE-LOAD IMAGES FUNCTIONALITY ------------------------------------------------------------


function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0
    var postaction = function () {}
    var arr = (typeof arr != "object") ? [arr] : arr

    function imageloadpost() {
        loadedimages++
        if (loadedimages == arr.length) {
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image()
        newimages[i].src = arr[i]
        newimages[i].onload = function () {
            imageloadpost()
        }
        newimages[i].onerror = function () {
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction //remember user defined callback functions to be called when images load
        }
    }
}
