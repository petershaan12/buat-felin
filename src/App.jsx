import { useEffect, useRef, useState } from "react";

function Awal({ onClick }) {
  return (
    <>
      <div className="stp">
        <p>
          Anyongg, ada paket buuuu
          <img src="/sudut.svg" id="" />
        </p>
      </div>
      <img src="/mail.svg" id="ml" onClick={onClick} className="bg-tings" />
    </>
  );
}

function Card1({ onClick }) {
  return (
    <div className="pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/1.gif" className="mx-auto h-36" />
          <p>Hallo Sayang 💖</p>
          <div className="btn">
            <button onClick={onClick}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/2.gif" className="mx-auto h-36" />
          <p>Coba tebak deh siapa yang hari ini ulang taun? cluenya adalah F</p>
          <div className="btn">
            <button onClick={onClick}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card3({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/3.gif" className="mx-auto h-36" />
          <p>Yeayyyy betul pacar aku yg paling cantikk sedunia</p>
          <div className="btn">
            <button onClick={onClick}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card4({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/4.gif" className="mx-auto h-36" />
          <p>Selamat Ulang Tahun Pacar Aku yang cantik</p>
          <div className="btn">
            <button onClick={onClick}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card5({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/5.gif" className="mx-auto h-36" />
          <p>
            Semangat Kuliahnya, Nyanyinya, Himanya dan semuanya banyakkkk...,
            Pokoknya tetap setia selalu ya dan sayang orang tua dan Tuhan dan
            aku hihihi
          </p>
          <div className="btn">
            <button onClick={onClick}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card6({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/6.gif" className="mx-auto h-36" />
          <p>
            Udah deh gitu aja maaf singkat krn yang lainnya dalam doa dan aku
            mau tidur deh byee
          </p>
          <div className="btn">
            <button onClick={onClick}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card7({ onClick }) {
  return (
    <div className="flex items-center justify-center pu-ctnr pu-ctn">
      <div className="pu bg-white">
        <div className="t">
          <div>
            <div></div>
          </div>
        </div>
        <div className="c">
          <img src="/us.jpg" className="mx-auto h-36" />
          <p>💖🥰</p>
          <div className="btn">
            <button onClick={onClick}>ulang lagi</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [audioStarted, setAudioStarted] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    const startAudioOnInteraction = () => {
      if (audioRef.current && !audioStarted) {
        audioRef.current
          .play()
          .catch((error) => console.log("Audio play error:", error));
        setAudioStarted(true);
        document.removeEventListener("click", startAudioOnInteraction); // Menghapus event listener setelah audio dimulai
      }
    };

    document.addEventListener("click", startAudioOnInteraction);

    return () => document.removeEventListener("click", startAudioOnInteraction);
  }, [audioStarted]);

  const cards = [
    <Awal key="awal" onClick={() => handleNextCard()} />,
    <Card1 key="card1" onClick={() => handleNextCard()} />,
    <Card2 key="card2" onClick={() => handleNextCard()} />,
    <Card3 key="card3" onClick={() => handleNextCard()} />,
    <Card4 key="card4" onClick={() => handleNextCard()} />,
    <Card5 key="card5" onClick={() => handleNextCard()} />,
    <Card6 key="card6" onClick={() => handleNextCard()} />,
    <Card7 key="card7" onClick={() => handleNextCard()} />,
  ];

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg">
        <div className="ly">
          <div className="v">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="h">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {cards[currentCardIndex]}
          <img src="/bintang.svg" id="str" className="bg-tings" />
          <img src="/bintang.svg" id="str" className="bg-tings" />
          <img src="/bintang.svg" id="str" className="bg-tings" />
          <img src="/stars.svg" id="strr" className="bg-tings" />
          <img src="/smile.svg" id="sml" className="bg-tings" />
          <img src="/love.svg" id="lv" className="bg-tings" />
        </div>
      </div>

      <audio ref={audioRef} src="/song.mp3" preload="auto" loop />
    </div>
  );
}

export default App;
