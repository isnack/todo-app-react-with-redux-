import React, { Component } from "react";
import axios from "axios";
import PageHeader from "../teamplate/pageHeader";
import TodoList from "./todoList";
import TodoForm from "./todoForm";

const URL = "http://localhost:3003/api/todos";

const Todo = props => {
  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
