document.addEventListener("scroll", function() {
    const container = document.querySelector("#front");
    const vignette = document.querySelector("#vignette");
    const scrollPosition = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - (window.innerHeight);
    const maxTranslateX = window.innerWidth;
    const translateX = (scrollPosition / scrollHeight) * maxTranslateX * 3.2;
    const translateStop = maxTranslateX+12
    const finishAnimation = (maxTranslateX/3)
    const startAnimation = (maxTranslateX * 1.1)
    const animationBoundary = finishAnimation-startAnimation
    const txy = translateX - (maxTranslateX * 2.5)
    const alpha = (translateX - startAnimation)/finishAnimation;

    //document.getElementById("test2").innerHTML=(maxTranslateX);
    //document.getElementById("test3").innerHTML=(alpha);
    if (translateX <= translateStop) {
        vignette.style.opacity = 1;
    container.style.transform = `translateX(-${translateX}px)`;
    } else if (maxTranslateX * 2.5 <= translateX) {
        container.style.transform = `translateX(-${translateStop}px) translateY(-${txy}px)`;
        vignette.style.opacity = 0;
        vignette.style.visibility="hidden";
    } else { //if (maxTranslateX * 1.5 <= translateX) {
        container.style.transform = `translateX(-${translateStop}px)`;
        vignette.style.opacity = (1-alpha);
        vignette.style.visibility="visible";


    }
});
function checkWindowSize() {
    if ($(window).width() <= 600) {
        // Change the text of the element with id "textElement"
        $('#scrol').text('SWIPE DOWN TO SEE THE EXTENDED PORTFOLIO');
        $('#grades').text('TO COME. DOING: A LEVELS')
        if ($(window).height() <= 930) {
            $('#whoamidesc').html('I am a driven young person who is willing to<br>craft excellence from hard work and from scratch.<br><br>My love for computers which started since I was<br>months old has propelled me to become so<br>intrigued in to the digital world.<br><br>Computers have become second nature to me.<br>Because of technology and how fast it advances,<br><br>I also advance myself with working hard and<br>driving myself to change the world for better.');
        } else {
            $('#whoamidesc').html('I am a driven young person who is willing to craft excellence from hard work and from scratch.<br><br>My love for computers which started since I was months old has propelled me to become so<br>intrigued in to the digital world. Computers have become second nature to me.<br><br>Because of technology and how fast it advances, I also advance myself with working hard and<br>driving myself to change the world for better.')
        }
        if ($(window).height() <= 800) {
            $('#grades').html('TO COME.<br>DOING: A LEVELS')
            $('#program').html('Programming Languages:<br>5+ Years of Java, C#<br>3+ Years of Python<br>1+ Year of HTML/CSS/JavaScript<br><br>Game Developing:<br>1+ Year of Unity<br>1+ Year of Unreal Engine 5<br>3+ Years of Roblox Studio<br>Employed in Work Experience & Projects')
        }
        if ($(window).height() <= 600) {
            $('#program').html('Programming Languages: 5+ Years of Java, C#. 3+ Years of Python. 1+ Year of HTML/CSS/JavaScript<br><br>Game Developing: 1+ Year of Unity. 1+ Year of Unreal Engine 5. 3+ Years of Roblox Studio<br>Employed in Work Experience & Projects')
            $('#whoamidesc').html('I am a driven young person who is willing to craft excellence from hard work and from scratch.<br><br>My love for computers which started since I was months old has propelled me to become so<br>intrigued in to the digital world. Computers have become second nature to me.<br><br>Because of technology and how fast it advances, I also advance myself with working hard and<br>driving myself to change the world for better.')
        }
    } else {
        // Optionally, revert the text if the window is resized back above 600px
        $('#scrol').text('SCROLL OR SWIPE DOWN TO START');
        $('#whoamidesc').html('I am a driven young person who is willing to craft excellence from hard work and from scratch.<br><br>My love for computers which started since I was months old has propelled me to become so<br>intrigued in to the digital world. Computers have become second nature to me.<br><br>Because of technology and how fast it advances, I also advance myself with working hard and<br>driving myself to change the world for better.')
        $('#grades').text('TO COME. DOING: A LEVELS')
    }
    if ($(window).height() <= 320 && $(window).width() <= 240) {
        $('#whoamidesc').html('I am a driven young person who is willing to craft excellence<br>from hard work and from scratch.<br><br>My love for computers which started since I was months old<br>has propelled me to become so intrigued in to the<br>digital world. Computers have become second nature to me.<br><br>Because of technology and how fast it advances, I also<br>advance myself with working hard and driving myself<br>to change the world for better.')
    }
    /*if ($(window).width() <= 400 && $(window).height() <= 500) {
        alert("Notice. Your screen is less than 400px * 500px resolution. Do not expect things to look adjusted.")
    } else if ($(window).height() <= 500) {
        alert("Notice. Your screen is less than 500px in height. Do not expect things to look adjusted.")
    } else if ($(window).width() <= 400) {
        alert("Notice. Your screen is less than 400px in width. Do not expect things to look adjusted.")
    }*/
   
}

