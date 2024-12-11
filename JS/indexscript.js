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
            $(`#item8`).addClass('trans').css({ width: "20vw", height: "68vh", transform: 'translateY(4vw)' });
            $(`#item9, #item6`).css({ visibility: 'visible' });
            $(`#item1`).addClass('trans').css({ width: "15vw", height: "50vh", transform: 'translateY(8vw)' });
            $(`.carousel-track`).addClass('trans').css({ transform: 'translateX(-57.65%)' });
            $(`#item0, #item1, #item2`).css({ visibility: 'hidden' });
        }

        var push = (((counter - 6) * -9.714285714) - 28.50714258714);
        $(`#item${counter}`).stop(true, true).animate({ width: "15vw", height: "50vh" }, 200);
        $(`#item${counter - 1}`).stop(true, true).animate({ width: "20vw", height: "68vh" }, 200);
        $(`#item${counter - 2}`).css({ visibility: 'visible' });
        $(`.carousel-track`).css({ transform: `translateX(${push}%)` });
        $(`#item${counter}`).css({ transform: 'translateY(8vw)' });
        $(`#item${counter - 1}`).css({ transform: 'translateY(4vw)' });
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
                $(`#item8`).addClass('trans').css({ width: "20vw", height: "68vh", transform: 'translateY(4vw)' });
                $(`#item9`).css({ visibility: 'visible' });
                $(`#item1`).addClass('trans').css({ width: "15vw", height: "50vh", transform: 'translateY(8vw)' });
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
            $(`#item0, #item1`).css({ visibility: 'visible' });
            $('#item1').addClass('trans').css({ width: "20vw", height: "68vh", transform: 'translateY(4vw)' });
            $(`#item2`).css({ visibility: 'visible' });
            $(`.carousel-track`).addClass('trans').css({ transform: 'translateX(10.35%)' });
            $(`#item7, #item8, #item9`).css({ visibility: 'hidden' });
            $(`#item8`).css({ width: "15vw", height: "50vh", transform: 'translateY(8vw)' });
        }

        var push = (((counter - 4) * -9.714285714) - 28.50714258714);
        $(`#item${counter}`).stop(true, true).animate({ width: "15vw", height: "50vh" }, 200);
        $(`#item${counter + 1}`).stop(true, true).animate({ width: "20vw", height: "68vh" }, 200);
        $(`#item${counter + 2}`).css({ visibility: 'visible' });
        $(`.carousel-track`).css({ transform: `translateX(${push}%)` });
        $(`#item${counter + 1}`).css({ transform: 'translateY(4vw)' });
        $(`#item${counter}`).css({ transform: 'translateY(8vw)' });
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
                $('#item1').addClass('trans').css({ width: "20vw", height: "68vh", transform: 'translateY(4vw)' });
                $(`#item2`).css({ visibility: 'visible' });
                $(`.carousel-track`).addClass('trans').css({ transform: 'translateX(10.4%)' });
                $(`#item7, #item8, #item9`).css({ visibility: 'hidden' });
                $(`#item8`).css({ width: "15vw", height: "50vh", transform: 'translateY(8vw)' });
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

function enforceRatio() {
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    if (width / height <= 1 / 3) {
      document.querySelector('.gray').style.backgroundColor = 'lightgreen';
    } else {
      document.querySelector('.gray').style.backgroundColor = '';
    }
  }
  
  window.addEventListener('resize', enforceRatio);
  enforceRatio();