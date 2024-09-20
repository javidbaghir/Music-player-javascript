const ctrlIcon = document.getElementById('ctrl-icon')
const song = document.getElementById('song')
const progress = document.getElementById('progress')
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')
const singName = document.getElementById('sing-name')
const songName = document.getElementById('song-name')
const songPhoto = document.getElementById('song-photo')
const audioMusic = document.getElementsByClassName('audio-music')[0]


let database = [
    {
        photo: "./media/photos/iron-sky-img.png",
        musicUrl: "./media/Paolo Nutini - Iron sky (Lyrics).mp3",
        songName: "Iron Sky",
        singName: "Paolo Nutini",
    },

    {
        photo: "https://vinylreviews.com/wp-content/uploads/2018/06/eagles2.png",
        musicUrl: "./media/hotel-california.mp3",
        songName: "Hotel California",
        singName: "Paolo Nutini",
    },

    {
        photo: "https://images.genius.com/973c2301386e950f39da5eb5ee565cd3.1000x1000x1.png",
        musicUrl: "./media/Cinnamon Girl.mp3",
        songName: "Cinnamon Girl",
        singName: "Lana Del Rey",
    },

    {
        photo: "https://i.scdn.co/image/ab67616d00001e026f2044d1a83fa2989f958244",
        musicUrl: "./media/Sting - Shape of My Heart (Official Music Video).mp3",
        songName: "Shape of my heart",
        singName: "Sting",
    },

    {
        photo: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b3/e0/74/b3e074c7-7bee-be74-5946-8ebb02f61f95/cover.jpg/1200x1200bf-60.jpg",
        musicUrl: "./media/Gilavar.mp3",
        songName: "Gilavar",
        singName: "Azər Zeynalov",
    }
]

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;

}

function playPause () {

    if (ctrlIcon.classList.contains('fa-pause')) {
        song.pause()
        ctrlIcon.classList.remove('fa-pause')
        ctrlIcon.classList.add('fa-play')
    } else {
        song.play()
        ctrlIcon.classList.add('fa-pause')
        ctrlIcon.classList.remove('fa-play')
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime
    }, 500)
}

progress.onchange = function () {
    song.play()
    song.currentTime = progress.value 
}

let index = 0

singName.innerHTML = database[index].singName
songName.innerHTML = database[index].songName
songPhoto.src = database[index].photo
audioMusic.src = database[index].musicUrl

function renderUI() {
    singName.innerHTML = database[index].singName
    songName.innerHTML = database[index].songName
    songPhoto.src = database[index].photo
    audioMusic.src = database[index].musicUrl
    audioMusic.load()
    audioMusic.play()
}


leftBtn.addEventListener('click', function() {
 
    
    if (index === 0) {
        index = 0
    } else {
        index--
        renderUI()
    }
    
})

rightBtn.addEventListener('click', function() {
    
    if (index === database.length - 1) {
        index = 0
    } else {
        index++
        renderUI()
    }
    
})