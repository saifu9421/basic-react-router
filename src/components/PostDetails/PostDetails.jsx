import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id , title,body} = post;
    const navigate = useNavigate();

  const handleGoBack =()=>{
           navigate(-1);
  };
    return (
        <div>
            <h2>Post details about:</h2>
          <h2>userId:{id}</h2>
          <p>{title}</p>
          <p>{body}</p>
          <button onClick={handleGoBack}>
            Go Back
          </button>
        </div>
    );
};

export default PostDetails;