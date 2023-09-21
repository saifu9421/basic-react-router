import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title,body}  = post;
    
   const navigate = useNavigate();
    const postStyle ={
        border:'2px solid yellow',
        padding:'5px',
          borderRadius:'20px',
          };
   
             const handleShowDetails = () =>{
               navigate(`/post/${id}`);
             };
          
    return (
        <div style={postStyle}>
            <h3>post of id :{id}</h3>
            <p>{title}</p>
            <p>{body}</p>

            <Link to={`/post/${id}`}>
            <button>
                Post  Detail
            </button>
            </Link>
            <button onClick={handleShowDetails}>
                 Click to see  details 
            </button>
        </div>
    );
};

export default Post;