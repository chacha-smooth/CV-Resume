
import { useNavigate } from "react-router-dom";


export default function Button(props:{text:string,  path:string})
{
    const navigate = useNavigate();
    
    const {text, path} = props;
    return <button onClick={()=> navigate(path)}> {text} </button>;
}