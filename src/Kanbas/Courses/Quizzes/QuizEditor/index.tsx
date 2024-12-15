import { useState, useEffect } from "react";
import DetailsEditor from "./DetailsEditor";
import QuestionsEditor from "./QuestionsEditor";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { addQuiz, updateQuiz } from "../reducer";
import * as coursesClient from "../../client";
import * as quizClient from "../client";

export default function QuizzesEditor() {
  const { cid, qid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [tab, setTab] = useState("details");
  const [quiz, setQuiz] = useState<any>(null);
  const [detailsUpdated, setDetailsUpdated] = useState(false);
  const [questionsUpdated, setQuestionsUpdated] = useState(false);

  const initialDetails = {
    title: "Untitled Quiz",
    course: cid,
    description: "",
    quizType: "Graded Quiz",
    assignmentGroup: "QUIZZES",
    settings: {
      shuffleAnswers: true,
      timeLimit: 20,
      multipleAttempts: { enabled: false, attemptsAllowed: 1 },
      showCorrectAnswers: { enabled: true, timing: "" },
      accessCode: "",
      oneQuestionAtATime: true,
      webcamRequired: false,
      lockQuestionsAfterAnswering: false,
    },
    dates: {
      available: new Date().toISOString(),
      due: new Date().toISOString(),
      until: new Date().toISOString(),
    },
    isPublished: false,
  };

  const [details, setDetails] = useState(initialDetails);
  const [questions, setQuestions] = useState<any[]>([]);

  // Fetch quiz details if editing an existing quiz
  const fetchQuiz = async () => {
    if (qid) {
      try {
        const Quiz = await quizClient.getQuizById(qid);
        if (Quiz) {
          setQuiz(Quiz);
          setDetails(mapQuizToDetails(Quiz));
          setQuestions(Quiz.questions || []);
          setDetailsUpdated(true);
          setQuestionsUpdated(true);
        }
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    }
  };

  // Map quiz data to the details structure
  const mapQuizToDetails = (quiz: any) => ({
    title: quiz.title,
    course: cid,
    description: quiz.description,
    quizType: quiz.quizType,
    assignmentGroup: quiz.assignmentGroup,
    settings: { ...quiz.settings },
    dates: { ...quiz.dates },
    isPublished: quiz.isPublished,
  });

  // Handle save operation
  const handleSave = async () => {
    try {
      const quizData = {
        ...details,
        _id: qid,
        questions,
        isPublished: false, // Default state
      };

      if (!quiz) {
        const newQuiz = await coursesClient.createQuizForCourse(
          cid ?? "",
          quizData
        );
        dispatch(addQuiz(newQuiz));
        navigate(`/Kanbas/Courses/${cid}/Quizzes/Info/${newQuiz._id}`);
      } else {
        const updatedQuiz = { ...quiz, ...quizData };
        await quizClient.updateQuiz(updatedQuiz);
        dispatch(updateQuiz(updatedQuiz));
        navigate(`/Kanbas/Courses/${cid}/Quizzes/Info/${updatedQuiz._id}`);
      }
    } catch (error) {
      console.error("Error saving quiz:", error);
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  useEffect(() => {
    fetchQuiz();
  }, [qid]);

  return (
    <div>
      <h1>Quizzes</h1>
      <br />
      {/* Tab Navigation */}
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <a
            className={`nav-link ${
              tab === "details" ? "text-dark active" : "text-danger"
            }`}
            onClick={() => setTab("details")}
          >
            Details
          </a>
        </li>
        <li className='nav-item'>
          <a
            className={`nav-link ${
              tab === "questions" ? "text-dark active" : "text-danger"
            }`}
            onClick={() => setTab("questions")}
          >
            Questions
          </a>
        </li>
      </ul>

      {/* Tab Content */}
      {tab === "details" ? (
        <DetailsEditor
          details={details}
          setDetails={setDetails}
          reset={detailsUpdated}
        />
      ) : (
        <QuestionsEditor
          questions={questions}
          setQuestions={setQuestions}
          reset={questionsUpdated}
        />
      )}

      <hr className='mt-3' />
      <div className='d-flex justify-content-center align-items-center mt-2'>
        {/* Action Buttons */}
        <div className='d-flex'>
          <button
            className='btn btn-lg btn-secondary m-3'
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className='btn btn-lg btn-danger m-3' onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
