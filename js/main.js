// Toogle navbar 
let menuIcon =document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
      
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
}



const typed = new Typed('.multiple-text',{
    strings:[ 'student at IDN Akhwat', 'sholehah child ','A good Muslimah with good manners'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
})

// my galeri
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = item.src;
    });
});

function closeModal() {
    modal.style.display = "none";
}

const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
  });

  skill.addEventListener('mouseleave', () => {
    skill.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  });
});


window.addEventListener('scroll', function() {
    const skills = document.querySelectorAll('.skill');
    const screenPosition = window.innerHeight / 1.2;
  
    skills.forEach(skill => {
      const skillPosition = skill.getBoundingClientRect().top;
      
      if (skillPosition < screenPosition) {
        skill.style.opacity = '1';
        skill.style.transform = 'translateY(0)';
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
      skill.style.opacity = '0';
      skill.style.transform = 'translateY(50px)';
      skill.style.transition = 'all 0.6s ease';
    });
  });


  




