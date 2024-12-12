$(document).ready(function() {
    var counter = 5;
    var left = $('#larrow');
    var right = $('#rarrow');

    $(right).click(function() {
        $(left).prop('disabled', true);
        $(right).prop('disabled', true);

        if (counter === 8) {
            $(`#item8`).removeClass('trans');
            $(`#item1`).removeClass('trans');
            $(`.carousel-track`).removeClass('trans');
        } else if (counter === 1) {
            counter = 8;
            $(`#item7, #item8`).css({ visibility: 'visible' });
            $(`#item8`).addClass('trans').css({ width: "20vw", height: "68vh" });
            $(`#item9, #item6`).css({ visibility: 'visible' });
            $(`#item1`).addClass('trans').css({ width: "15vw", height: "50vh"});
            $(`.carousel-track`).addClass('trans').css({ transform: 'translateX(-57.65%)' });
            $(`#item0, #item1, #item2`).css({ visibility: 'hidden' });
        }

        var push = (((counter - 6) * -9.714285714) - 28.50714258714);
        $(`#item${counter}`).stop(true, true).animate({ width: "15vw", height: "50vh" }, 200);
        $(`#item${counter - 1}`).stop(true, true).animate({ width: "20vw", height: "68vh" }, 200);
        $(`#item${counter - 2}`).css({ visibility: 'visible' });
        $(`.carousel-track`).css({ transform: `translateX(${push}%)` });
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
                $(`#item8`).addClass('trans').css({ width: "20vw", height: "68vh"});
                $(`#item9`).css({ visibility: 'visible' });
                $(`#item1`).addClass('trans').css({ width: "15vw", height: "50vh"});
                $(`.carousel-track`).addClass('trans').css({ transform: 'translateX(-57.65%)' });
                $(`#item0, #item1, #item2`).css({ visibility: 'hidden' });
            }
        }, 1000);
    });

    $(left).click(function() {
        $(left).prop('disabled', true);
        $(right).prop('disabled', true);

        if (counter === 1) {
            $('#item8').removeClass('trans');
            $('#item1').removeClass('trans');
            $(`.carousel-track`).removeClass('trans');
        } else if (counter === 8) {
            counter = 1;
            $(`#item0, #item1`).css({ visibility: 'visible'});
            $('#item1').addClass('trans').css({ width: "20vw", height: "68vh"});
            $(`#item2`).css({ visibility: 'visible' });
            $(`.carousel-track`).addClass('trans').css({ transform: 'translateX(10.35%)' });
            $(`#item7, #item8, #item9`).css({ visibility: 'hidden' });
            $(`#item8`).css({ width: "15vw", height: "50vh"});
        }

        var push = (((counter - 4) * -9.714285714) - 28.50714258714);
        $(`#item${counter}`).stop(true, true).animate({ width: "15vw", height: "50vh" }, 200);
        $(`#item${counter + 1}`).stop(true, true).animate({ width: "20vw", height: "68vh" }, 200);
        $(`#item${counter + 2}`).css({ visibility: 'visible' });
        $(`.carousel-track`).css({ transform: `translateX(${push}%)` });
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
                $('#item1').addClass('trans').css({ width: "20vw", height: "68vh"});
                $(`#item2`).css({ visibility: 'visible' });
                $(`.carousel-track`).addClass('trans').css({ transform: 'translateX(10.4%)' });
                $(`#item7, #item8, #item9`).css({ visibility: 'hidden' });
                $(`#item8`).css({ width: "15vw", height: "50vh"});
            }
        }, 1000);
    });
});
function gitHub() {
    location.assign("https://github.com/the-romanov/");
}
function cv() {
    const fileUrl = './Downloads/CV.pdf'; 
    const a = document.createElement('a');
    a.href = fileUrl; 
    a.download = 'cv.pdf'; 
    a.click();
    a.remove();
}

  function checkViewport() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var grei = document.getElementsByClassName('gray');
    var fullscrollElement = document.getElementById('fullscroll');
    var lPortal = document.getElementById('lportal');
    var rPortal = document.getElementById('rportal');

    if ((width / 2) * 3.5 < height && (width / 2) * 3.75 <= height) {
        fullscrollElement.style.transform = 'translateY(-52vw)';
    } else if ((width / 2) * 3.25 < height && (width / 2) * 3.5 <= height) {
        fullscrollElement.style.transform = 'translateY(-48vw)';
    } else if ((width / 2) * 3 < height && (width / 2) * 3.25 <= height) {
        fullscrollElement.style.transform = 'translateY(-40vw)';
        lPortal.style.setProperty('transform', 'translate(64vw, 20vw)', 'important');
        rPortal.style.setProperty('transform', 'translate(-5vw, 20vw)', 'important');
    } else if ((width / 2) * 2.75 < height && (width / 2) * 3 <= height) {
        fullscrollElement.style.transform = 'translateY(-38vw)';
        lPortal.style.setProperty('transform', 'translate(64vw, 16vw)', 'important');
        rPortal.style.setProperty('transform', 'translate(-5vw, 16vw)', 'important');
    } else if ((width / 2) * 2.5 < height && (width / 2) * 2.75 <= height) {
        fullscrollElement.style.transform = 'translateY(-30vw)';
        lPortal.style.setProperty('transform', 'translate(64vw, 12vw)', 'important');
        rPortal.style.setProperty('transform', 'translate(-5vw, 12vw)', 'important');
    } else if ((width / 2) * 2.25 < height && (width / 2) * 2.5 <= height) {
        fullscrollElement.style.transform = 'translateY(-30vw)';
        lPortal.style.setProperty('transform', 'translate(64vw, 10vw)', 'important');
        rPortal.style.setProperty('transform', 'translate(-5vw, 10vw)', 'important');
    } else if ((width / 2) * 2 < height && (width / 2) * 2.25 <= height) {
        fullscrollElement.style.transform = 'translateY(-25vw)';
        lPortal.style.setProperty('transform', 'translate(64vw, 8vw)', 'important');
        rPortal.style.setProperty('transform', 'translate(-5vw, 8vw)', 'important');
    } else if ((width / 2) * 1.75 < height && (width / 2) * 2 <= height) { 
        fullscrollElement.style.transform = 'translateY(-20vw)';
        lPortal.style.setProperty('transform', 'translate(64vw, 6vw)', 'important');
        rPortal.style.setProperty('transform', 'translate(-5vw, 6vw)', 'important');
    } else if ((width / 2) * 1.5 < height && (width / 2) * 1.75 <= height) {
        fullscrollElement.style.transform = 'translateY(-15vw)';
        lPortal.style.setProperty('transform', 'translate(64vw, 4vw)', 'important');
        rPortal.style.setProperty('transform', 'translate(-5vw, 4vw)', 'important');
    } else if ((width / 2) * 1.2 < height && (width / 2) * 1.5 <= height) {
        fullscrollElement.style.transform = 'translateY(-10vw)';
        lPortal.style.setProperty('transform', 'translate(64vw, 2vw)', 'important');
        rPortal.style.setProperty('transform', 'translate(-5vw, 2vw)', 'important');
    } else if ((width / 2) * 1 < height && (width / 2) * 1.2 <= height) {
        fullscrollElement.style.transform = 'translateY(-5vw)';
        lPortal.style.setProperty('transform', 'translate(64vw, -1vw)', 'important');
        rPortal.style.setProperty('transform', 'translate(-5vw, -1vw)', 'important');
    } else {
        fullscrollElement.style.transform = 'translateY(-0vw)';
        lPortal.style.setProperty('transform', 'translate(64vw, -1vw)', 'important');
        rPortal.style.setProperty('transform', 'translate(-5vw, -1vw)', 'important');
    }
}

window.addEventListener('resize', checkViewport);
window.addEventListener('load', checkViewport);