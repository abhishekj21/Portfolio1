const testimonials = [
  {
    name: "Saurabh Rai",
    photoUrl: "./assets/img/img1.jpg",
    text: "He is a good guy moreover he is very hard worker. He always curious about tech",
  },
  {
    name: "Vikas Singh",
    photoUrl: "./assets/img/img2.jpg",
    text: "He is my good friend and he helped me to learn linked list. He is very helpful",
  },
  {
    name: "Nikhil Jaiswal",
    photoUrl: "./assets/img/img3.jpg",
    text: "I know Abhishek since class 1st we are childhood friend and he build a small web site for my family shop.",
  },
];

const imgEl = document.querySelector(".testimonial-image");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
var Image = document.getElementById("testimonialImage");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  if (idx === 1) {
    Image.classList.add("Testimonial-second-Image");
  }
  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
