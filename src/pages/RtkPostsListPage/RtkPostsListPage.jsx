import { useSearchParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { PostsItem, PostsLoader, PostsSearch } from '../../components/Posts';
import { useGetPostsQuery } from '../../redux/rtk-posts/api.rtk-posts';

export const RtkPostsListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = Object.fromEntries(searchParams);
  const search = searchParams.get('search') ?? '';
  const page = searchParams.get('page') ?? 1;

  const { data: posts, isLoading, isError } = useGetPostsQuery({ search, page });

  // const [getPosts, {data: posts, isLoading, isError}] = useLazyGetPostsQuery();

  if (isLoading) {
    return <PostsLoader />;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <>
      <PostsSearch />

      {/* <Button onClick={() => getPosts()}>Get posts</Button> */}

      <div className='container-fluid g-0 pb-5 mb-5'>
        <div className='row'>
          {posts?.data.map((post) => (
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
