import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

// import { toast } from 'react-toastify';
import { confetti } from '../../components/Confetti';

// import { Loader } from '../../components/Loader';
import { useGetPostsQuery } from '../../redux/rtk-posts/api.rtk-posts';
// import { getSinglePostService } from '../../services/posts.service';

export const SinglePostPage = () => {
  // const { postId } = useParams();

  const location = useLocation();
  console.log(location);
  const [searchParams] = useSearchParams(location.state.from.search);
  const search = searchParams.get('search') ?? '';
  const page = searchParams.get('page') ?? 1;

  const isPostCreated = location.state?.isPostCreated ?? false;

  useEffect(() => {
    if (isPostCreated) {
      confetti.run();
    }
  }, [isPostCreated]);

  const query = useGetPostsQuery({ search, page });
  console.log(query);

  // const { post, isLoading } = useGetPostsQuery({},
  //   {
  //     selectFromResult: (results) => {
  //       console.log(results);
  //       return {
  //         post: results.data.data.find((item) => item.id === postId),
  //         isLoading: results.isLoading,
  //       };
  //     },
  //   },
  // );

  // const [post, setPost] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);

  //   getSinglePostService(postId)
  //     .then(setPost)
  //     .catch(() => {
  //       toast.error('Something went wrong!');
  //     })
  //     .finally(() => setIsLoading(false));
  // }, [postId]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return <></>;

  // eslint-disable-next-line no-unreachable
  // return (
  //   post && (
  //     <>
  //       <Link className='btn btn-primary mb-5' to={location.state?.from ?? '/posts'}>
  //         Back
  //       </Link>

  //       <img
  //         src={post.image}
  //         alt={post.title}
  //         className='img-fluid mb-4'
  //         style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }}
  //       />
  //       <h1 className='mb-5'>{post.title}</h1>
  //       <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />

  //       <Link
  //         to={`/posts/${postId}/comments`}
  //         state={location.state}
  //         className='btn btn-primary my-4'
  //       >
  //         Vew post comments
  //       </Link>
  //       <Outlet />
  //     </>
  //   )
  // );
};
