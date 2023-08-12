import { render, screen } from "@testing-library/react";

import Todo from "./Todo";

describe("<Todo />", () => {
  it("renders todo text", () => {
    const todoObj = { text: "Feed goldfish", done: false };

    render(
      <Todo
        todo={todoObj}
        doneInfo={<span>Done</span>}
        notDoneInfo={<span>Not done</span>}
      />
    );

    expect(screen.getByText("Feed goldfish")).toBeInTheDocument();
  });
});
