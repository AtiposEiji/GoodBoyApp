import { ISimpleText } from "../../models/ISimpleText";
import "./SimpleText.scss"

function SimpleText({ elementTypeTitle, title, elementTypeDescription, description }: ISimpleText) {
    const Title = elementTypeTitle || "h1";
    const Description = elementTypeDescription || "div";
    
    return (
      <>
        <div className="simple-text">
            <Title className="title">{title}</Title>
            <Description className="text">{description}</Description>
        </div>
      </>
    );
  }
  
  export default SimpleText;
  