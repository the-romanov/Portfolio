$(document).ready(function() {
    var counter = 5;
    var push = 49.5;
    var left = $('#larrow');
    var right = $('#rarrow');
    var notransfer = false;

    $(right).click(function() {
        $(left).prop('disabled', true);
        $(right).prop('disabled', true);

        if (counter === 1) {
            counter = 8;
            notransfer = true;
            $(`#item7, #item8, #item9`).css({ display: 'block' });
            $(`#item8`).css({ width: "20vw", height: "68vw" });
            $(`#item0, #item1, #item2`).css({ display: 'none' });
        }
        $(`#carousel-track`).addClass('trans');
        $(`#carousel-track`).css({ transform: `translateX(${push-8.5}vw)` });
        $(`#item${counter - 2}`).css({ display: 'block' });
        $(`#item${counter - 1}`).css({ width: "20vw", height: "68vw" }, 200);
        $(`#item${counter}img`).stop(true, true).animate({width: "15vw"}, 1000);
        $(`#item${counter - 1}img`).stop(true, true).animate({width: "20vw"}, 1000);
        $(`#carousel-track`).removeClass('trans');
        $(`#carousel-track`).css({transform: 'translateX(58vw)'}, 1000);
        setTimeout(function() {
            notransfer = false;
            $(left).prop('disabled', false);
            $(right).prop('disabled', false);
            $(`#item${counter + 1}`).css({ display: 'none' });
            $(`#carousel-track`).addClass('trans');
            $(`#carousel-track`).css({ transform: `translateX(49.5vw)` });
            counter--;
            if (counter < 2) {
                counter = 8;
                $(`#item7, #item8, #item9`).css({ display: 'block' });
                $(`#item8`).css({ width: "20vw", height: "68vw"});
                $(`#item8img`).css({width: "20vw"});
                $(`#item0, #item1, #item2`).css({ display: 'none' });
            }
        }, 1000);
    });

    $(left).click(function() {
        $(left).prop('disabled', true);
        $(right).prop('disabled', true);

        if (counter === 8) {
            counter = 1;
            notransfer = true;
            $(`#item0, #item1, #item2`).css({ display: 'block' });
            $(`#item1`).css({ width: "20vw", height: "68vw" });
            $(`#item7, #item8, #item9`).css({ display: 'none' });
        }
            $(`#carousel-track`).addClass('trans');
            $(`#carousel-track`).css({ transform: `translateX(${push+8.5}vw)` });
            $(`#item${counter + 2}`).css({ display: 'block' });
            $(`#item${counter + 1}`).css({ width: "20vw", height: "68vw" }, 200);
            $(`#item${counter}img`).stop(true, true).animate({width: "15vw"}, 1000);
            $(`#item${counter + 1}img`).stop(true, true).animate({width: "20vw"}, 1000);
            $(`#carousel-track`).removeClass('trans');
            $(`#carousel-track`).css({transform: 'translateX(41vw)'}, 1000);
        

        setTimeout(function() {
            notransfer = false;
            $(left).prop('disabled', false);
            $(right).prop('disabled', false);
            $(`#item${counter - 1}`).css({ display: 'none' });
            $(`#carousel-track`).addClass('trans');
            $(`#carousel-track`).css({ transform: `translateX(49.5vw)` });
            counter++;
            
            if (counter > 7) {
                counter = 1;
                $(`#item0, #item1, #item2`).css({ display: 'block' });
                $(`#item1`).css({ width: "20vw", height: "68vw"});
                $(`#item1img`).css({width: "20vw"});
                $(`#item7, #item8, #item9`).css({ display: 'none' });
            }
        }, 1000);
    });
})
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