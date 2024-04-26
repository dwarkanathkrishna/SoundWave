// let songsName = ["My life is going on", "Everything at once", "Bella Ciao", "We will rock you"];
// let songsSrc = ["My life is going on.mp3", "Everything at once.mp3", "Bella Ciao.mp3", "We will rock you.mp3"];
// let songsPicture = [
//     "https://imgs.search.brave.com/xdhDHRwSNDNEB0SjzzniCQs5LHExu6DOX6EGaAGPG0s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODEyc3UzclQ3bkwu/anBn",
//     "https://imgs.search.brave.com/uMJ8JUbpkIIYzQWeKfP6ngtom_mkieFOc9D7Db0oIXw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xl/bmthL2ltYWdlcy9h/L2FkL0xlbmthLWV2/ZXJ5dGhpbmdfYXRf/b25jZV9zLmpwZy9y/ZXZpc2lvbi9sYXRl/c3Qvc2NhbGUtdG8t/d2lkdGgtZG93bi8y/MTA_Y2I9MjAxMzA4/MDQwNjU5MzI.jpeg",
//     "https://imgs.search.brave.com/5i_ieuOv_ThW7xV_gXhgvF6UemxmlfSfE2S34sAuFd8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ3NjA1/OTYuanBn",
//     "https://images.backstreetmerch.com/images/products/films/misc/wwry/bsi_wwry07.png"
// ];

// let songsName2=["Baller","Kajra re","Mitti de tibbe","Naagin"];
// let songsSrc2=["baller-shubh.mp3","kajra re.mp3","mitti de tibbe-kaka.mp3","Snake.mp3"];
// let songsPicture2=["https://i1.sndcdn.com/artworks-lMx1UBF0kfOytYGf-CWN2Uw-t500x500.jpg",
// "https://i.scdn.co/image/ab67616d0000b273d2cb1c16206718e992b73819",
// "https://c.saavncdn.com/523/Mitti-De-Tibbe-Punjabi-2022-20220719125943-500x500.jpg",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MiDohzSk8Awody9D2oT33y-6Mq_AeSsh8RxtX0FkHw&s"]

// let songsName3=["Death note","Shaktimaan","Aana hi pada sajna","Ae meri zohrajabeen"];
// let songsSrc3=["death note opening.mp3","shaktimaan.mp3","aana hi pda sajna.mp3","ae meri zohrajabeen.mp3"];
// let songsPicture3=["https://images.saymedia-content.com/.image/t_share/MTc2Mjg4NjgyODYzNTAyNTA5/deathnotethemes.gif"
// ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWyvf30gztQooas8nI4nJp6FHG4uNl2ijKlbgL5bJ7Q&s",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAOKA4gqai4NRM_0xXQPs4ganLjJiBycP055OLniFMg&s",
// "https://i.ytimg.com/vi/9FPAdxhYZIc/maxresdefault.jpg"];



// var audio;
// var currentSongIndex = -1; 

// function togglePlayPause() {
//     const playPauseIcon = document.getElementById("playPauseIcon");
//     const profilePicture = document.getElementById("profilePicture");
    
//     if (audio.paused) {
//         audio.play();
//         playPauseIcon.classList.remove("fa-play");
//         playPauseIcon.classList.add("fa-pause");
//         profilePicture.classList.add('rotating'); // Add rotating class to start the animation
//     } else {
//         audio.pause();
//         playPauseIcon.classList.remove("fa-pause");
//         playPauseIcon.classList.add("fa-play");
//         profilePicture.classList.remove('rotating'); // Remove rotating class to stop the animation
//     }
// }

// function playOrStopSound(index) {
//     const profilePicture = document.getElementById("profilePicture");

//     if (currentSongIndex === index && !audio.paused) { // If the clicked song is already playing, pause it
//         togglePlayPause(); // Call the togglePlayPause function to pause the audio and toggle the icon
//     } else { // If it's a different song or no song is playing, stop the currently playing song (if any) and start playing the new song
//         if (audio) {
//             audio.pause();
//             audio.currentTime = 0;
//         }

