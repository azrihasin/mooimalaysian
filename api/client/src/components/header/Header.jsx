import "./header.css";

export default function Header() {
  return (
    <div class="Hero container">
      <div class="text-container">
        <div className="typewriter1">
        <h1 class="header">Mooi </h1>
        </div>
        <div className="typewriter">
        <h1 class="header">Malaysian</h1>
        </div>
        
        <p class="snippet">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio
          beatae, repellendus accusantium deleniti explicabo molestias
          temporibus impedit inventore expedita corrupti asperiores voluptatum
          quas rem iste fugit perferendis eum repudiandae?
        </p>
        
      </div>
     <img
        className="image"
        src="http://localhost:5000/api/images/main.jpg"
        alt=""
      />
     
    </div>
  );
}
