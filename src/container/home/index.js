import React from "react";
import { Button } from "../../component";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigation = useNavigate();
  const handleAboutButtonClick = () => {
    navigation(`/about`);
  };
  const handleHAndTButtonClick = () => {
    navigation(`/h-and-t`);
  };
  return (
    <div>
      <Button
        classAddon="c-button--small f-Exo-Bold mr-2"
        title={"About"}
        onClick={handleAboutButtonClick}
      />
      <br />
      <Button
        classAddon="c-button--small f-Exo-Bold mr-2"
        title={"Head & Tail"}
        onClick={handleHAndTButtonClick}
      />
    </div>
  );
}
export default Home;
