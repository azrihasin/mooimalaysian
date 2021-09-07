import './author.css'

export default function Header() {
  return (
    <div class="authorHero container">
      <img
        className="authorimage"
        src="http://localhost:5000/api/images/main.jpg"
        alt=""
      />
      <div class="authortext-container">
        <h1>Syahmi Ooi</h1>

        <p class="authorsnippet">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio
          beatae, repellendus accusantium deleniti explicabo molestias
          temporibus impedit inventore expedita corrupti asperiores voluptatum
          quas rem iste fugit perferendis eum repudiandae?
        </p>
      </div>
    </div>
  )
}
