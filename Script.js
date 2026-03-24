// script.js
// JEE PSYCHOO | Belajar Anak SD Kelas 1

// ==================== DATA HEWAN (Mudah + Sulit) ====================
const hewanData = [
    { name: "Kucing", emoji: "🐱", options: ["Kucing", "Anjing", "Burung", "Ikan"] },
    { name: "Anjing", emoji: "🐶", options: ["Anjing", "Kucing", "Kelinci", "Hamster"] },
    { name: "Burung", emoji: "🐦", options: ["Burung", "Ayam", "Bebek", "Elang"] },
    { name: "Ikan", emoji: "🐟", options: ["Ikan", "Udang", "Cumi", "Kepiting"] },
    { name: "Kelinci", emoji: "🐰", options: ["Kelinci", "Hamster", "Tikus", "Marmut"] },
    { name: "Monyet", emoji: "🐒", options: ["Monyet", "Orangutan", "Gorila", "Simpanse"] },
    { name: "Kuda", emoji: "🐴", options: ["Kuda", "Zebra", "Keledai", "Kuda Nil"] },
    { name: "Sapi", emoji: "🐮", options: ["Sapi", "Kerbau", "Kambing", "Domba"] },
    { name: "Ayam", emoji: "🐔", options: ["Ayam", "Bebek", "Burung", "Angsa"] },
    { name: "Bebek", emoji: "🦆", options: ["Bebek", "Ayam", "Angsa", "Burung"] },
    { name: "Kambing", emoji: "🐐", options: ["Kambing", "Domba", "Sapi", "Kerbau"] },
    { name: "Gajah", emoji: "🐘", options: ["Gajah", "Badak", "Kuda Nil", "Jerapah"] },
    { name: "Jerapah", emoji: "🦒", options: ["Jerapah", "Zebra", "Gajah", "Kuda"] },
    { name: "Singa", emoji: "🦁", options: ["Singa", "Harimau", "Macan", "Cheetah"] },
    { name: "Harimau", emoji: "🐯", options: ["Harimau", "Singa", "Macan", "Leopard"] },
    { name: "Zebra", emoji: "🦓", options: ["Zebra", "Kuda", "Keledai", "Jerapah"] },
    { name: "Badak", emoji: "🦏", options: ["Badak", "Gajah", "Kuda Nil", "Banteng"] },
    { name: "Kuda Nil", emoji: "🦛", options: ["Kuda Nil", "Badak", "Gajah", "Banteng"] },
    { name: "Kangguru", emoji: "🦘", options: ["Kangguru", "Koala", "Walabi", "Platipus"] },
    { name: "Koala", emoji: "🐨", options: ["Koala", "Kangguru", "Beruang", "Sloth"] }
];

// ==================== DATA BUAH ====================
const buahData = [
    { name: "Apel", emoji: "🍎", options: ["Apel", "Jeruk", "Mangga", "Pisang"] },
    { name: "Jeruk", emoji: "🍊", options: ["Jeruk", "Apel", "Mangga", "Lemon"] },
    { name: "Mangga", emoji: "🥭", options: ["Mangga", "Pisang", "Jambu", "Pepaya"] },
    { name: "Pisang", emoji: "🍌", options: ["Pisang", "Apel", "Jeruk", "Anggur"] },
    { name: "Anggur", emoji: "🍇", options: ["Anggur", "Cerry", "Stroberi", "Blueberry"] },
    { name: "Semangka", emoji: "🍉", options: ["Semangka", "Melon", "Pepaya", "Mangga"] },
    { name: "Stroberi", emoji: "🍓", options: ["Stroberi", "Cerry", "Raspberry", "Anggur"] },
    { name: "Pepaya", emoji: "🍈", options: ["Pepaya", "Mangga", "Melon", "Semangka"] },
    { name: "Jambu", emoji: "🍐", options: ["Jambu", "Apel", "Pir", "Belimbing"] },
    { name: "Nanas", emoji: "🍍", options: ["Nanas", "Mangga", "Pepaya", "Semangka"] },
    { name: "Durian", emoji: "🫒", options: ["Durian", "Nangka", "Cempedak", "Sukun"] },
    { name: "Rambutan", emoji: "🍒", options: ["Rambutan", "Kelengkeng", "Langsat", "Duku"] },
    { name: "Salak", emoji: "🥝", options: ["Salak", "Manggis", "Kelengkeng", "Rambutan"] },
    { name: "Manggis", emoji: "🟣", options: ["Manggis", "Salak", "Duku", "Rambutan"] }
];