// Check on window resize
$(window).on('resize', checkWindowSize);

// Check on initial load
checkWindowSize();
window.addEventListener('resize', () => {
    // Get updated viewport dimensions
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    console.log('Updated Viewport Width:', viewportWidth, 'px');
    console.log('Updated Viewport Height:', viewportHeight, 'px');

    // Get updated element dimensions
    let element = document.getElementById('textportfolio');
    let elementWidth = element.clientWidth;
    let elementHeight = element.clientHeight;

    console.log('Updated Element Width:', elementWidth, 'px');
    console.log('Updated Element Height:', elementHeight, 'px');
});

$(document).ready(function() {
    var counter = 5;
    var left = $('#left')
    var right = $('#right')
    $(right).click(function() {
    $(left).prop('disabled', true);
    $(right).prop('disabled', true);
    if (counter == 8) {
        $('#item8').removeClass('trans');
        $('#item1').removeClass('trans');
        $('.carousel-track').removeClass('trans');
    } else if (counter == 1) {
        counter = 8;
        $(`#item7, #item8`).css({ visibility: 'visible' });
            $(`#item8`).addClass('trans').css({ width: "20vw", height: "68vh", transform: 'translateY(0vh)' });
            $(`#item9, #item6`).css({ visibility: 'visible' });
            $(`#item1`).addClass('trans').css({ width: "15vw", height: "50vh", transform: 'translateY(8vh)' });
            $(`.carousel-track`).addClass('trans').css({ transform: 'translateX(-57.65%)' });
            $(`#item0, #item1, #item2`).css({ visibility: 'hidden' });
    }
    var push = (((counter-6) * - 9.714285714) -28.50714258714);
    $(`#item${counter}`).animate({ width: "15vw", height: "50vh" }, 200);
    $(`#item${counter - 1}`).animate({ width: "20vw", height: "68vh" }, 200);
    $(`#item${counter - 2}`).css({ visibility: 'visible' });
    $('.carousel-track').css({ transform: `translateX(${push}%)`});
    $(`#item${counter}`).css({ transform: 'translateY(8vh)' });
    $(`#item${counter - 1}`).css({ transform: 'translateY(0vh)' });
    $(`.carousel-track`).removeClass('trans');
    $('#item1').removeClass('trans');
    $('#item8').removeClass('trans');
    setTimeout(function() {
        $(left).prop('disabled', false);
        $(right).prop('disabled', false);
        $(`#item${counter + 1}`).css({ visibility: 'hidden' });
        counter--;
        if (counter < 2) {
            counter = 8;
            $(`#item7, #item8`).css({ visibility: 'visible' });
            $(`#item8`).addClass('trans').css({ width: "20vw", height: "68vh", transform: 'translateY(0vh)' });
            $(`#item9`).css({ visibility: 'visible' });
            $(`#item1`).addClass('trans').css({ width: "15vw", height: "50vh", transform: 'translateY(8vh)' });
            $(`.carousel-track`).addClass('trans').css({ transform: 'translateX(-57.65%)' });
            $(`#item0, #item1, #item2`).css({ visibility: 'hidden' });
        }
    }, 1000);
});

    $(left).click(function() {
        $(left).prop('disabled', true);
        $(right).prop('disabled', true);
        if (counter == 1) {
            $('#item8').removeClass('trans');
            $('#item1').removeClass('trans');
            $('.carousel-track').removeClass('trans');
        } else if (counter == 8) {
        counter = 1;
        $(`#item0, #item1`).css({ visibility: 'visible' });
                $('#item1').addClass('trans').css({ width: "20vw", height: "68vh", transform: 'translateY(0vh)' });
                $(`#item2`).css({ visibility: 'visible' });
                $('.carousel-track').addClass('trans').css({ transform: 'translateX(10.35%)'});
                $(`#item7, #item8, #item9`).css({ visibility: 'hidden' });
                $(`#item8`).css({ width: "15vw", height: "50vh", transform: 'translateY(8vh)' });
    }
        var push = (((counter - 4) * - 9.714285714) -28.50714258714);
        $(`#item${counter}`).animate({ width: "15vw", height: "50vh" }, 200);
        $(`#item${counter + 1}`).animate({ width: "20vw", height: "68vh" }, 200);
        $(`#item${counter + 2}`).css({ visibility: 'visible' });
        $('.carousel-track').css({ transform: `translateX(${push}%)`});
        $(`#item${counter + 1}`).css({ transform: 'translateY(0vh)' });
        $(`#item${counter}`).css({ transform: 'translateY(8vh)' });
        $(`.carousel-track`).removeClass('trans');
        $('#item1').removeClass('trans');
        $('#item8').removeClass('trans');
        setTimeout(function() {
            $(left).prop('disabled', false);
            $(right).prop('disabled', false);
            $(`#item${counter - 1}`).css({ visibility: 'hidden' });
            counter++;
            if (counter > 7) {
                counter = 1;
                $(`#item0, #item1`).css({ visibility: 'visible' });
                $('#item1').addClass('trans').css({ width: "20vw", height: "68vh", transform: 'translateY(0vh)' });
                $(`#item2`).css({ visibility: 'visible' });
                $('.carousel-track').addClass('trans').css({ transform: 'translateX(10.4%)' });
                $(`#item7, #item8, #item9`).css({ visibility: 'hidden' });
                $(`#item8`).css({ width: "15vw", height: "50vh", transform: 'translateY(8vh)' });
            }
        }, 1000);
    });
});
function unit4(){
    location.assign("website-development.html");
}
function unit10(){
    location.assign("animation.html");
}
function unit21(){
    location.assign("pitching-a-product.html");
}
function adjustTranslateY() {
            const div = document.getElementById('vignette');
            const screenWidth = window.innerWidth;

            // Change the translateY value based on screen width
            let translateYValue;

            if (screenWidth >= 1800) {
                translateYValue = -20;
            } else if (screenWidth >= 1600) {
                translateYValue = -31;
            } else if (screenWidth >= 1400) {
                translateYValue = -41;
            } else if (screenWidth >= 1200) {
                translateYValue = -51;
            } else if (screenWidth >= 1000) {
                translateYValue = -61;
            } else if (screenWidth >= 800) {
                translateYValue = -71;
            } else if (screenWidth >= 600) {
                translateYValue = -81;
            } else if (screenWidth >= 400) {
                translateYValue = -91;
            } else {
                translateYValue = -101;
            }

            // Apply the transformation
            div.style.transform = `translate(100vw ,${translateYValue}%)`;
        }

        // Listen for window resize and load events
        window.addEventListener('resize', adjustTranslateY);
        window.addEventListener('load', adjustTranslateY);