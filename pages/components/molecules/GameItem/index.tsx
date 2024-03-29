import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface GameItemPros {
    id : string;
    title : string;
    category : string;
    thumbnail : string;
}

export default function GameItem(props : GameItemPros) {
  const {
    id, title, category, thumbnail,
  } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href={`/detail/${id}`}>
        <a>
          <div className="blur-sharp">
            <Image className="thumbnail" src={thumbnail} width={205} height={270} alt="" />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image src="/icon/console.svg" width={54} height={34} alt="console game" />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
