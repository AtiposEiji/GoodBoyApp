import { LoadMoreProps } from "../../models/ILoadMoreProps";

function LoadMoreButton({ onClick }: LoadMoreProps) {
  return (
    <div className="load-more-button" onClick={onClick}>
      Load More
    </div>
  );
}

export default LoadMoreButton;