window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveals');

    for (var i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpos = 100;
        if (revealtop < windowheight - revealpos) {
            reveals[i].classList.add('active');
        }
        else
            reveals[i].classList.remove('active');
    }
        if(screen.width>1053)
        {
            let ourMission = document.querySelector("#OurMissions");
            let ourMissionTop = ourMission.getBoundingClientRect().top;
            if (ourMissionTop < window.innerHeight) {
                let navbar = document.getElementById('navbar');
                navbar.style.setProperty('--navBack', 'black');
                navbar.style.setProperty('--navColor', 'white');
                navbar.style.setProperty('--hoverBack', 'white');
                navbar.style.setProperty('--hoverColor', 'black');
            }
            else {
                let navbar = document.getElementById('navbar');
                navbar.style.setProperty('--navBack', 'white');
                navbar.style.setProperty('--navColor', 'black');
                navbar.style.setProperty('--hoverBack', 'black');
                navbar.style.setProperty('--hoverColor', 'white');
            }

        }
        else
        {
            let navbar = document.getElementById('navbar');
                navbar.style.setProperty('--navBack', 'transparent');
                navbar.style.setProperty('--navColor', '#818181');
                navbar.style.setProperty('--hoverBack', 'transparent');
                navbar.style.setProperty('--hoverColor', '#f1f1f1');
        }
    
}
reveal();
