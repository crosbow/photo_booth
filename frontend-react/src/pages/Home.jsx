import { use, useEffect, useEffectEvent, useRef, useState } from "react";
import LoginModal from "../components/modals/LoginModal";
import PostList from "../components/post/PostList";
import Modal from "../components/ui/Modal";
import usePosts from "../hooks/usePosts";
import { AuthContext } from "../providers/AuthProvider";

const limit = 5;

const Home = () => {
  const { accessToken } = use(AuthContext);
  const [page, setPage] = useState(1);
  const loaderRef = useRef();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { postsState, hasMore, dispatch } = usePosts({
    page,
    limit,
    isUnAuthenticated: !accessToken,
  });

  const onIntersection = useEffectEvent((items) => {
    const isIntersecting = items[0].isIntersecting;

    if (!isIntersecting) return;

    // check if the page loaded, if loaded then only show login popup
    const isLoadedPage = !!postsState.posts.length;

    if (isLoadedPage) {
      if (!accessToken) {
        // Show Popup to login

        setIsLoginModalOpen(true);
      } else {
        setPage((prev) => prev + 1);
      }
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      observer.disconnect(onIntersection);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto w-full py-10  ">
      <PostList posts={postsState.posts} />

      {hasMore && (
        <div ref={loaderRef} className="w-xl mx-auto text-3xl mt-5">
          {accessToken && <h2> Fetch More posts...</h2>}
        </div>
      )}

      {isLoginModalOpen && (
        <Modal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          key={isLoginModalOpen}
        >
          <LoginModal />
        </Modal>
      )}
    </div>
  );
};
export default Home;
