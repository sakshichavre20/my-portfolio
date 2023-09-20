import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import data from "../assets/data.json";
import { Carousel } from "react-responsive-carousel";

const Work = () => {
  return (
    <div id="work">
      <h2>PROJECTS</h2>
      <section>
        <article class>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            autoPlay
            infiniteLoop={true}
          >
            {data?.projects?.map((item) => (
              <div key={item?.title} className="workItem">
                <img src={item?.imgSrc} alt={item?.title} />
                <aside>
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                  <a href={item?.url} target={"blank"}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
