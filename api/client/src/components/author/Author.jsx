import './author.css'
import "../../config";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Header() {
  const { user, dispatch } = useContext(Context);
  return (
    <div class="authorHero container">
      <img
        className="authorimage"
        src="https://mooimalaysian-f535oyzjxa-as.a.run.app/api/images/main.jpg"
        alt=""
      />
      <div class="authortext-container">
        <h1>Syahmi Ooi</h1>
        <h4>Law students at UKM</h4>

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
