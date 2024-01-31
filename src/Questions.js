import Question from "./Question";

const Questions = ({questions,activeId,toogle}) => {

    console.log(questions);
    return(
        <section className="container">
            <h1>Questions</h1>
            {questions.map((question)=>{
                return <Question key={question.id} {...question} activeId = {activeId} toogle = {toogle} />
            })}
        </section>
    );
}

export default Questions;