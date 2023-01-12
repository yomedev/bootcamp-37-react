import { useEffect, useState } from 'react';

import { getPostsService } from '../../services/posts.service';

import { Status } from '../../constants/fetch-status';

import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';
import { NotFound } from '../NotFound';
import { Button } from '../Button';
import { PostsSearch } from './PostsSearch';
import { useFetch } from '../../hooks/useFetch';

export const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [search, setSearch] = useState('');

  const { fetchData: fetchPosts, status } = useFetch((params) => {
    getPostsService(params).then((posts) => setPosts(posts));
  });

  useEffect(() => {
    fetchPosts({ search });
  }, [search]);

  const handleChangePage = (page) => () => fetchPosts({ page, search });

  const handleSubmitSearch = (search) => setSearch(search);

  if (status === Status.Loading || status === Status.Idle) {
    return <PostsLoader />;
  }

  if (status === Status.Error) {
    return <NotFound />;
  }

  return (
    <>
      <PostsSearch value={search} onSubmit={handleSubmitSearch} />

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

// export class Posts extends Component {
//   state = {
//     posts: null,
//     status: Status.Idle,
//     search: '',
//     page: 1,
//   };

//   async componentDidMount() {
//     this.fetchPosts();
//   }

//   async componentDidUpdate(_, prevState) {
//     if (prevState.page !== this.state.page || prevState.search !== this.state.search) {
//       const { page, search } = this.state;
//       const newPosts = await getPostsService({ page, search });
//       this.setState((prevState) => ({
//         posts:
//           page > 1 ? { ...newPosts, data: [...prevState.posts.data, ...newPosts.data] } : newPosts,
//       }));
//     }
//   }

//   handleChangePage = async (page) => {
//     const { search } = this.state;
//     this.fetchPosts({ page, search });
//   };

//   fetchPosts = async (params) => {
//     this.setState({ status: Status.Loading });
//     try {
//       const posts = await getPostsService(params);
//       this.setState({ posts, status: Status.Success });
//     } catch {
//       this.setState({ status: Status.Error });
//     }
//   };

//   handleSearchSubmit = async (search) => {
//     this.setState({ search, page: 1 });
//     // this.fetchPosts({ search, page: 1 });
//   };

//   handleLoadMore = async () => {
//     const { posts } = this.state;
//     if (posts.page < posts.total_pages) {
//       this.setState((prevState) => ({ page: prevState.page + 1 }));
//     }
//     // const { posts, search } = this.state;
//     // if (posts.page < posts.total_pages) {
//     //   const newPosts = await getPostsService({ page: posts.page + 1, search });
//     //   this.setState((prevState) => ({
//     //     posts: { ...newPosts, data: [...prevState.posts.data, ...newPosts.data] },
//     //   }));
//     // }
//   };

//   render() {
//     const { status, posts } = this.state;
//     // console.log(this.search);

//     if (status === Status.Loading || status === Status.Idle) {
//       return <PostsLoader />;
//     }

//     if (status === Status.Error) {
//       return <NotFound />;
//     }

//     return (
//       <>
//         <PostsSearch onSubmit={this.handleSearchSubmit} />

//         <div className='container-fluid g-0 pb-5 mb-5'>
//           <div className='row'>
//             {posts?.data.map((post) => (
//               <PostsItem key={post.id} post={post} />
//             ))}
//           </div>
//         </div>

//         <div className='pagination'>
//           <div className='btn-group my-2 mx-auto btn-group-lg'>
//             {[...Array(posts.total_pages)].map((_, index) => (
//               <Button
//                 disabled={index + 1 === posts.page}
//                 onClick={() => this.handleChangePage(index + 1)}
//                 key={index}
//               >
//                 {index + 1}
//               </Button>
//             ))}
//             <Button
//               disabled={posts.page === posts.total_pages}
//               onClick={this.handleLoadMore}
//               className='btn btn-primary ms-3'
//             >
//               Load more
//             </Button>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
