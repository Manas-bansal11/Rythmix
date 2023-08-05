console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName=document.getElementById('masterSongName');
let progressBar=document.getElementById('progressBar');
 let songs=[
    { songName: "Hawayein", filepath: "C:\Users\manas\OneDrive\Documents\Spotify\1.mp3",coverPath:"C:\Users\manas\OneDrive\Documents\Spotify\haw.jpeg"},
    { songName: "Apna Bana Le", filepath: "C:\Users\manas\OneDrive\Documents\Spotify\songs/2.mp3",coverPath:"C:\Users\manas\OneDrive\Documents\Spotify\apna.jpeg"},
    { songName: "Khairiyat", filepath: "C:\Users\manas\OneDrive\Documents\Spotify\songs/3.mp3",coverPath:"C:\Users\manas\OneDrive\Documents\Spotify\kha.jpeg"},
    { songName: "Shayad", filepath: "C:\Users\manas\OneDrive\Documents\Spotify\songs/4.mp3",coverPath:"C:\Users\manas\OneDrive\Documents\Spotify\sha.jpeg"},
    { songName: "Soch Naa sake", filepath: "C:\Users\manas\OneDrive\Documents\Spotify\songs/5.mp3",coverPath:"C:\Users\manas\OneDrive\Documents\Spotify\soch.jpeg"}
 ]

 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
 })

 audioElement.addEventListener('timeupdate', ()=>{
    
    progress= parseInt((audioElement.currentTime/audioElement.duration)* 100);
    progressBar.value=progress;
 })

 progressBar.addEventListener('change', ()=>
 {
   audioElement.currentTime = progressBar.value * audioElement.duration/100;
 })

 const makeAllPlays = ()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle');
       element.classList.add('fa-play-circle');
   })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click', (e)=>{ 
       makeAllPlays();
       songIndex = parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src = `songs/${songIndex+1}.mp3`;
       masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
   })
})

document.getElementById('next').addEventListener('click', ()=>{
   if(songIndex>=4){
       songIndex = 0
   }
   else{
       songIndex += 1;
   }
   audioElement.src = `songs/${songIndex+1}.mp3`;
   masterSongName.innerText = songs[songIndex].songName;
   audioElement.currentTime = 0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
   if(songIndex<=0){
       songIndex = 0
   }
   else{
       songIndex -= 1;
   }
   audioElement.src = `songs/${songIndex+1}.mp3`;
   masterSongName.innerText = songs[songIndex].songName;
   audioElement.currentTime = 0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
})