import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import List from "./List";
import { grammarDetail } from "./data.tsx";
import { MemoryRouter } from "react-router-dom";

const sleep = (x: number) => new Promise((r) => setTimeout(r, x));

describe("Grammar", () => {
  const { container, getByText } = render(
    <MemoryRouter>
      <List />
    </MemoryRouter>
  );
  it("List", async () => {
    const data = grammarDetail(1);
    const detail = await data.then(
      (result: any) => {
        return result;
      },
      (error: any) => {
        console.error("Rejected: " + error);
      }
    );
    act(() => {
      fireEvent.click(getByText(detail.name));
    });
    await sleep(2000);
    expect(container.innerHTML).toContain(detail.text);
  });
});
