import './App.css'; 
import Header from './components/Header';
import Story from './components/Story';
import Perfil from './components/Perfil';
import Feed from './components/Feed';
import perfil8 from './components/imagens/perfil8.png';
import perfil2 from './components/imagens/perfil2.jpg';
import perfil3 from './components/imagens/perfil3.jpg';
import perfil5 from './components/imagens/perfil5.jpg';
import perfil6 from './components/imagens/perfil6.jpg';
import perfil7 from './components/imagens/perfil7.jpg';
import feed from './components/imagens/feed.jpg';
import feed2 from './components/imagens/feed2.jpg';
import feed3 from './components/imagens/feed3.jpg';
import feed4 from './components/imagens/adocao.jpg';
import feed5 from './components/imagens/feed4.jpg';
import feed6 from './components/imagens/feed6.jpg';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <Story />

          <Feed perfil={perfil8} nome="palmeiras" localizacao="Allianz Parque" feed={feed} curtidas="154 curtidas" titulo="Acordou a 🦉 e garantiu o #SábadoAlviverde! Vamos, Scarpa! 👊 📷 Cesar Greco #AvantiPalestra #Palmeiras #Verdão" comentarios="Ver todos os 90 comentários"   horario="Há 1 dia"  />
          <Feed perfil={perfil2} nome="daniwqs" localizacao="Shopping Morumbi" feed={feed2} curtidas="350 curtidas" titulo=" não mas esse dia aqui 🎡" comentarios="Ver todos os 22 comentários"   horario="Há 8 horas"  />
          <Feed perfil={perfil3} nome="alee.figueiredo" localizacao="EXERCITO" feed={feed3} curtidas="150 curtidas" titulo=" 🇧🇷🔰" comentarios="Ver todos os 10 comentários"   horario="04 DE MAIO DE 2022"  />
          <Feed perfil={perfil5} nome="danielle_adocao" localizacao="SÃO PAULO - SP" feed={feed4} curtidas="999 curtidas" titulo=" Esse é o BARAK um lindo filhote de 2 meses que espera por uma família iluminada..." comentarios="Ver todos os 99 comentários"   horario="02 DE MAIO DE 2022"  />
          <Feed perfil={perfil7} nome="instituto.proa 
" localizacao="" feed={feed5} curtidas="500 curtidas" titulo=" É com muito orgulho que anunciamos que o PROA ganhou o selo do Great Place to Work (GPTW) como uma das melhores empresas para se trabalhar em 2022! Nossa nota foi 96 de 100! ✨ 🎉" comentarios="Ver todos os 50 comentários"   horario="Há 18 horas"  />
          <Feed perfil={perfil6} nome="orthopediavet" localizacao="SAÚDE" feed={feed6} curtidas="200 curtidas" titulo=" Vamos começar pelo começo né? Isso foi tema de trabalho do meu primeiro semestre 💚..." comentarios="Ver todos os 35 comentários"   horario="20 DE ABRIL DE 2022"  />

          <Perfil />        
        </div>
      </div>
    </>
  );
}

export default App;
