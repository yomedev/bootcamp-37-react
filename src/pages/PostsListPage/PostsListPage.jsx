import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Button } from '../../components/Button';
import { PostsItem, PostsLoader, PostsSearch } from '../../components/Posts';
import { Status } from '../../constants/fetch-status';
import { getPostsThunk } from '../../redux/posts/thunk.posts';

export const PostsListPage = () => {
  const { posts, status } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = Object.fromEntries(searchParams);
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    if (page > posts.total_pages) {
      setSearchParams({ ...queryParams, page: 1})
      return 
    } 
    dispatch(getPostsThunk({ page, search }));
  }, [search, page, dispatch]);

  if (status === Status.Loading || status === Status.Idle) {
    return <PostsLoader />;
  }

  if (status === Status.Error) {
    return <p>Error</p>;
  }

  if (status === Status.Success && !posts) {
    return <p>Not Found</p>;
  }

  return (
    <>
      <PostsSearch />

      <div className='container-fluid g-0 pb-5 mb-5'>
        <div className='row'>
          {posts.data.map((post) => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className='pagination'>
        <div className='btn-group mx-auto py-3'>
          {[...Array(posts.total_pages)].map((_, index) => (
            <Button
              key={index}
              disabled={index + 1 === posts.page}
              onClick={() => setSearchParams({ ...queryParams, page: index + 1 })}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
