import { IListing } from "../../models/IListing";
import Masonry from 'react-layout-masonry';
import "./Listing.scss";

function Listing({ selectedValue, data }: IListing) {
  if (!selectedValue || !data || !Array.isArray(data.message)) {
    return null;
  }

  return (
    <>
      <div className="listing">
        {selectedValue && (
          <div>
            <h2 className="title">{selectedValue} Images</h2>
            <Masonry columns={{ 767: 1, 1180: 2, 1280: 3 }} gap={16}>
              {data.message.map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt={`${selectedValue} ${index}`} />
                </div>
              ))}
            </Masonry>
          </div>
        )}
      </div>
    </>
  );
}

export default Listing;
