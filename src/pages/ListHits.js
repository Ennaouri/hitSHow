import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function ListHits() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'id',
        field: 'id',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'id',
        },
      },
      {
        label: 'Chanteur',
        field: 'Chanteur',
        width: 270,
      },
      {
        label: 'Titres',
        field: 'Titres',
        width: 200,
      },
      {
        label: 'Genre',
        field: 'Genre',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Liens',
        field: 'Liens',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'image',
        field: 'image',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
      {
        id: 1,
        Chanteur: 'Alicia Keys',
        Titres: 'Girl On fire',
        Genre: 'PoP',
        Liens: <a href="https://youtube.com" >Regarder</a>,
        image: <img src="../assets/img/portfolio/aliciaKeys.jpg" alt="image chanteur" width="200px" />,
      },
      {
        id: 2,
        Chanteur: 'Eminem',
        Titres: 'Lose your self',
        Genre: 'rap',
        Liens: <a href="https://youtube.com" >Regarder</a>,
        image: <img src="../assets/img/portfolio/eminem.jpg" alt="image chanteur" width="200px" />,
      }
    ],
  });

  return (
      <div className="container mt-5">
  <MDBDataTableV5 hover data={datatable} filter='Titres' proSelect searchTop searchBottom={false} />
  </div>
  );
}