//         profilePicture.style.backgroundImage = "url('" + songsPicture[index] + "')";
//         profilePicture.style.backgroundSize = "cover";
//         profilePicture.classList.add('rotating'); // Add rotating class to start the animation

//         audio = new Audio(songsSrc[index]);
//         audio.loop = true;
//         audio.play();
//         document.getElementById("songName").innerText = songsName[index];
//         currentSongIndex = index;

//         const playPauseIcon = document.getElementById("playPauseIcon");
//         playPauseIcon.classList.remove("fa-play");
//         playPauseIcon.classList.add("fa-pause");
//     }
// }



// function swarArrays(){
//     [songsName, songsName2] = [songsName2, songsName];
//     [songsSrc, songsSrc2] = [songsSrc2, songsSrc];
//     [songsPicture, songsPicture2] = [songsPicture2, songsPicture];
// }

// function nextSong() {
//     // currentBatch = swapNextArrays(currentBatch);
//     swarArrays();
//     document.getElementById("firstBox").style.backgroundImage = "url('" + songsPicture[0] + "')";
//     document.getElementById("secondBox").style.backgroundImage = "url('" + songsPicture[1] + "')";
//     document.getElementById("thirdBox").style.backgroundImage = "url('" + songsPicture[2] + "')";
//     document.getElementById("fourthBox").style.backgroundImage = "url('" + songsPicture[3] + "')";
// }


// function previousSong() {
//     // swapPreviousArrays(currentBatch);
//     swarArrays();
//     document.getElementById("firstBox").style.backgroundImage = "url('" + songsPicture[0] + "')";
//     document.getElementById("secondBox").style.backgroundImage = "url('" + songsPicture[1] + "')";
//     document.getElementById("thirdBox").style.backgroundImage = "url('" + songsPicture[2] + "')";
//     document.getElementById("fourthBox").style.backgroundImage = "url('" + songsPicture[3] + "')";

    
// }






// document.getElementById("profilePicture").addEventListener('click', togglePlayPause);

// document.getElementById("firstBox").addEventListener('click', () => {
//     playOrStopSound(0);
// });

// document.getElementById("secondBox").addEventListener('click', () => {
//     playOrStopSound(1);
// });

// document.getElementById("thirdBox").addEventListener('click', () => {
//     playOrStopSound(2);
// });

// document.getElementById("fourthBox").addEventListener('click', () => {
//     playOrStopSound(3);
// });
//double trouble-"https://i.ytimg.com/vi/AOIVPqDm06g/hqdefault.jpg"
let songsName = ["Double Trouble", "Everything at once", "Bella Ciao", "We will rock you"];
let songsSrc = ["double_trouble.mp3", "Everything at once.mp3", "Bella Ciao.mp3", "We will rock you.mp3"];
let songsPicture = [
    "https://i.scdn.co/image/ab67616d0000b2736e91bf51551cde27cf90a881",
    "https://imgs.search.brave.com/uMJ8JUbpkIIYzQWeKfP6ngtom_mkieFOc9D7Db0oIXw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xl/bmthL2ltYWdlcy9h/L2FkL0xlbmthLWV2/ZXJ5dGhpbmdfYXRf/b25jZV9zLmpwZy9y/ZXZpc2lvbi9sYXRl/c3Qvc2NhbGUtdG8t/d2lkdGgtZG93bi8y/MTA_Y2I9MjAxMzA4/MDQwNjU5MzI.jpeg",
    "https://imgs.search.brave.com/5i_ieuOv_ThW7xV_gXhgvF6UemxmlfSfE2S34sAuFd8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ3NjA1/OTYuanBn",
    "https://images.backstreetmerch.com/images/products/films/misc/wwry/bsi_wwry07.png"
];

let songsName2=["Baller","Kajra re","Mitti de tibbe","Naagin"];
let songsSrc2=["baller-shubh.mp3","kajra re.mp3","mitti de tibbe-kaka.mp3","Snake.mp3"];
let songsPicture2=["https://i1.sndcdn.com/artworks-lMx1UBF0kfOytYGf-CWN2Uw-t500x500.jpg",
"https://i.scdn.co/image/ab67616d0000b273d2cb1c16206718e992b73819",
"https://c.saavncdn.com/523/Mitti-De-Tibbe-Punjabi-2022-20220719125943-500x500.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MiDohzSk8Awody9D2oT33y-6Mq_AeSsh8RxtX0FkHw&s"]

