import './styles.css'; // Import the CSS file
import React, { useState } from 'react';
import SongsLibrary from './SongsLibrary'; // Corrected import path

const App = () => {
  const songs = [
    {
      name: "Double Trouble",
      picture: "https://i.scdn.co/image/ab67616d0000b2736e91bf51551cde27cf90a881",
    },
    {
      name: "Everything at Once",
      picture: "https://imgs.search.brave.com/uMJ8JUbpkIIYzQWeKfP6ngtom_mkieFOc9D7Db0oIXw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xl/bmthL2ltYWdlcy9h/L2FkL0xlbmthLWV2/ZXJ5dGhpbmdfYXRf/b25jZV9zLmpwZy9y/ZXZpc2lvbi9sYXRl/c3Qvc2NhbGUtdG8t/d2lkdGgtZG93bi8y/MTA_Y2I9MjAxMzA4/MDQwNjU5MzI.jpeg",
    },
    {
      name: "Bella Ciao",
      picture: "https://imgs.search.brave.com/5i_ieuOv_ThW7xV_gXhgvF6UemxmlfSfE2S34sAuFd8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ3NjA1/OTYuanBn",
    },
    {
      name: "We will rock you",
      picture: "https://images.backstreetmerch.com/images/products/films/misc/wwry/bsi_wwry07.png",
    },
  ];
  
  const songs2 = [
    {
      name: "Baller",
      picture: "https://i1.sndcdn.com/artworks-lMx1UBF0kfOytYGf-CWN2Uw-t500x500.jpg",
    },
    {
      name: "Kajra Re",
      picture: "https://i.scdn.co/image/ab67616d0000b273d2cb1c16206718e992b73819",
    },
    {
      name: "Mitti De Tibbe",
      picture: "https://c.saavncdn.com/523/Mitti-De-Tibbe-Punjabi-2022-20220719125943-500x500.jpg",
    },
    {
      name: "Naagin",
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MiDohzSk8Awody9D2oT33y-6Mq_AeSsh8RxtX0FkHw&s",
    },
  ];
  
  const songs3 = [
    {
      name: "Death note",
      picture: "https://images.saymedia-content.com/.image/t_share/MTc2Mjg4NjgyODYzNTAyNTA5/deathnotethemes.gif",
    },
    {
      name: "Shaktimaan",
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGuYk1MtyO1snTSJkqImaLNA5HhvNSun-rBTUA4qB70SyhMr1myULxuEApmFP2akBPLY&usqp=CAU",
    },
    {
      name: "Aana hi pada sajna",
      picture: "https://www.bollywooddjsclub.co.in/wp-content/uploads/2022/07/Bin-Tere-Sanam-Remix-DJ-AY.jpg",
    },
    {
      name: "Ae meri zohrajabeen",
      picture: "https://i.ytimg.com/vi/pc5dl8eZ6sg/hqdefault.jpg",
    },
  ];
  
  const songs4 = [
    {
      name: "My life is going on",
      picture: "https://imgs.search.brave.com/xdhDHRwSNDNEB0SjzzniCQs5LHExu6DOX6EGaAGPG0s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODEyc3UzclQ3bkwu/anBn",
    },
    {
      name: "Mass",
      picture: "https://c.saavncdn.com/086/Mass-2004-500x500.jpg",
    },
    {
      name: "Bing Bing Boo",
      picture: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/22/57/ec/2257ec78-dc30-79f2-5858-31fb27e11801/cover.jpg/600x600bf-60.jpg",
    },
    {
      name: "Daaru Badnaam",
      picture: "https://c.saavncdn.com/125/Daru-Badnaam-Punjabi-2016-20191010170948-500x500.jpg",
    },
  ];
  
  const additionalArtists = [
    {
      name: "Cecilia Krull",
      picture: "https://imgs.search.brave.com/po72jCTVNYGg42Yi_5sADQpZtrKK9l6lTmtPz6haal4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmRp/c2NvZ3MuY29tL01o/MGUzWlllaTJMQW5Y/emRaRHp6a1lIQWNs/Q3FLVlhVbXJJd1By/M2wzRGMvcnM6Zml0/L2c6c20vcTo0MC9o/OjMwMC93OjMwMC9j/ek02THk5a2FYTmpi/MmR6L0xXUmhkR0Zp/WVhObExXbHQvWVdk/bGN5OUJMVEV5Tmpr/dy9Oemd0TVRVek5q/WTVOREF4L05TMDJN/RE15TG1wd1pXYy5q/cGVn",
    },
    {
      name: "Lenska",
      picture: "https://imgs.search.brave.com/exZMg-lYOa11zzAn4GHy742xSbEZj2viT3lkazRnviI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQ5MjEwL3Bob3Rv/L2Jlcmxpbi1nZXJt/YW55LWF1c3RyYWxp/YW4tc2luZ2VyLWxl/bmthLXBlcmZvcm1z/LWxpdmUtZHVyaW5n/LWEtY29uY2VydC1h/dC10aGUtcG9zdGJh/aG5ob2Ytb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTBX/VHBZYlVSMTg2elI4/QVRmN1hPLUNVRURp/RDgzRGZ0eXc1WDU1/RVFTNUk9",
    },
    {
      name: "Queen",
      picture: "https://imgs.search.brave.com/vNQcLOjAcgM1B-baUhBAKxLdCVzf2eyg_vuBcUZnOTs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjEz/NDYzMTI0L3Bob3Rv/L3RoZS1yb2NrLWJh/bmQtcXVlZW4taW4t/Y29uY2VydC1pbi0x/OTg0LWxlYWQtc2lu/Z2VyLWZyZWRkaWUt/bWVyY3VyeS1qb2hu/LWRlYWNvbi1hbmQt/YnJpYW4tbWF5Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0x/SVFHeEVqdVVpemtK/c2ZpUTZ6cnd3bG84/THhqQndia1ViRlVQ/SWN4LWpvPQ",
    },
    {
      name: "Shubh",
      picture: "https://i1.sndcdn.com/avatars-GBhEb4pyHIRKyPfO-9aDwAw-t240x240.jpg",
    },
    {
      name: "Kaka",
      picture: "https://imgs.search.brave.com/I_YPGq06OOLYuTGAccykGqT4bK0v7fYftOA-eQSW2to/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1hZ2VkaWFtb25k/LmNvbS9ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEx/L0tha2EtUHVuamFi/aS1TaW5nZXItSW1h/Z2VzLTYuanBn",
    },
    {
      name: "Yashraj Mukhate",
      picture: "https://imgs.search.brave.com/47HnYkSb0rMztEWpl8zSbg1OUTCo-ts_uhwM-S_cYeU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWdr/LnRpbWVzbm93bmV3/cy5jb20vc3Rvcnkv/U2NyZWVuc2hvdF81/MzI5LnBuZz90cj13/LTYwMCxoLTQ1MCxm/by1hdXRv",
    },
    {
      name: "Alisha Chinai",
      picture: "https://imgs.search.brave.com/-gMJVF2f_CjJ0abCflpo931Nd8J8yRpaitfrGjeOR6o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlptSXlNMlE1/TWpjdE1EUmxNaTAw/WTJGaExXSmtNelF0/TXpBeU16YzNNamht/WkdKaVhrRXlYa0Zx/Y0dkZVFYVnlORFV6/T1RRNU1qWUAuanBn",
    },
    {
      name: "Himesh Reshammiya",
      picture: "https://imgs.search.brave.com/Is_mxMJIRhCPh2T2niLKWL3nnFxF-Gxwqx5EhjfCSH4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzgzL0hpbWVzaF9S/ZXNoYW1taXlhX3dp/dGhfdGVhbV9vZl8n/SHVtc2hha2Fscydf/YXRfSGFzZWVfSG91/c2Vfb25fU3Rhcl9Q/bHVzLmpwZw",
    },
  ];
  
  const allSongs = [...songs, ...songs2, ...songs3, ...songs4, ...additionalArtists];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredSongs = allSongs.filter(song =>
    song.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1>SoundWave Library</h1>
      </header>

      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <SongsLibrary songs={filteredSongs} />
    </div>
  );
};

export default App;
