import Popular from "../popular/Popular";
import "./posts.css";

export default function Populars({ populars }) {
  return (
    <>
    
    <div className="popular">
      {populars.slice(0, 5).map((p,index) => (
        <>
      
        <div className="number">{index+1}</div>
        <Popular popular={p} />
        </>
      ))}
    
    </div>
    </>
  );
}
