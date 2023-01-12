import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Status } from '../../constants/fetch-status';
import { getPostsService } from '../../services/posts.service';
import { Button } from '../Button';
import { NotFound } from '../NotFound';
import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';
import { PostsSearch } from './PostsSearch';

export const ReactQueryPosts = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const { data: posts, status } = useQuery({
    queryKey: ['posts', { page, search }],
    queryFn: () => getPostsService({ page, search }),
    enabled: !!search
  });

  const handleChangePage = (page) => () => setPage(page);

  const handleSubmitSearch = (search) => {
    setSearch(search);
    setPage(1);
  };

  // if (status === Status.Loading || status === Status.Idle) {
  //   return <PostsLoader />;
  // }

  if (status === Status.Error) {
    return <NotFound />;
  }
  return (
    <>
      <PostsSearch value={search} onSubmit={handleSubmitSearch} />
      {status === Status.Loading || status === Status.Idle && <PostsLoader />}
      <div className='container-fluid g-0 pb-5 mb-5'>
        <div className='row'>
          {posts?.data?.map((post) => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className='pagination'>
        <div className='btn-group my-2 mx-auto btn-group-lg'>
          {[...Array(posts?.total_pages)].map((_, index) => (
            <Button
              disabled={index + 1 === posts?.page}
              onClick={handleChangePage(index + 1)}
              key={index}
            >
              {index + 1}
            </Button>
          ))}
          {/* <Button
            disabled={posts.page === posts.total_pages}
            onClick={this.handleLoadMore}
            className='btn btn-primary ms-3'
          >
            Load more
          </Button> */}
        </div>
      </div>
    </>
  );
};
