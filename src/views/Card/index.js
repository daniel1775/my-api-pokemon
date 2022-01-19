export default function Card({data}){
   return(
      <div>
         <img src={data.img} alt="" />
         <p>{data.id}</p>
         <p>{data.name}</p>
         <p>{data.type}</p>
      </div>
   );
}