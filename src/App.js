import Layout from "./Components/Layout";
import Deals from "./Components/Deals";
import styled from "styled-components";
import HeaderImage from "./Assets/header.svg";

const ImageContainer = styled.div`
  height: 700px;
  width: 100%;
  background-image: url(${HeaderImage});
  background-size: cover;
  background-position: top;
  @media (max-width: 500px) {
    height: 200px;
    width: 500px;
  }
`;

function App() {
  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="w-full  md:w-2/3 md:mx-0 flex flex-col justify-center md:mt-10 ">
          <div className="w-full">
            <ImageContainer>
              <div className="w-full h-full flex flex-wrap content-center justify-end">
                <div className="w-1/2 md:w-1/3 flex flex-col mr-10 md:mr-20">
                  <p className="text-white text-3xl md:text-5xl text-right">
                    Making Dreams
                  </p>
                  <p className="text-white text-3xl md:text-5xl text-right">
                    {" "}
                    Come True in
                  </p>
                  <h1 className="text-white font-bold text-5xl md:text-8xl text-right">
                    Paradise
                  </h1>
                </div>
              </div>
            </ImageContainer>
            
          </div>
          <div className="w-full mt-20">
            <div className="w-full mx-5 border-l-8 border-red-500">
              <div className="h-10 flex flex-wrap content-end ">
                <h1 className="font-extrabold text-gray-500 text-4xl mx-2">
                  Lorem ipsum
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <div className="w-full md:mx-5 grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <div className="w-full p-5">
                <p className="text-xl font-light text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at erat ultrices, convallis turpis eu, ultricies urna. Aliquam
                  elementum ipsum quis venenatis sodales. Aenean pellentesque
                  posuere quam, a fermentum libero efficitur a. Nunc eu dictum
                  nunc, vitae condimentum lorem. Praesent ante augue, porta ut
                  tellus quis, lacinia mollis velit. Nullam maximus nibh et
                  neque interdum, ac tempor mi imperdiet. Vestibulum euismod
                  iaculis justo. Curabitur sed felis nec massa lacinia auctor et
                  sed mi. Donec pretium tempus risus, vitae ultricies mauris
                  vulputate ac.{" "}
                </p>
              </div>
              <div className="w-full p-5">
                <p className="text-xl font-light text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at erat ultrices, convallis turpis eu, ultricies urna. Aliquam
                  elementum ipsum quis venenatis sodales. Aenean pellentesque
                  posuere quam, a fermentum libero efficitur a. Nunc eu dictum
                  nunc, vitae condimentum lorem. Praesent ante augue, porta ut
                  tellus quis, lacinia mollis velit. Nullam maximus nibh et
                  neque interdum, ac tempor mi imperdiet. Vestibulum euismod
                  iaculis justo. Curabitur sed felis nec massa lacinia auctor et
                  sed mi. Donec pretium tempus risus, vitae ultricies mauris
                  vulputate ac.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-20">
            <Deals />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
