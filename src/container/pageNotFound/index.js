import React from "react";
import { Button } from "../../component";
import { useNavigate } from "react-router-dom";
function PageNotFound() {
  const navigation = useNavigate();
  const handleHomeButtonClick = () => {
    navigation(`/`);
  };
  return (
    <div>
      404
      <br />
      <Button
        classAddon="c-button--small f-Exo-Bold mr-2"
        title={"Home"}
        onClick={handleHomeButtonClick}
      />
    </div>
  );
}
export default PageNotFound;