let songsName3=["Death note","Shaktimaan","Aana hi pada sajna","Ae meri zohrajabeen"];
let songsSrc3=["death note opening.mp3","shaktimaan.mp3","aana hi pda sajna.mp3","ae meri zohrajabeen.mp3"];
let songsPicture3=["https://images.saymedia-content.com/.image/t_share/MTc2Mjg4NjgyODYzNTAyNTA5/deathnotethemes.gif"
,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGuYk1MtyO1snTSJkqImaLNA5HhvNSun-rBTUA4qB70SyhMr1myULxuEApmFP2akBPLY&usqp=CAU",
"https://www.bollywooddjsclub.co.in/wp-content/uploads/2022/07/Bin-Tere-Sanam-Remix-DJ-AY.jpg",
"https://i.ytimg.com/vi/pc5dl8eZ6sg/hqdefault.jpg"];


let songsName4=["My life is going on","Mass","Bing Bing Boo","Daaru Badnaam"];
let songsSrc4=["My life is going on.mp3","mass.mp3","bing_bing_boo.mp3","daaru_badnaam.mp3"];
let songsPicture4=["https://imgs.search.brave.com/xdhDHRwSNDNEB0SjzzniCQs5LHExu6DOX6EGaAGPG0s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODEyc3UzclQ3bkwu/anBn"
,"https://c.saavncdn.com/086/Mass-2004-500x500.jpg",
"https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/22/57/ec/2257ec78-dc30-79f2-5858-31fb27e11801/cover.jpg/600x600bf-60.jpg",
"https://c.saavncdn.com/125/Daru-Badnaam-Punjabi-2016-20191010170948-500x500.jpg"];


let currentArrayIndex = 0;
let songArrays = [
    {songsName, songsSrc, songsPicture},
    {songsName: songsName2, songsSrc: songsSrc2, songsPicture: songsPicture2},
    {songsName: songsName3, songsSrc: songsSrc3, songsPicture: songsPicture3},
    {songsName: songsName4, songsSrc: songsSrc4, songsPicture: songsPicture4}
];

let audio;
let currentSongIndex = -1; 

function togglePlayPause() {
    const playPauseIcon = document.getElementById("playPauseIcon");
    const profilePicture = document.getElementById("profilePicture");
    
    if (audio.paused) {
        audio.play();
        playPauseIcon.classList.remove("fa-play");
        playPauseIcon.classList.add("fa-pause");
        profilePicture.classList.add('rotating'); 
    } else {
        audio.pause();
        playPauseIcon.classList.remove("fa-pause");
        playPauseIcon.classList.add("fa-play");
        profilePicture.classList.remove('rotating'); 
    }
}

function playOrStopSound(index) {
    const profilePicture = document.getElementById("profilePicture");

    if (currentSongIndex === index && !audio.paused) { // If the clicked song is already playing, pause it
        togglePlayPause(); // Call the togglePlayPause function to pause the audio and toggle the icon
    } else { // If it's a different song or no song is playing, stop the currently playing song (if any) and start playing the new song
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        profilePicture.style.backgroundImage = "url('" + songsPicture[index] + "')";
        profilePicture.style.backgroundSize = "cover";
        profilePicture.classList.add('rotating'); // Add rotating class to start the animation

        audio = new Audio(songsSrc[index]);
        audio.loop = true;
        audio.play();
        document.getElementById("songName").innerText = songsName[index];
        currentSongIndex = index;

        const playPauseIcon = document.getElementById("playPauseIcon");
        playPauseIcon.classList.remove("fa-play");
        playPauseIcon.classList.add("fa-pause");
    }
}

function swapArrays() {
    currentArrayIndex = (currentArrayIndex + 1) % songArrays.length;
    ({songsName, songsSrc, songsPicture} = songArrays[currentArrayIndex]);
}

function nextSong() {
    swapArrays();
    updateSongImages();
}

