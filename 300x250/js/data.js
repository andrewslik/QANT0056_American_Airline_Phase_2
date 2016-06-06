var deal = {}
var size = "300x250";
var clicktag;
var md = new MobileDetect(window.navigator.userAgent);
var backgroundImage;

Enabler.setProfileId(1071077);
var devDynamicContent = {};

devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1 = [{}];
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0]._id = 0;
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].id = 1;
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].reporting = "ADL-LHR-ECO";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].from = "ADL";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].to = "LHR";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].fare = "ECO";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].json = "https:\/\/qantasflightdeals.herokuapp.com\/api\/search?&dealTypeCode=A&cheapestDealPerDistinctAirportPair=true&travelClass=ECO&tripType=R&quantity=1&marketingRegionCode=au&departureAirportCodes=ADL&arrivalAirportCodes=LHR&callback=callbackFunction";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].exit = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].exit.Url = "https://www.qantas.com/travel/airlines/international-flight-specials/global/en?departureAirportCode=ADL&arrivalAirportCode=LHR&travelClass=ECO&ext_cam=au:ff:banner:AOLHR:redpl:fy16";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].show_video = true;
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].show_price = true;
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].is_default = false;
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_300x50 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_300x50.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/LHR-300x50.jpg";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_320x50 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_320x50.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/LHR-320x50.jpg";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_320x100 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_320x100.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/LHR-320x100.jpg";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_160x600 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_160x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/LON-160x600.jpg";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].video_160x600 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].video_160x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0026/LHR_160x600.mp4";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_300x250 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_300x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/LON-300x250.jpg";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].video_300x250 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].video_300x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0034/LHR_300x250.mp4";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_300x600 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_300x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0028/LHR-300x600.jpg";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].video_300x600 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].video_300x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0026/LHR_300x600.mp4";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_728x90 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_728x90.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0028/LHR-728x90.jpg";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].video_728x90 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].video_728x90.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0026/LHR_728x90.mp4";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_970x250 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].bkgd_970x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/LHR-970x250.jpg";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].video_970x250 = {};
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].video_970x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0026/LHR_970x250.mp4";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame1_text_300x50 = "Big Ben is calling";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame1_text_320x50 = "Big Ben is calling";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame1_text_320x100 = "Big Ben is calling";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame1_text_160x600 = "Big Ben is calling";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame1_text_300x250 = "Over 150<br/>destinations<br/>in the USA";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame1_text_300x600 = "Big Ben is calling";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame1_text_728x90 = "Big Ben is calling";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame1_text_970x250 = "Big Ben is calling";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame2_text_300x50 = "Fly to London";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame2_text_320x50 = "Fly to London";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame2_text_320x100 = "Two airlines,<br/>one world class<br/>experience.";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame2_text_160x600 = "Fly to London";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame2_text_300x250 = "Two airlines,<br/>one world class<br/>experience.";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame2_text_300x600 = "Fly to London";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame2_text_728x90 = "Fly to London";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame2_text_970x250 = "Fly to London";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame3_text_300x50 = "Discover London with Qantas";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame3_text_320x50 = "Discover London with Qantas";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame3_text_320x100 = "Discover London with Qantas";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame3_text_160x600 = "Discover London with Qantas";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame3_text_300x250 = "Discover London with Qantas";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame3_text_300x600 = "Discover London with Qantas";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame3_text_728x90 = "Discover London with Qantas";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].frame3_text_970x250 = "Discover London with Qantas";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].short_terms = "*Price based on payment at qantas.com by BPAY or POLi.";
devDynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].tcs = "Prices are based on payment at qantas.com by BPAY or POLi. Prices are updated at regular intervals throughout the day and may be subject to change and limited availability. Travel is via Sydney & Dubai. A fee applies for card payments. Visit www.qantas.com for travel dates, conditions, and applicable offer end dates.";
Enabler.setDevDynamicContent(devDynamicContent);

function politeInit() {
    $('#video').hide();
    clicktag = dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].exit.Url;
    backgroundImage = dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0]['bkgd_' + size].Url;
    preloadAssets();

    $(".terms").html(dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].short_terms);
    $(".terms-txt").html(dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].tcs);
    $("#f1-copy h1").html(dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0]['frame1_text_' + size]);
    $("#f2-copy h1").html(dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0]['frame2_text_' + size]);
    $("#f3-copy h1").html(dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0]['frame3_text_' + size]);

    if (dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].is_default || !dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].show_price) {
        backupAnimation();
    } else {
        loadFeed();
    }

}

