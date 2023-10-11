import { LoadMoreProps } from "../../models/ILoadMoreProps";

function LoadMoreButton({ onClick }: LoadMoreProps) {
  return (
    <button className="load-more-button" onClick={onClick}>
      Load More
    </button>
  );
}

export default LoadMoreButton;