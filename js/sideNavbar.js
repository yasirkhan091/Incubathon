function openNav() {
    document.getElementById("navbar").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("navbar").style.width = "0";
  }

  window.addEventListener("resize",()=>{
    if(screen.width>=1053)
    {
      document.getElementById('navbar').style.transition="all 0s ease";
      document.getElementById('navbar').style.width="100%";
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
      setTimeout(()=>{
        document.getElementById('navbar').style.transition="all 0.5s ease";
      },1000);
      
    }
    else
    {
      document.getElementById('navbar').style.transition="all 0s ease";
      document.getElementById('navbar').style.width="0%";
      let navbar = document.getElementById('navbar');
                navbar.style.setProperty('--navBack', 'transparent');
                navbar.style.setProperty('--navColor', '#818181');
                navbar.style.setProperty('--hoverBack', 'transparent');
                navbar.style.setProperty('--hoverColor', '#f1f1f1');
      setTimeout(()=>{
        document.getElementById('navbar').style.transition="all 0.5s ease";
      },1000);
    }
  })