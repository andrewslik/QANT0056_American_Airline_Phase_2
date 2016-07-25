var deal = {}
var size = "728x90";
var clicktag;
var md = new MobileDetect(window.navigator.userAgent);
var backgroundImage;

Enabler.setProfileId(1080874);
var devDynamicContent = {};

devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1= [{}];
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0]._id = 0;
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].id = 1;
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].reporting = "SG1 East adl-jfk";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].city_pair = "ADL-JFK";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].version = "video-east";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].show_video = true;
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].show_price = true;
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].is_default = false;
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].Active = true;
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].JSON = "https:\/\/www.qantasflightdeals.com\/api\/search?&dealTypeCode=A&cheapestDealPerDistinctAirportPair=true&travelClass=ECO&tripType=R&quantity=1&marketingRegionCode=au&departureAirportCodes=ADL&arrivalAirportCodes=JFK&callback=callbackFunction";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].URL = {};
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].URL.Url = "http://www.qantas.com/au/en/flight-deals/city-pairs.html/ADL/JFK/economy/lowest?alt_cam=au:rp:0:dis:dbm:aaph2:n:n:sg1:n";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].bkgd_160x600_1 = {};
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].bkgd_160x600_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/NYC-160x600.jpg";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].video_160x600_1 = {};
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].video_160x600_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0056/160x600_E.mp4";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].bkgd_300x250_1 = {};
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].bkgd_300x250_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/NYC-300x250.jpg";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].video_300x250_1 = {};
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].video_300x250_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0056/300x250_E.mp4";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].bkgd_300x600_1 = {};
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].bkgd_300x600_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/JFK-300x600.jpg";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].video_300x600_1 = {};
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].video_300x600_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0056/300x600_E.mp4";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].bkgd_728x90_1 = {};
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].bkgd_728x90_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/JFK-728x90.jpg";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].video_728x90_1 = {};
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].video_728x90_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0056/728x90_E.mp4";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].bkgd_970x250_1 = {};
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].bkgd_970x250_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/JFK-970x250.jpg";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].video_970x250_1 = {};
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].video_970x250_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0056/970x250_E.mp4";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame1_text_160x600 = "<br>Over 150<br>destinations<br>in the USA";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame1_text_300x250 = "Over 150<br>destinations<br>in the USA";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame1_text_300x600 = "Over 150 destinations<br>in the USA";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame1_text_728x90 = "Over 150 destinations in the USA";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame1_text_970x250 = "Over 150 destinations in the USA";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame2_text_160x600 = "<br>Two airlines,<br>one world<br>class experience";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame2_text_300x250 = "Two airlines,<br>one world-class<br>experience";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame2_text_300x600 = "<br>Two airlines,<br>one world-class<br>experience";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame2_text_728x90 = "Two airlines,<br>one world-class<br>experience";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame2_text_970x250 = "Two airlines, one world-class experience";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame3_text_160x600 = "Plan your USA adventure with Qantas and American Airlines";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame3_text_300x250 = "Plan your USA<br>adventure with Qantas<br>and American Airlines";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame3_text_300x600 = "Plan your USA adventure<br>with Qantas and American Airlines";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame3_text_728x90 = "Plan your USA adventure with<br>Qantas and American Airlines";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].frame3_text_970x250 = "Plan your USA adventure with Qantas and American Airlines";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].cta = "Book now";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].short_terms = "*Price based on payment at qantas.com by BPAY or POLi. Click for important information.";
devDynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].tcs = "Price is based on payment at qantas.com by BPAY or POLi. Prices are updated at regular intervals throughout the day and may be subject to change and limited availability. Travel is via Sydney. Visit qantas.com for travel dates, applicable offer end dates and other conditions";
Enabler.setDevDynamicContent(devDynamicContent);

function politeInit() {
    $('#video').hide();
    clicktag = dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].URL.Url;
    backgroundImage = dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0]['bkgd_' + size + '_1'].Url;
    preloadAssets();

    $(".terms").html(dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].short_terms);
    $(".terms-txt").html(dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].tcs);
    $("#f1-copy h1").html(dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0]['frame1_text_' + size]);
    $("#f2-copy h1").html(dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0]['frame2_text_' + size]);
    $("#f3-copy h1").html(dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0]['frame3_text_' + size]);

    if (dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].is_default || !dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].show_price)
        backupAnimation();
    else
        loadFeed();
}

function exit() {
    Enabler.exitOverride('clickthrough', clicktag);
}

function loadFeed() {

    $.ajax({
        type: 'GET',
        url: dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].JSON,
        async: false,
        contentType: "application/json",
        dataType: 'json',
        success: function(json) {

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

            $("#f1-copy h1").html(dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0]['frame1_text_' + size]);
            $("#f2-copy h1").html(dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0]['frame2_text_' + size]);

            var f2 = dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0]['frame2_text_' + size] + "<br/>";

            if (dest.indexOf("(") > -1) {
                var s = dest.split("(")
                var a = s[0];
                var b = a + "<br/>(" + s[1];
                f2 += b;
            } else {
                f2 += dest;
            }

            //$("#f2-copy h1").html(f2);
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
                si = setInterval(function() {
                    if (imagesLoaded) {
                        initBanner();
                        clearInterval(si);
                    }
                }, 250)
            }
        },
        error: function(e) {
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
    if (dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0].show_video) {

        var isDesktop = true;

        if (md.phone() || md.tablet())
            isDesktop = false;

        var videoURL = dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0]['video_' + size + '_1'].Url;

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

    var mp4 = dynamicContent.SFID00421QFAirlineAA_Phase_2Red_PlanetJun16_Sheet1[0]['video_' + size + '_1'].Url;
    var ogg = mp4.split(".mp4")[0] + ".ogg";
    var webm = mp4.split(".mp4")[0] + ".webm";

    var vid = document.getElementById('video-el');

    $('#video video > source:eq(0)').attr('src', mp4);
    $('#video video > source:eq(1)').attr('src', ogg);
    $('#video video > source:eq(2)').attr('src', webm);

    $('#video video').load();
    $('#video video').bind('loadeddata', function(e) {

        if (vid.readyState == 3 || vid.readyState == 4) {
            $('.bg-image-01').hide();
            initCSS();
            startAnimation();
            adjustCopyLayout();
        }

    });

    $('#video video').bind('error', function(e) {
        $('#video').hide();
        $('.bg-image-01').attr('src', backgroundImage);
        initCSS();
        startAnimation();
        adjustCopyLayout();
    });

}
