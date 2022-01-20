import './style.css';

export default function Card({ data }) {
   const colors = {
         fire: '#FDDFDF',
         grass: '#DEFDE0',
         electric: '#FCF7DE',
         water: '#DEF3FD',
         ground: '#f4e7da',
         rock: '#d5d5d4',
         fairy: '#fceaff',
         poison: '#98d7a5',
         bug: '#f8d5a3',
         dragon: '#97b3e6',
         psychic: '#eaeda1',
         flying: '#F5F5F5',
         fighting: '#E6E0D4',
         normal: '#F5F5F5',
      };
   return (
      <div className="card" style={{backgroundColor: colors[data.type]}}>
         <div className="card__cont-img">
            <img className="card__img" src={data.img} alt=""/>
         </div>
         <div className="card__cont-text">
            <p className="card__p card__p--id">{data.id}</p>
            <p className="card__p card__p--name">{data.name}</p>
            <p className="card__p card__p--type">{data.type}</p>
         </div>
      </div>
   );
}