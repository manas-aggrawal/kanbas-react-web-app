import TodoList from "../Lab3/todos/todos";
import ArrayStateVariable from "./ArrayStateVariables";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariables";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import AddRedux from "./ReduxExamples/AddRedux";
import CounterRedux from "./ReduxExamples/CounterRedux";
import HelloRedux from "./ReduxExamples/HelloRedux";
import StringStateVariables from "./StringStateVariables";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />;
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples />
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
    </div>
  );
}
