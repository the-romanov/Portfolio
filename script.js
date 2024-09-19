
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

    document.getElementById("test2").innerHTML=(maxTranslateX);
    document.getElementById("test3").innerHTML=(alpha);
    if (translateX <= translateStop) {
    container.style.transform = `translateX(-${translateX}px)`;
    } else if (maxTranslateX * 2.5 <= translateX) {
        container.style.transform = `translateX(-${translateStop}px) translateY(-${txy}px)`;
    } else { //if (maxTranslateX * 1.5 <= translateX) {
        container.style.transform = `translateX(-${translateStop}px)`;
        vignette.style.opacity = (1-alpha);


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
