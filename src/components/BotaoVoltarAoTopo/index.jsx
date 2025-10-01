import React, { useState, useEffect } from 'react';

const BotaoVoltarAoTopo = () => {
  const [visivel, setVisivel] = useState(false);

  const verificarScroll = () => {
    if (window.pageYOffset > 300) {
      setVisivel(true);
    } else {
      setVisivel(false);
    }
  };

  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', verificarScroll);
    return () => {
      window.removeEventListener('scroll', verificarScroll);
    };
  }, []);

  return (
    <button
      type="button"
      className={`btn botao-lilas position-fixed bottom-0 end-0 m-3 rounded-circle ${visivel ? 'd-block' : 'd-none'}`}
      onClick={voltarAoTopo}
      style={{ width: '50px', height: '50px' }}
    >
      <span style={{ color: 'white', fontSize: '24px' }}>↑</span>
    </button>
  );
};

export default BotaoVoltarAoTopo;
