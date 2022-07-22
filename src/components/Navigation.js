import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation({ setSubpageContent }) {
  return (
    <header>
      <nav>
        <Link
          onClick={() =>
            setSubpageContent({
              image: 'landscape-1.jpg',
              h2: 'Page 1',
              alt: 'forest at sunset with river in foreground and mountains in background',
            })
          }
          to={'/subpage'}
        >
          Page 1
        </Link>

        <Link
          onClick={() =>
            setSubpageContent({
              image: 'landscape-2.jpg',
              h2: 'Page 2',
              alt: 'big lake landscape during a purple toned sunset with tree in foreground and mountains in background',
            })
          }
          to={'/subpage'}
        >
          Page 2
        </Link>

        <Link
          onClick={() =>
            setSubpageContent({
              image: 'landscape-3.jpg',
              h2: 'Page 3',
              alt: 'landscape of blue coloured mountain ranges with sunrise colours in background',
            })
          }
          to={'/subpage'}
        >
          Page 3
        </Link>
      </nav>
    </header>
  );
}