// ==================== DATA SAYURAN ====================
const sayurData = [
    { name: "Wortel", emoji: "🥕", options: ["Wortel", "Kentang", "Brokoli", "Kol"] },
    { name: "Kentang", emoji: "🥔", options: ["Kentang", "Wortel", "Ubi", "Singkong"] },
    { name: "Brokoli", emoji: "🥦", options: ["Brokoli", "Kol", "Kembang Kol", "Sawi"] },
    { name: "Bayam", emoji: "🥬", options: ["Bayam", "Kangkung", "Sawi", "Selada"] },
    { name: "Kangkung", emoji: "🌿", options: ["Kangkung", "Bayam", "Sawi", "Selada"] },
    { name: "Terong", emoji: "🍆", options: ["Terong", "Timun", "Labu", "Pare"] },
    { name: "Timun", emoji: "🥒", options: ["Timun", "Terong", "Labu", "Pare"] },
    { name: "Cabai", emoji: "🌶️", options: ["Cabai", "Tomat", "Paprika", "Bawang"] },
    { name: "Tomat", emoji: "🍅", options: ["Tomat", "Cabai", "Paprika", "Terong"] },
    { name: "Bawang", emoji: "🧅", options: ["Bawang", "Bawang Putih", "Jahe", "Kunyit"] },
    { name: "Labu", emoji: "🎃", options: ["Labu", "Waluh", "Timun", "Terong"] },
    { name: "Kol", emoji: "🥬", options: ["Kol", "Brokoli", "Sawi", "Kembang Kol"] },
    { name: "Sawi", emoji: "🌱", options: ["Sawi", "Bayam", "Kangkung", "Selada"] }
];

let currentCategory = "hewan";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

// DOM Elements
const gameTitle = document.getElementById("gameTitle");
const questionImage = document.getElementById("questionImage");
const questionText = document.getElementById("questionText");
const optionsArea = document.getElementById("optionsArea");
const scoreDisplay = document.getElementById("scoreDisplay");
const feedbackDiv = document.getElementById("feedback");
const nextArea = document.getElementById("nextArea");
const resultModal = document.getElementById("resultModal");
const finalScoreSpan = document.getElementById("finalScore");
const resultMessageDiv = document.getElementById("resultMessage");
const restartBtn = document.getElementById("restartBtn");
const nextBtn = document.getElementById("nextBtn");

// ==================== GENERATE SOAL PENJUMLAHAN RANDOM ====================
function generatePenjumlahan() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const correct = num1 + num2;
    const wrongOptions = [];
    while (wrongOptions.length < 3) {
        let wrong = correct + (Math.floor(Math.random() * 10) - 5);
        if (wrong !== correct && wrong > 0 && !wrongOptions.includes(wrong)) {
            wrongOptions.push(wrong);
        }
        if (wrongOptions.length > 20) break;
    }
    while (wrongOptions.length < 3) {
        wrongOptions.push(correct + wrongOptions.length + 1);
    }
    let options = [correct, ...wrongOptions];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return {
        text: `${num1} + ${num2} = ?`,
        emoji: "🧮",
        correct: correct,
        options: options.map(o => o.toString()),
        correctIndex: options.indexOf(correct)
    };
}

// ==================== GENERATE SOAL PENGURANGAN RANDOM ====================
function generatePengurangan() {
    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2 = Math.floor(Math.random() * num1) + 1;
    const correct = num1 - num2;
    const wrongOptions = [];
    while (wrongOptions.length < 3) {
        let wrong = correct + (Math.floor(Math.random() * 10) - 5);
        if (wrong !== correct && wrong >= 0 && !wrongOptions.includes(wrong)) {
            wrongOptions.push(wrong);
        }
        if (wrongOptions.length > 20) break;
    }
    while (wrongOptions.length < 3) {
        wrongOptions.push(correct + wrongOptions.length + 1);
    }
    let options = [correct, ...wrongOptions];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return {
        text: `${num1} - ${num2} = ?`,
        emoji: "🧮",
        correct: correct,
        options: options.map(o => o.toString()),
        correctIndex: options.indexOf(correct)
    };
}

// ==================== GENERATE SOAL TEBAK (Hewan/Buah/Sayur) ====================
function generateTebak(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const item = data[randomIndex];
    return {
        text: item.name,
        emoji: item.emoji,
        correct: item.name,
        options: [...item.options],
        correctIndex: item.options.indexOf(item.name)
    };
}

// ==================== GENERATE 5 SOAL SESUAI KATEGORI ====================
function generateQuestions(category) {
    const questions = [];
    if (category === "hewan") {
        for (let i = 0; i < 5; i++) {
            questions.push(generateTebak(hewanData));
        }
    } else if (category === "buah") {
        for (let i = 0; i < 5; i++) {
            questions.push(generateTebak(buahData));
        }
    } else if (category === "sayur") {
        for (let i = 0; i < 5; i++) {
            questions.push(generateTebak(sayurData));
        }
    } else if (category === "penjumlahan") {
        for (let i = 0; i < 5; i++) {
            questions.push(generatePenjumlahan());
        }
    } else if (category === "pengurangan") {
        for (let i = 0; i < 5; i++) {
            questions.push(generatePengurangan());
        }
    }
    return questions;
}

