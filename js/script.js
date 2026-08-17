const menu = document.getElementById('menu');
const capa = document.querySelector('.capa');
const blocos = document.querySelectorAll('.aparecer');
const video = document.querySelector('.capa-video');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        menu.classList.add('menu-rolado');
    } else {
        menu.classList.remove('menu-rolado');
    }

    if (capa) {
        const progresso = Math.min(window.scrollY / window.innerHeight, 1);
        const videoAtivo = progresso > 0.08 && progresso < 0.95;
        capa.classList.toggle('is-video-active', videoAtivo);

        if (window.scrollY <= 10 && capaImagem) {
            capaImagem.style.opacity = '1';
            capaImagem.style.transform = 'scale(1)';
            capa.classList.remove('is-video-active');
        }
    }
});

const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
        }
    });
});

blocos.forEach(function (bloco) {
    observador.observe(bloco);
});

const capaImagem = document.querySelector('.capa-imagem');
const capaBarra = document.querySelector('.capa-barra');

if (video) {
    gsap.registerPlugin(ScrollTrigger);

    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', 'true');
    video.loop = false;
    video.volume = 0;

    const iniciarAnimacaoVideo = () => {
        if (!video.duration || Number.isNaN(video.duration)) return;

        gsap.to(video, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.capa',
                start: 'top top',
                end: '+=300',
                scrub: 0.5,
                onToggle: function (self) {
                    if (self.isActive) {
                        video.play().catch(() => {});
                    }
                }
            }
        });

        gsap.to(capaImagem, {
            opacity: 0,
            scale: 1.08,
            duration: 0.5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.capa',
                start: 'top top',
                end: '+=250',
                scrub: 0.5,
                onLeaveBack: function () {
                    gsap.to(capaImagem, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.35,
                        ease: 'power2.out'
                    });
                }
            }
        });

        ScrollTrigger.create({
            trigger: '.capa',
            start: 'top top',
            end: '+=1500',
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                const progresso = self.progress;
                const tempo = progresso * video.duration;
                if (progresso > 0) {
                    video.currentTime = tempo;
                }

                const videoAtivo = progresso > 0.08 && progresso < 0.95;
                capa.classList.toggle('is-video-active', videoAtivo);

                if (self.direction === -1 && self.progress < 0.08 && capaImagem) {
                    gsap.to(capaImagem, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                    capa.classList.remove('is-video-active');
                    video.pause();
                }

                if (progresso >= 0.95 && capaImagem) {
                    gsap.to(capaImagem, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.45,
                        ease: 'power2.out'
                    });
                }
            }
        });

        gsap.to(video, {
            scale: 1.12,
            ease: 'none',
            scrollTrigger: {
                trigger: '.capa',
                start: 'top top',
                end: '+=1500',
                scrub: 1
            }
        });
    };

    video.addEventListener('loadedmetadata', iniciarAnimacaoVideo);

    if (video.readyState >= 1) {
        iniciarAnimacaoVideo();
    }
}


