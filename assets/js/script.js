$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    (function() {
        emailjs.init("6KsRlnInF5I2Fy4bf");
    })();

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    $("#contact-form").submit(function (event) {
        emailjs.init("6KsRlnInF5I2Fy4bf");

        emailjs.sendForm('service_symsl69', 'template_xza6q8j', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
});

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Koussay Abroud";
    } else {
        document.title = "Come Back To Portfolio";
    }
});

var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web designing", "web development", "Mobile designing"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

const projectsData = [
    {
        "name": "Masroufi",
        "desc": "Masroufi est une application de gestion budgétaire personnelle qui permet de suivre les revenus et dépenses. ",
        "image": "Masroufi",
        "category": "Website",
        "links": {
            "code": "https://github.com/koussay267/Masroufi"
        }
    },
    {
        "name": "Dragon Vape",
        "desc": "Vape Store Website.",
        "image": "Dragon",
        "category": "Website",
        "links": {
            "code": "https://github.com/koussay267/Vape-Store"
        }
    },
    {
        "name": "Mon Panier",
        "desc": "applications Mobile pour un magasin en ligne .",
        "image": "MonPanier",
        "category": "App-Design",
        "links": {
            "view": "https://www.figma.com/design/iPXt3eH4a75IzAk49UzYv8/mon-panier?node-id=0-1&t=MfG90FB0wz04vZIW-1"
        }
    }
    ,
    {
        "name": "Paradise Travel Agency",
        "desc": "design pour un agence de voyage .",
        "image": "Paradise",
        "category": "App-Design",
        "links": {
            "view": "https://www.figma.com/design/ShAyxCAokdWxrAZJ1OpJMO/Untitled?node-id=0-1&t=DNZWYQiPsEl7Cslt-1"
        }
    }
];
const skillsData = [
    {
        "name": "VS Code",
        "icon": "https://img.icons8.com/?size=48&id=9OGIyU8hrxW5&format=png&color=000000"
    },
    {
        "name": "Figma",
        "icon": "https://img.icons8.com/?size=48&id=zfHRZ6i1Wg0U&format=png&color=000000"
    },
    {
        "name": "Bootstrap",
        "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "Java",
        "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
    },
    {
        "name": "PHP",
        "icon": "https://img.icons8.com/offices/48/000000/php-logo.png"
    },
    {
        "name": "Python",
        "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
        "name": "C++",
        "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
        "name": "C",
        "icon": "https://img.icons8.com/?size=48&id=40670&format=png&color=000000"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },
    {
        "name": "Illustratror ",
        "icon": "https://img.icons8.com/?size=48&id=13631&format=png&color=000000"
    },
    {
        "name": "Photoshop ",
        "icon": "https://img.icons8.com/?size=48&id=13677&format=png&color=000000"
    }
];

// Fetch skills and projects
showSkills(skillsData);
showProjects(projectsData);

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).forEach(project => {
        let buttonHTML = project.category === "App-Design" 
            ? `<a href="${project.links.view}" class="btn" target="_blank">View <i class="fas fa-eye"></i></a>`
            : `<a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>`;
        
        projectHTML += `
        <div class="box myselfIMG">
            <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
            <div class="content">
                <div class="tag">
                    <h3>${project.name}</h3>
                </div>
                <div class="desc">
                    <p>${project.desc}</p>
                    <div class="btns">
                        ${buttonHTML}
                    </div>
                </div>
            </div>
        </div>`;
    });
    projectsContainer.innerHTML = projectHTML;
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });
/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });
/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });
/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });
/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
