import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"

const Question = ({id,title,info,activeId,toogle}) =>{

    const isActive = id === activeId;

    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                <button type="button" className="question-btn" onClick={()=>{
                toogle(id);
            }}>
                {isActive ? <AiOutlineMinus/>: <AiOutlinePlus/>}
            </button>
            </header>
            <p>
            { isActive && info}
            </p>
        </article>
    );
}

export default Question;