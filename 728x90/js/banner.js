var tl,
    imagesLoaded = false,
    backup = false;

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
    TweenLite.set($("#white-shape"), {alpha: .9, rotation: 50, scaleX: 0.4, scaleY: 0.4, x: -470, y:-55});

    TweenLite.set($("#blue-shape"), {alpha:.9, rotation:10, scaleX:0.3, scaleY:0.3, x:76, y:65, overwrite:"none", force3D:false});
    TweenLite.set($("#red-shape"), {alpha:1, rotation:-20, scaleX:0.3, scaleY:0.3, x:160, y:113, overwrite:"none", force3D:false});
    TweenLite.set($("#mask-shape"), {rotation:30, scaleX: 0.3, scaleY: 0.3, x: -2235, y: -1275, overwrite:"none", force3D:false});
    TweenLite.set($(".shapes"), {rotation:10, transformOrigin:"50% 50%", overwrite:"none", force3D:false});

    TweenLite.set($("#red-shape-end-frame"), {scaleX: .1, x: 20, y: 310, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape-end-frame2"), {autoAlpha:0, rotation:100, x:400, y:-300, scaleX:.3, scaleY:.5});


    TweenLite.set($("#qantas-logo-container"), {scaleX: 1.3, scaleY: 1.3, x:-14, y:-6});
    TweenLite.set($("#aa-logo"), {scaleX: 1.3, scaleY: 1.3, x:-7, y:-5});

}


function adjustCopyLayout() {

    // RE-POSITION TEXT ELEMENTS DEPENDING ON WHAT VALUES ARE ENTERED IN THE HTML
    if($("#destination").text().length > 10){

        if($("#destination").text().length > 25){
            $("#destination").css("fontSize","16px");
            $("#destination").css("lineHeight","16px");
            $("#f3-copy").css("top","20px");
        } else{
            $("#destination").css("fontSize","18px");
            $("#destination").css("lineHeight","18px");
            $("#f3-copy").css("top","20px");
        }
    }

    //RE-POSITION CTA BUTTON DEPENDING ON WIDTH OF TEXT LOCKUP
    var f3CopyWidth = $('#f3-copy').outerWidth(true);
    var ctaBtnOffset = 15 + f3CopyWidth + 20;
    $(".button").css("left",ctaBtnOffset);

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

    //FRAME 01

    tl.to(".shapes", 2, {rotation: -160, transformOrigin: "50% 50%"}, "0")
//    tl.from("#red-shape", .5, {rotation: 200, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut}, "0")

    tl.to("#mask-shape", 1.5, {rotation: 0, scaleX: 1.3, scaleY: 1.3, x: -2100, y: -1315,  ease: Sine.easeInOut}, "0")
    tl.to("#red-shape", 1, {rotation: -80, scaleX: 1.5, scaleY: 1.5, x: 231, y: 55, ease: Sine.easeInOut}, ".3")
    tl.to("#blue-shape", 1, {rotation: -140, scaleX: 1, scaleY: 1, x: -4, y: 117, ease: Sine.easeInOut}, ".3")

    tl.from("#f1-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, ".5")

    tl.to("#mask-shape", .7, {rotation: 0, scaleX: 4.2, scaleY: 4.2, x: -1650, y: -1315, ease: Back.easeIn}, "1.1")
    tl.to("#blue-shape", .7, {rotation: -230, scaleX: 1.5, scaleY: 1.5, x: -320, y: 120, ease: Sine.easeOut}, "1.45")
    tl.to("#red-shape", .7, {rotation: 0, scaleX: 4, scaleY: 4, x: 695, y: 75, ease: Sine.easeInOut}, "1.45")

    tl.to(maskShape, .1, {autoAlpha:0}, "2")
    tl.from(whiteShape, 2, {alpha:0, ease: Sine.easeOut}, "1.3")
    tl.from(whiteShape, 2.5, {rotation: 0, scaleX: 0, scaleY: 0, x: 50, y: -200, ease: Sine.easeOut}, "0")

    //FRAME 02

    tl.to(f1Copy, .5, {alpha: 0, ease: Sine.easeIn}, "4.7")
    tl.from(f2Copy, 1.5, {alpha: 0, ease: Sine.easeOut}, "5.2")

    //FRAME 03
    tl.to(shapes, 2, {rotation: -160, transformOrigin: "50% 50%", ease: Sine.easeInOut}, "7.5")
    tl.to(whiteShape, 2, {alpha:1, rotation: 160, scaleX: 1, scaleY: 1, x: -287, y: -47, ease: Sine.easeInOut}, "7.5")

    // tl.to(redShape, 2, {alpha: 1, rotation: 30, scaleX: 8, scaleY: 8, x:280, y:60, ease: Sine.easeInOut}, "7.5")
    tl.to("#red-shape-base", 2, {scale:2.3, ease:Sine.easeInOut},"7.5")

    tl.from(qantasLogoContainer, 1, {alpha: 0, y:-25, ease: Sine.easeOut}, "8.5")
    tl.from(aaLogo, 1, {alpha: 0, y:20, ease: Sine.easeOut}, "8.5")

    tl.to(f2Copy, .5, {autoAlpha:0, ease: Sine.easeOut}, "8.5")
    tl.to(".bg-image-01", 2, {autoAlpha:0, ease: Sine.easeOut}, "9.5")
    tl.to("#video", 2, {autoAlpha:0, ease: Sine.easeOut}, "9.5")
    tl.to([redShape, '#red-shape-base'], .1, {autoAlpha: 0}, "11.5")

    //FRAME 04
    tl.to(whiteShape, 3, {rotation:250, scaleX:.8, scaleY:.8, x:-477, y:-70, ease: Expo.easeInOut}, "10.5")
    tl.to(qantasLogoContainer, 1.6, {x:476, y:-8, scaleX: .8, scaleY: .8, ease: Sine.easeInOut}, "11.1")
    tl.to(aaLogo, 1.6, {x:96, y:20, scaleX: .85, scaleY: .85, ease: Sine.easeInOut}, "11.1")

    tl.to(qantasLogoMono, .5, {autoAlpha:0, ease: Sine.easeOut}, "11.7")
    tl.to(qantasLogoColour, .5, {autoAlpha:1, ease: Sine.easeOut}, "11.7")
    tl.from(logoDivider, 1, {scaleY: 0, transformOrigin: "50% 0%", y:"-20", ease: Sine.easeOut}, "12.1")
    tl.from(termsWrapper, 1, {alpha: 0, ease: Sine.easeOut}, "12.1")

    if(backup) {
      $("#f3-copy").html("<h1>Plan your USA adventure with<br>Qantas and American Airlines</h1>")
      $("#f3-copy h1").css({fontSize:'26px', lineHeight:'26px'})
    }

    tl.to("#red-shape-end-frame", 3, {autoAlpha:.3, scaleX: .8, scaleY: .8, x: 240, y: 560, rotation:-120, ease: Sine.easeOut}, "10")
    tl.to("#red-shape-end-frame2", 2, {autoAlpha:.4, rotation:50, scaleX: 1.5, scaleY: 1.5, x:130, y:-10, ease: Sine.easeOut}, "11.5")

    tl.from(f3Copy, 1, {alpha: 0, y: -10, ease: Sine.easeOut}, "12.3")
    tl.from(ctaBtn, 1.7, {alpha: 0, scaleX: .5, scaleY: .5, ease: Expo.easeOut}, "13.2")

    // TESTING - goto specific time of animation
//     tl.seek(10);
//    tl.pause(10);
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
