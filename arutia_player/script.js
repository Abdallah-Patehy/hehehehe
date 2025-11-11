// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 1,
        title: "Do Ya Like",
        artist: "Donald Glover",
        album: "",
        albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhV17cq_TqBtGXQKdQaXkGdQ-Dsod0PkA4Pw&s",
        audioSrc: "audio/Do Ya Like.mp3",
        videoBgSrc: "videos/Do Ya Like.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
  { time: 0.0, text: "Baby girl, you know what I want" },
  { time: 2.27, text: "Let me do it to ya, do it to ya" },
  { time: 4.38, text: "Let me do ya like" },
  { time: 5.46, text: "Uh, uh-uh-uh, uh-uh, uh-uh, uh" },
  { time: 8.65, text: "Uh-uh, uh-uh, uh-uh, uh" },
  { time: 11.83, text: "Baby girl, you know what I want" },
  { time: 14.22, text: "Let me do it to ya, do it to ya" },
  { time: 16.33, text: "Let me do ya like" },
  { time: 17.40, text: "Uh, uh-uh-uh, uh-uh, uh-uh, uh" },
  { time: 20.86, text: "Uh-uh, uh-uh, uh-uh, uh" },
  { time: 23.52, text: "Childish Gambino got that swagger" },
  { time: 26.43, text: "All these pussy niggas 'round here don't matter" },
  { time: 29.62, text: "All that I know is that I wanna dance with ya" },
  { time: 32.54, text: "Move in closer before I'm gon' kiss ya" },
  { time: 35.21, text: "Know that you know me, don't act stupid" },
  { time: 38.40, text: "You seem different, tired of these groupies" },
  { time: 41.31, text: "I'm on fire, won't find figga" },
  { time: 44.50, text: "Got big shots saying, 'That's that nigga'" },
  { time: 47.42, text: "Hovy with glasses, Weezy but geeky" },
  { time: 50.35, text: "Girls in the lobby tryin' to meet me" },
  { time: 53.26, text: "I ain't afraid to say it, yeah, I love these hoes" },
  { time: 55.92, text: "And their glasses, and their jacket, and their hipster clothes" },
  { time: 59.11, text: "Yes, I'm always on tour, what you mad at that for?" },
  { time: 62.56, text: "Slamming that thing like a Cadillac door" },
  { time: 65.23, text: "I love fast women, Jackie Joyner-Kersee" },
  { time: 68.42, text: "Have your cake and eat it, baby, it's your birthday" },
  { time: 71.33, text: "(It ain't trickin' if ya) You know" },
  { time: 96.82, text: "(Baby, I) You know" },
  { time: 98.42, text: "Mama, you are with the right man, Juno" },
  { time: 101.35, text: "Tell me what you wanna do, I will make it happen" },
  { time: 104.27, text: "I just wanna get you home and (Uh-uh, uh-uh, uh)" },
  { time: 107.46, text: "Yes, I'm drinking whiskey, baby I am gone tonight" },
  { time: 110.37, text: "NBC is not the only thing I'm comin' on tonight" },
  { time: 114.10, text: "Gross, why the f*ck I say these things?" },
  { time: 116.48, text: "It isn't over, haven't heard the chubby lady sing" },
  { time: 119.15, text: "Everybody love me, call a nigga Raymond" },
  { time: 122.05, text: "These weak niggas always in your face like Raybans" },
  { time: 125.24, text: "Yes, I bring the heat, girl, fire for fireman" },
  { time: 128.17, text: "Baby, I'm your hero, Donald for Spiderman" },
  { time: 131.36, text: "I'm in love with you, but this is not tennis" },
  { time: 134.81, text: "And baby stay stacked like she bad at Tetris" },
  { time: 137.74, text: "Rude boy, I Rihanna that vagina" },
  { time: 140.38, text: "Tell your boy, good luck tryin' to find ya, find ya" },
  { time: 143.31, text: "Baby girl, you know what I want" },
  { time: 145.71, text: "Let me do it to ya, do it to ya" },
  { time: 148.09, text: "Let me do ya like" },
  { time: 149.16, text: "Uh, uh-uh-uh, uh-uh, uh-uh, uh" },
  { time: 155.26, text: "Uh-uh, uh-uh, uh-uh, uh" },
  { time: 156.60, text: "Baby girl, you know what I want" },
  { time: 157.93, text: "Let me do it to ya, do it to ya" },
  { time: 160.05, text: "Let me do ya like" },
  { time: 161.11, text: "Uh, uh-uh-uh, uh-uh, uh-uh, uh" },
  { time: 164.30, text: "Uh-uh, uh-uh, uh-uh, uh" },
  { time: 167.21, text: "Baby girl, you know what I want" },
  { time: 170.14, text: "Let me do it to ya, do it to ya" },
  { time: 172.00, text: "Let me do ya like" },
  { time: 173.33, text: "Uh, uh-uh-uh, uh-uh, uh-uh, uh" },
  { time: 176.25, text: "Uh-uh, uh-uh, uh-uh, uh" },
  { time: 179.44, text: "Baby girl, you know what I want" },
  { time: 183.42, text: "Let me do it to ya, do it to ya" },
  { time: 184.21, text: "Let me do ya like" },
  { time: 185.02, text: "Uh, uh-uh-uh, uh-uh, uh-uh, uh" },
  { time: 188.47, text: "Uh-uh, uh-uh, uh-uh, uh" },
  { time: 191.66, text: "Baby girl, you know what I want" },
  { time: 194.85, text: "Let me do it to ya, do it to ya" },
  { time: 195.90, text: "Let me do ya like" },
  { time: 197.23, text: "Uh, uh-uh-uh, uh-uh, uh-uh, uh" },
  { time: 200.42, text: "Uh-uh, uh-uh, uh-uh, uh" },
  { time: 203.08, text: "Baby girl, you know what I want" },
  { time: 205.99, text: "Let me do it to ya, do it to ya" },
  { time: 207.58, text: "Let me do ya like" },
  { time: 208.92, text: "Uh, uh-uh-uh, uh-uh, uh-uh, uh" },
  { time: 212.11, text: "Uh-uh, uh-uh, uh-uh, uh" }
]

    },
    {
        id: 2,
        title: "Birthday",
        artist: "Anne-Marie",
        album: "",
        albumArtUrl: "https://cdn-images.dzcdn.net/images/cover/5c67945243fb1218ceed750fcae195c3/0x1900-000000-80-0-0.jpg",
        audioSrc: "audio/Anne-Marie - Birthday.m4a",
        videoBgSrc: "videos/Anne-Marie - Birthday.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
  { time: 0.0, text: "It's my birthday" },
  { time: 2.080, text: "I'ma do what I like" },
  { time: 3.741, text: "I'ma eat what I like" },
  { time: 5.622, text: "I'ma kiss who I like" },
  { time: 6.953, text: "It's my birthday" },
  { time: 8.885, text: "I'ma do what I like" },
  { time: 10.449, text: "I'ma wear what I like" },
  { time: 11.980, text: "I'ma party tonight" },
  { time: 13.626, text: "Goddamn, it's my birthday" },
  { time: 15.261, text: "Everybody love me" },
  { time: 16.861, text: "Yeah, yeah, yeah, look at me, gimme money" },
  { time: 20.165, text: "Damn, it's my birthday" },
  { time: 21.753, text: "Everybody love me" },
  { time: 23.260, text: "Nah, I ain't thinkin' 'bout you" },
  { time: 25.752, text: "It's my birthday" },
  { time: 28.019, text: "" },
  { time: 28.952, text: "I blow out all the candles, uh" },
  { time: 31.696, text: "I can't even afford my rent (hoo!)" },
  { time: 34.739, text: "So I'm not buyin' the drinks, 'cause" },
  { time: 36.898, text: "I'ma leave that to my friends, yeah" },
  { time: 39.960, text: "" },
  { time: 41.081, text: "Ballin' now with everybody in the room (Yeah)" },
  { time: 44.000, text: "That's what I do, that's what I do, yeah (Oh)" },
  { time: 46.772, text: "Whatever I can do to get my mind off you" },
  { time: 50.071, text: "Ha, that's what I do, that's what I do (Oh)" },
  { time: 52.588, text: "" },
  { time: 54.006, text: "It's my birthday" },
  { time: 55.086, text: "I'ma do what I like" },
  { time: 56.217, text: "I'ma eat what I like" },
  { time: 57.675, text: "I'ma kiss who I like" },
  { time: 59.004, text: "It's my birthday" }
]

    },    
    {
        id: 3,
        title: "Eid Milad",
        artist: "Nancy Ajram",
        album: "",
        albumArtUrl: "https://cdn-images.dzcdn.net/images/cover/f335f70066214ae55f81840d6d8a914d/75x75-000000-80-0-0.jpg",
        audioSrc: "audio/Eid.mp3",
        videoBgSrc: "videos/Eid.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
  { time: 0.0, text: "عيد ميلاد الليلة مين؟" },
  { time: 3.714, text: "عيد ميلاد النونا" },
  { time: 6.534, text: "هنفرح ست الحلوين" },
  { time: 8.892, text: "ونشيلها في عيوننا" },
  { time: 11.626, text: "عيد ميلاد الليلة مين؟" },
  { time: 14.346, text: "(عيد ميلاد النونا)" },
  { time: 16.991, text: "هنفرح ست الحلوين" },
  { time: 19.790, text: "(ونشيلها في عيوننا)" },
  { time: 22.475, text: "هنحيها (هيه) ونطير بيها (هيه)" },
  { time: 27.724, text: "ونخليها تغني معانا" },
  { time: 31.891, text: "نتمنى لها (هيه) كل أملها" },
  { time: 36.803, text: "تتحقق وتعيش فرحانة" },
  { time: 42.493, text: "عيد ميلاد الليلة مين؟" }
]

    },
    {
        id: 5,
        title: "Love Me Not",
        artist: "Ravyn Lenae",
        album: "Bird's Eye",
        albumArtUrl: "https://cdn-images.dzcdn.net/images/cover/8f1f16a89fc40e1b4453d28a2a25376c/1900x1900-000000-80-0-0.jpg",
        audioSrc: "audio/Love Me Not.mp3",
        videoBgSrc: "videos/Love Me Not.mp4",
        lyrics: [
        { time: 0.0, text: "Oh, no, I don't need you, but I miss you, come here" },
        { time: 4.213, text: "And, oh, it's hard to see you, but I wish you were right here" },
        { time: 8.617, text: "Oh, it's hard to leave you when I get you everywhere" },
        { time: 12.593, text: "All this time I'm thinking, I'm strong enough to sink it" },
        { time: 16.631, text: "Oh, no, I don't need you, but I miss you, come here" }
        ]

    },
    {
        id: 4,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
        audioSrc: "audio/I Wanna Be Yours.mp3",
        videoBgSrc: "videos/i_wanna_be_yours_bg.mp4",
        lyrics: [
            { time: 1000, text: "I wanna be your vacuum cleaner" },
            { time: 1000, text: "Breathing in your dust" },
            { time: 1000, text: "I wanna be your Ford Cortina" },
            { time: 1000, text: "I will never rust" },
            { time: 1000, text: "If you like your coffee hot" },
            { time: 1000, text: "Let me be your coffee pot" },
            { time: 1000, text: "You call the shots, babe" },
            { time: 1000, text: "I just wanna be yours" },
            
            { time: 1000, text: "Secrets I have held in my heart" },
            { time: 1000, text: "Are harder to hide than I thought" },
            { time: 1000, text: "Maybe I just wanna be yours" },
            { time: 1000, text: "I wanna be yours, I wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },

            { time: 1000, text: "Let me be your 'leccy meter and I'll never run out" },
            { time: 1000, text: "Let me be the portable heater that you'll get cold without" },
            { time: 1000, text: "I wanna be your setting lotion (wanna be)" },
            { time: 1000, text: "Hold your hair in deep devotion (how deep?)" },
            { time: 1000, text: "At least as deep as the Pacific Ocean" },
            { time: 1000, text: "I wanna be yours" },

            { time: 1000, text: "Secrets I have held in my heart" },
            { time: 1000, text: "Are harder to hide than I thought" },
            { time: 1000, text: "Maybe I just wanna be yours" },
            { time: 1000, text: "I wanna be yours, I wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours" },

            { time: 1000, text: "I wanna be your vacuum cleaner (Wanna be yours)" },
            { time: 1000, text: "Breathing in your dust (Wanna be yours)" },
            { time: 1000, text: "I wanna be your Ford Cortina (Wanna be yours)" },
            { time: 1000, text: "I will never rust (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" }
        ]
    },{
        id: 6,
        title: "Parano ",
        artist: "Frozy ",
        album: "",
        albumArtUrl: "https://cdn-images.dzcdn.net/images/cover/aa21844af760b5e0b0467ae3b008c5fe/0x1900-000000-80-0-0.jpg",
        audioSrc: "audio/Parano.mp3",
        videoBgSrc: "videos/Parano.mp4",
        lyrics: [
  { time: 1.059, text: "Tout ça me rend parano" },
  { time: 3.799, text: "Me rend parano" },
  { time: 6.001, text: "Tout ça me rend parano" },
  { time: 9.333, text: "Me rend para-" },
  { time: 11.271, text: "" },
  { time: 12.236, text: "Tout ça me rend parano" },
  { time: 14.483, text: "Me rend parano" },
  { time: 16.200, text: "Tout ça me rend parano" },
  { time: 18.513, text: "Me rend para-" },
  { time: 20.234, text: "" },
  { time: 22.844, text: "Me rend parano oh, oh" },
  { time: 24.227, text: "Parano" },
  { time: 24.802, text: "Me rend parano oh, oh" },
  { time: 25.355, text: "Parano" },
  { time: 31.270, text: "" },
  { time: 31.993, text: "Tout ça me rend parano oh, oh" },
  { time: 33.840, text: "Parano" },
  { time: 36.583, text: "Tout ça me rend parano" },
  { time: 39.309, text: "Tout ça me rend parano oh" },
  { time: 41.117, text: "" },
  { time: 41.599, text: "Oui des efforts oui j'en ai fais" },
  { time: 53.837, text: "Ouh sans même me toucher t'arrive à me tuer" },
  { time: 60.966, text: "Ouh pourquoi tu paniques quand je te demande où tu es" },
  { time: 65.865, text: "Ouh où fém parano chéri" },
  { time: 69.263, text: "" },
  { time: 71.906, text: "Tout ça me rend parano" },
  { time: 75.463, text: "Me rend parano" },
  { time: 77.763, text: "Tout ça me rend parano" },
  { time: 80.740, text: "Me rend para-" },
  { time: 82.281, text: "" },
  { time: 86.153, text: "Me rend parano oh, oh" },
  { time: 87.174, text: "Parano" },
  { time: 88.505, text: "Me rend parano oh, oh" },
  { time: 91.055, text: "Parano" },
  { time: 93.783, text: "" },
  { time: 96.350, text: "Tout ça me rend parano oh, oh" },
  { time: 99.147, text: "Me rend parano" },
  { time: 101.076, text: "Tout ça me rend parano" },
  { time: 105.857, text: "Tout ça me rend parano oh, oh" }
]

    }
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();