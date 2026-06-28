function openEnvelope() {
  
      document.querySelector('.envelope-container').classList.add('open');
    const env = document.getElementById('envelope');
    const screen = document.getElementById('envelope-screen');
    const content = document.getElementById('invitation-content');
    const music = document.getElementById("bg-music");
    music.play();
    
    env.classList.add('open');
    setTimeout(() => {
        screen.style.opacity = '0';
        setTimeout(() => {
            screen.style.display = 'none';
            content.style.display = 'block';
            content.style.opacity = '1';
        }, 1000);
    }, 800);
}

document.getElementById("invitation-content").scrollIntoView({
    behavior: "smooth",
    block: "start"
});


const countDownDate = new Date("Jul 10, 2026 15:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const dist = countDownDate - now;
    
    const d = Math.floor(dist / (1000 * 60 * 60 * 24));
    const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((dist % (1000 * 60)) / 1000);

    if(document.getElementById("days")) {
        document.getElementById("days").innerText = d;
        document.getElementById("hours").innerText = h;
        document.getElementById("minutes").innerText = m;
        document.getElementById("seconds").innerText = s;
    }
}, 1000);