// ==================== RENDER SOAL ====================
function renderQuestion() {
    const q = currentQuestions[currentIndex];
    
    // Update title
    if (currentCategory === "hewan") gameTitle.innerHTML = "<i class='fas fa-paw'></i> Tebak Hewan";
    else if (currentCategory === "buah") gameTitle.innerHTML = "<i class='fas fa-apple-alt'></i> Tebak Buah";
    else if (currentCategory === "sayur") gameTitle.innerHTML = "<i class='fas fa-carrot'></i> Tebak Sayur";
    else if (currentCategory === "penjumlahan") gameTitle.innerHTML = "<i class='fas fa-plus-circle'></i> Penjumlahan";
    else if (currentCategory === "pengurangan") gameTitle.innerHTML = "<i class='fas fa-minus-circle'></i> Pengurangan";
    
    questionImage.innerHTML = q.emoji;
    questionText.innerHTML = q.text;
    
    let optionsHtml = "";
    const letters = ["A", "B", "C", "D"];
    for (let i = 0; i < q.options.length; i++) {
        optionsHtml += `<button class="option-btn" data-index="${i}">${letters[i]}. ${q.options[i]}</button>`;
    }
    optionsArea.innerHTML = optionsHtml;
    
    // Add event listeners
    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", () => handleAnswer(parseInt(btn.dataset.index)));
    });
    
    feedbackDiv.innerHTML = "";
    feedbackDiv.className = "feedback";
    nextArea.style.display = "none";
    answered = false;
    
    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.classList.remove("correct", "wrong", "disabled");
    });
}

// ==================== HANDLE JAWABAN ====================
function handleAnswer(selectedIndex) {
    if (answered) return;
    answered = true;
    
    const q = currentQuestions[currentIndex];
    const isCorrect = (selectedIndex === q.correctIndex);
    const options = document.querySelectorAll(".option-btn");
    
    if (isCorrect) {
        score++;
        scoreDisplay.innerText = score;
        feedbackDiv.innerHTML = `<i class="fas fa-check-circle"></i> Benar! ${q.correct} ✅`;
        feedbackDiv.className = "feedback correct";
        options[selectedIndex].classList.add("correct");
    } else {
        feedbackDiv.innerHTML = `<i class="fas fa-times-circle"></i> Salah! Jawaban yang benar adalah ${q.options[q.correctIndex]} 😊`;
        feedbackDiv.className = "feedback wrong";
        options[selectedIndex].classList.add("wrong");
        options[q.correctIndex].classList.add("correct");
    }
    
    options.forEach(btn => btn.classList.add("disabled"));
    nextArea.style.display = "block";
}

// ==================== NEXT SOAL ====================
function nextQuestion() {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

// ==================== SHOW RESULT ====================
function showResult() {
    finalScoreSpan.innerText = score;
    
    if (score === 5) {
        resultMessageDiv.innerHTML = "🎉 Hebat! Kamu pintar sekali! 🎉<br>Nilai sempurna!";
    } else if (score >= 3) {
        resultMessageDiv.innerHTML = "👍 Bagus! Terus belajar ya! 👍<br>Kamu bisa lebih baik lagi!";
    } else {
        resultMessageDiv.innerHTML = "💪 Semangat! Coba lagi, pasti bisa! 💪<br>Belajar lagi yuk!";
    }
    
    resultModal.style.display = "flex";
}

// ==================== RESTART GAME ====================
function restartGame() {
    currentQuestions = generateQuestions(currentCategory);
    currentIndex = 0;
    score = 0;
    answered = false;
    scoreDisplay.innerText = "0";
    resultModal.style.display = "none";
    renderQuestion();
}

// ==================== GANTI KATEGORI ====================
function changeCategory(category) {
    currentCategory = category;
    currentQuestions = generateQuestions(category);
    currentIndex = 0;
    score = 0;
    answered = false;
    scoreDisplay.innerText = "0";
    renderQuestion();
    
    document.querySelectorAll(".menu-btn").forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// ==================== EVENT LISTENERS ====================
document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        changeCategory(btn.dataset.category);
    });
});

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartGame);

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === resultModal) {
        resultModal.style.display = "none";
    }
};

// ==================== INITIALIZE ====================
currentQuestions = generateQuestions("hewan");
renderQuestion();

console.log("JEE PSYCHOO | Belajar Anak SD Kelas 1 | Siap Belajar!");