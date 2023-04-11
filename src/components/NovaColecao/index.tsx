import classNames from 'classnames';
import React, { useState } from 'react';

// import { Container } from './styles';

const NovaColecao: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 414);
  const classes = classNames('img-fluid', {
    'max-width-700': !isMobile,
  });
  return (
    <div className="d-flex flex-column flex-sm-row align-items-center column-gap-16">
      <div>
        <h5>Lorem Ipsum </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat.
        </p>
      </div>

      <img
        src="https://onlinestore-6767e.web.app/img/novaColecao.webp"
        alt="imagem nova coleção"
        className={classes}
        style={{ height: '240px', objectFit: 'cover' }}
      />
    </div>
  );
};

export default NovaColecao;
