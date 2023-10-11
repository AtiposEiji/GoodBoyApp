import { IListing } from "../../models/IListing";
import LoadMoreButton from "../LoadMore/LoadMore";
import Masonry from "react-layout-masonry";
import "./Listing.scss";
import { useState } from "react";

function Listing({ selectedValue, data }: IListing) {
  const [visibleImages, setVisibleImages] = useState(9);

  if (!selectedValue || !data || !Array.isArray(data.message)) {
    return null;
  }

  const loadMoreImages = () => {
    setVisibleImages(visibleImages + 9); // Increase the number of visible images
  };

  return (
    <>
      <div className="listing">
        {selectedValue && (
          <div>
            <h2 className="title">{selectedValue} Images</h2>
            <Masonry columns={{ 767: 1, 1180: 2, 1280: 3 }} gap={16}>
              {data.message.slice(0, visibleImages).map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt={`${selectedValue} ${index}`} />
                </div>
              ))}
            </Masonry>
            {visibleImages < data.message.length && (
              <LoadMoreButton onClick={loadMoreImages} />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Listing;