function previousSong() {
    currentArrayIndex = (currentArrayIndex - 1 + songArrays.length) % songArrays.length;
    ({songsName, songsSrc, songsPicture} = songArrays[currentArrayIndex]);
    updateSongImages();
}

function updateSongImages() {
    document.getElementById("firstBox").style.backgroundImage = "url('" + songsPicture[0] + "')";
    document.getElementById("secondBox").style.backgroundImage = "url('" + songsPicture[1] + "')";
    document.getElementById("thirdBox").style.backgroundImage = "url('" + songsPicture[2] + "')";
    document.getElementById("fourthBox").style.backgroundImage = "url('" + songsPicture[3] + "')";
}

document.getElementById("profilePicture").addEventListener('click', togglePlayPause);

document.getElementById("firstBox").addEventListener('click', () => {
    playOrStopSound(0);
});

document.getElementById("secondBox").addEventListener('click', () => {
    playOrStopSound(1);
});

document.getElementById("thirdBox").addEventListener('click', () => {
    playOrStopSound(2);
});

document.getElementById("fourthBox").addEventListener('click', () => {
    playOrStopSound(3);
});



document.getElementById("leftTopBottom").addEventListener("click", function() {
    const searchBackdrop = document.getElementById("searchBackdrop");
    const searchBar = document.getElementById("searchBar");

    searchBackdrop.style.display = "block";
    searchBar.style.display = "block";

    // Apply blur effect to the page
    document.getElementById("left").classList.add("blur");
    document.getElementById("right").classList.add("blur");
});

document.getElementById("searchBackdrop").addEventListener("click", function() {
    const searchBackdrop = document.getElementById("searchBackdrop");
    const searchBar = document.getElementById("searchBar");

    searchBackdrop.style.display = "none";
    searchBar.style.display = "none";

    // Remove blur effect from the page
    document.getElementById("left").classList.remove("blur");
    document.getElementById("right").classList.remove("blur");
});


document.getElementById("searchButton").addEventListener("click", function() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const foundSong = findSong(searchInput);
    
    if (foundSong !== null) {
        displaySong(foundSong);
    } else {
        displayNoMatch();
    }
});

function findSong(searchInput) {
    let foundSong = null;

    searchInput = searchInput.toLowerCase(); // Convert search input to lowercase

    songArrays.forEach(array => {
        const index = array.songsName.findIndex(name => name.toLowerCase().includes(searchInput));
        
        if (index !== -1) {
            foundSong = {
                name: array.songsName[index],
                src: array.songsSrc[index],
                picture: array.songsPicture[index]
            };
        }
    });

    return foundSong;
}


function displaySong(song) {
    const profilePicture = document.getElementById("profilePicture");
    profilePicture.style.backgroundImage = "url('" + song.picture + "')";
    profilePicture.style.backgroundSize = "cover";
    profilePicture.classList.add('rotating');

    if (audio) {
        audio.pause();
    }

    audio = new Audio(song.src);
    audio.loop = true;
    audio.play();
    document.getElementById("songName").innerText = song.name;
    
    const playPauseIcon = document.getElementById("playPauseIcon");
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");

    alert("Now playing: " + song.name);
}

function playNextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songArrays[currentArrayIndex].songsSrc.length) {
        currentSongIndex = 0;
    }
    playSong(currentSongIndex);
}

function playPreviousSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songArrays[currentArrayIndex].songsSrc.length - 1;
    }
    playSong(currentSongIndex);
}

function playSong(index) {
    const profilePicture = document.getElementById("profilePicture");

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }

    profilePicture.style.backgroundImage = "url('" + songArrays[currentArrayIndex].songsPicture[index] + "')";
    profilePicture.style.backgroundSize = "cover";
    profilePicture.classList.add('rotating');

    audio = new Audio(songArrays[currentArrayIndex].songsSrc[index]);
    audio.loop = true;
    audio.play();
    document.getElementById("songName").innerText = songArrays[currentArrayIndex].songsName[index];

    const playPauseIcon = document.getElementById("playPauseIcon");
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
}


function displayNoMatch() {
    alert("No match found");
}