import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Button } from '../../components/Button';
import { PostsItem, PostsLoader, PostsSearch } from '../../components/Posts';
import { Status } from '../../constants/fetch-status';
import { getPostsService } from '../../services/posts.service';

export const PostsListPage = () => {
  const [posts, setPosts] = useState(null);

  const location = useLocation()
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = Object.fromEntries(searchParams);
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  // const [page, setPage] = useState(1);

  const [status, setStatus] = useState(Status.Idle);

  useEffect(() => {
    setStatus(Status.Loading);
    getPostsService({ search, page })
      .then((data) => {
        setStatus(Status.Success);
        setPosts(data);
      })
      .catch(() => setStatus(Status.Error));
  }, [search, page]);

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
