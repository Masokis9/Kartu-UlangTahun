
const targetDate = new Date("2026-02-22T00:00:00");

const messages = [
  {
    title: "Selamat Ulang Tahun",
    inner: "Cie kepala dua koma satu. Makasi ya udah mau bersama aku."
  },
  {
    title: "Tentang Kamu",
    inner: "Imut, Lucu, kalo marah cerem hehe.."
  },
  {
    title: "Doa Buat Kamu",
    inner: "Semoga diberi kesehatan terus dan perjalanan kamu selalu ringan."
  },
  {
    title: "Janji Kecil",
    inner: "Aku akan tetap di samping kamu, di setiap langkah kamu."
  },
  {
    title: "I Love You, More, and More",
    inner: "Lebih dari kata-kata yang bisa aku jelaskan. Alay bay hehee.."
  }
];

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const openBtn = document.getElementById("openBtn");
const reveal = document.getElementById("reveal");
const floating = document.getElementById("floating");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").style.display = "none";
    openBtn.classList.remove("hidden");
    clearInterval(timer);
    startFloating();
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  daysEl.textContent = d;
  hoursEl.textContent = h;
  minutesEl.textContent = m;
  secondsEl.textContent = s;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

openBtn.addEventListener("click", () => {
  openBtn.style.display = "none";
  showMessages();
  startCelebration();
});

function showMessages() {
  messages.forEach((msg, i) => {
    const card = document.createElement("div");
    card.className = "message clickable";
    card.style.animationDelay = `${i * 0.4}s`;

    card.innerHTML = `
      <div class="message-title">${msg.title}</div>
      <div class="message-inner">${msg.inner}</div>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("open");
    });

    reveal.appendChild(card);
  });
}

function startFloating() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    floating.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 800);
}

function startCelebration() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      floating.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, i * 200);
  }
}

