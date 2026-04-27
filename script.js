// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    const isOpen = !mobileMenu.classList.contains("hidden");

    const line1 = menuToggle.querySelector(".line1");
    const line2 = menuToggle.querySelector(".line2");
    const line3 = menuToggle.querySelector(".line3");

    if (line1 && line2 && line3) {
      if (isOpen) {
        line1.style.transform = "translateY(8px) rotate(45deg)";
        line2.style.opacity = "0";
        line3.style.transform = "translateY(-8px) rotate(-45deg)";
      } else {
        line1.style.transform = "none";
        line2.style.opacity = "1";
        line3.style.transform = "none";
      }
    }
  });
}

// CLOSE MOBILE MENU ON LINK CLICK
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");

    const line1 = menuToggle.querySelector(".line1");
    const line2 = menuToggle.querySelector(".line2");
    const line3 = menuToggle.querySelector(".line3");

    line1.style.transform = "none";
    line2.style.opacity = "1";
    line3.style.transform = "none";
  });
});

// HEADER SHADOW ON SCROLL
const mainHeader = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    mainHeader.classList.add("shadow-md");
  } else {
    mainHeader.classList.remove("shadow-md");
  }
});

// FULL WEBSITE STAGGER SCROLL ANIMATION
const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const group = entry.target.closest("[data-stagger-group]");

      if (group) {
        const groupItems = group.querySelectorAll(
          ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
        );

        groupItems.forEach((item, index) => {
          const isSlow = group.classList.contains("slow-stagger");
const delayStep = isSlow ? 0.35 : 0.16;

item.style.setProperty("--delay", `${index * delayStep}s`);
          item.classList.add("active");
        });
      } else {
        entry.target.classList.add("active");
      }

      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));
// USP CARD DESIGN
document.querySelectorAll(".usp-card").forEach((card) => {
  card.classList.add(
    "relative",
    "bg-white",
    "rounded-[2rem]",
    "p-7",
    "shadow-sm",
    "border",
    "border-slate-100",
    "overflow-hidden",
    "hover:shadow-xl",
    "hover:-translate-y-2",
    "transition",
    "duration-300"
  );

  const icon = card.querySelector(".usp-icon");
  const heading = card.querySelector("h3");
  const para = card.querySelector("p");

  if (icon) {
    icon.classList.add(
      "w-14",
      "h-14",
      "rounded-2xl",
      "bg-indigo-100",
      "flex",
      "items-center",
      "justify-center",
      "text-2xl",
      "mb-6"
    );
  }

  if (heading) {
    heading.classList.add(
      "text-xl",
      "font-bold",
      "text-primary",
      "mb-3"
    );
  }

  if (para) {
    para.classList.add(
      "text-slate-500",
      "leading-7",
      "text-sm"
    );
  }
});

// DIGITAL COURSE ITEMS
document.querySelectorAll(".course-item-dark").forEach((item) => {
  item.classList.add(
    "bg-white/10",
    "border",
    "border-white/10",
    "rounded-2xl",
    "p-4",
    "text-sm",
    "font-semibold",
    "text-slate-100",
    "hover:bg-white/20",
    "transition"
  );
});

// ACADEMIC CARDS
document.querySelectorAll(".academic-card").forEach((card) => {
  card.classList.add(
    "bg-white",
    "rounded-3xl",
    "p-5",
    "border",
    "border-slate-200",
    "hover:border-secondary",
    "hover:shadow-lg",
    "transition"
  );

  const heading = card.querySelector("h4");
  const para = card.querySelector("p");

  if (heading) {
    heading.classList.add(
      "font-bold",
      "text-primary",
      "text-lg",
      "mb-2"
    );
  }

  if (para) {
    para.classList.add(
      "text-slate-500",
      "text-sm",
      "leading-6"
    );
  }
});

// FORM INPUT DESIGN
document.querySelectorAll(".form-input").forEach((input) => {
  input.classList.add(
    "w-full",
    "px-5",
    "py-4",
    "rounded-2xl",
    "border",
    "border-slate-200",
    "outline-none",
    "focus:border-secondary",
    "focus:ring-2",
    "focus:ring-indigo-100",
    "transition",
    "bg-white",
    "text-slate-700"
  );
});

const categorySelect = document.getElementById("categorySelect");
const courseSelect = document.getElementById("courseSelect");

const courseOptions = {
  school: [
    "Class 1 - All Subjects",
    "Class 2 - All Subjects",
    "Class 3 - All Subjects",
    "Class 4 - All Subjects",
    "Class 5 - All Subjects",
    "Class 6 - All Subjects",
    "Class 7 - All Subjects",
    "Class 8 - All Subjects",
    "Class 9 - All Subjects",
    "Class 10 - All Subjects",
    "Class 11 - All Subjects",
    "Class 12 - All Subjects"
  ],

  competitive: [
    "JEE Preparation",
    "NEET Preparation",
    "IIT Foundation"
  ],

  digital: [
    "Complete Digital Marketing Course",
    "SEO Course",
    "Social Media Marketing Course",
    "Google Ads Course",
    "Meta Ads Course",
    "Canva Designing Course",
    "Content Marketing Course",
    "Website Basics Course",
    "Freelancing Course"
  ]
};

categorySelect.addEventListener("change", () => {
  const selected = categorySelect.value;
  courseSelect.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select Course / Class";
  defaultOption.value = "";
  courseSelect.appendChild(defaultOption);

  if (!selected) {
    defaultOption.textContent = "First select category";
    return;
  }

  courseOptions[selected].forEach((course) => {
    const option = document.createElement("option");
    option.value = course;
    option.textContent = course;
    courseSelect.appendChild(option);
  });
});

// COUNT UP STATS ANIMATION
const stats = document.querySelectorAll(".stat-number");

const startCounter = (stat) => {
  const target = Number(stat.getAttribute("data-target"));
  const duration = 1600;
  const startTime = performance.now();

  const update = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const value = Math.floor(progress * target);

    stat.textContent = value.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      stat.textContent = target.toLocaleString();
    }
  };

  requestAnimationFrame(update);
};

const statsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

stats.forEach((stat) => statsObserver.observe(stat));
// HERO IMAGE CAROUSEL (AUTO + MANUAL)

const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");

let currentSlide = 0;
let autoSlideInterval;

// Show slide
function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-white", i === currentSlide);
    dot.classList.toggle("bg-white/50", i !== currentSlide);
  });
}

// Auto slide function
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 3000); // 🔥 3 seconds
}

// Reset auto when user clicks
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Buttons
if (nextSlide && prevSlide) {
  nextSlide.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    resetAutoSlide();
  });

  prevSlide.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    resetAutoSlide();
  });
}

// Dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    resetAutoSlide();
  });
});

// Start autoplay
startAutoSlide();