function exit() {
    Enabler.exitOverride('clickthrough', clicktag);
}

function loadFeed() {

    $.ajax({
        type: 'GET',
        url: dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].json,
        async: false,
        contentType: "application/json",
        dataType: 'json',
        success: function (json) {

            if (json.error) {
                backupAnimation();
                return;
            }

            deal = json.dealQueryResult.result.deals.deal;

            if (json.dealQueryResult.result.deals.numberOfDeals == "0") {
                backupAnimation();
                return;
            }

            var dest = deal.arrivalAirport.airport.displayName;

            $('.bg-image-01').attr('src', backgroundImage);

            $("#f1-copy h1").html(dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0]['frame1_text_' + size]);
            $("#f2-copy h1").html(dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0]['frame2_text_' + size]);

            var f2 = dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0]['frame2_text_' + size] + "<br/>";

            if (dest.indexOf("(") > -1) {
                var s = dest.split("(")
                var a = s[0];
                var b = a + "<br/>(" + s[1];
                f2 += b;
            } else {
                f2 += dest;
            }

            $("#from").html("Fly from " + deal.departureAirport.airport.displayName + " to");
            $("#destination").html(deal.arrivalAirport.airport.displayName);
            $("#price").html(deal.price.currencySymbol + deal.price.value + "<span id='asterix-char'>*</span>");

            if (dest.length > 25) {
                $("#destination").css("fontSize", "16px");
            }

            if (dest.indexOf("(") > -1) {

                if (dest.length > 22) {
                    $("#destination").css("fontSize", "20px");
                } else if (dest.indexOf("(") > -1 && dest.length > 22) {
                    $("#destination").css("fontSize", "20px");
                } else {
                    $("#destination").css("fontSize", "34px");
                }
            }

            var rightcopy = "<br />";

            if (deal.travelClass.indexOf("ECO") > -1)
                rightcopy += "Economy<br />";

            if (deal.travelClass.indexOf("BUS") > -1)
                rightcopy += "Business<br />";

            if (deal.travelClass.indexOf("PRE") > -1)
                rightcopy += "Premium Economy<br />";

            if (deal.travelClass.indexOf("FIR") > -1)
                rightcopy += "First class<br />";

            if (deal.tripType.value == "O")
                rightcopy += "One-way";
            else
                rightcopy += "return";

            $("#price-right-copy").html(rightcopy);


            if (imagesLoaded) {
                initBanner();
            } else {
                si = setInterval(function () {
                    if (imagesLoaded) {
                        initBanner();
                        clearInterval(si);
                    }
                }, 250)
            }
        },
        error: function (e) {
            console.log("ERROR");
            console.log(e);
            backupAnimation();
        }

    });
}

function initBanner() {

    if (!Enabler.isVisible())
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, initAnimation);
    else
        initAnimation();
}

function initAnimation() {
    if (dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0].show_video) {

        var isDesktop = true;

        if (md.phone() || md.tablet())
            isDesktop = false;

        var videoURL = dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0]['video_' + size].Url;

        if (videoURL != "" && videoURL.indexOf('https://') > -1 && isDesktop) {
            videoSetup()
        } else {
            $('.bg-image-01').attr('src', backgroundImage);
            initCSS();
            startAnimation();
            adjustCopyLayout();
        }

    } else {
        $('.bg-image-01').attr('src', backgroundImage);
        initCSS();
        startAnimation();
        adjustCopyLayout();
    }
}

function videoSetup() {

    $('#video').show();

    var mp4 = dynamicContent.SFID00303QFAirlineAO_LondonRed_PlanetFeb16_Sheet1[0]['video_' + size].Url;
    var ogg = mp4.split(".mp4")[0] + ".ogg";
    var webm = mp4.split(".mp4")[0] + ".webm";

    var vid = document.getElementById('video-el');

    $('#video video > source:eq(0)').attr('src', mp4);
    $('#video video > source:eq(1)').attr('src', ogg);
    $('#video video > source:eq(2)').attr('src', webm);

    $('#video video').load();
    $('#video video').bind('loadeddata', function (e) {

        if (vid.readyState == 3 || vid.readyState == 4) {
            $('.bg-image-01').hide();
            initCSS();
            startAnimation();
            adjustCopyLayout();
        }

    });

    $('#video video').bind('error', function (e) {
        $('#video').hide();
        $('.bg-image-01').attr('src', backgroundImage);
        initCSS();
        startAnimation();
        adjustCopyLayout();
    });

}
