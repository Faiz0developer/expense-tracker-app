import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-[#a892ee] p-4 my-8 mx-auto w-[50rem] max-w-[95%] rounded-xl text-center shadow-xl">
      {!isEditing && (
        <button
          className="cursor-pointer py-4 px-8 border border-solid border-[#40005d] bg-[#40005d] text-white rounded-xl mr-4
        hover:bg-[#510674] hover:border-[#510674] active:border-[#510674] active:bg-[#510674]"
          onClick={startEditingHandler}
        >
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
