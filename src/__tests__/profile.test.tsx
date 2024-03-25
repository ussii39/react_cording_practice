import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProfilePage } from "../challenge/Project_06/pages/profile";

// describe("ProfilePage", () => {
//   test("renders ProfilePage component", () => {
//     render(<ProfilePage />);
//     const titleElement = screen.getByText("プロフィール自動作成");
//     expect(titleElement).toBeInTheDocument();
//   });

//   test("updates form values and card component on input change", () => {
//     render(<ProfilePage />);

//     const nameInput = screen.getByLabelText("お名前");
//     fireEvent.change(nameInput, { target: { value: "John Doe" } });
//     expect(nameInput.value).toBe("John Doe");

//     const birthdayInput = screen.getByLabelText("お誕生日");
//     fireEvent.change(birthdayInput, { target: { value: "1990-01-01" } });
//     expect(birthdayInput.value).toBe("1990-01-01");

//     const phoneInput = screen.getByLabelText("電話番号");
//     fireEvent.change(phoneInput, { target: { value: "123-456-7890" } });
//     expect(phoneInput.value).toBe("123-456-7890");

//     const birthdayElement = screen.getByTestId("birthDay");
//     expect(birthdayElement.textContent).toBe("お誕生: 1990-01-01");

//     const phoneElement = screen.getByText(/電話番号:/);
//     expect(phoneElement.textContent).toBe("電話番号: 123-456-7890");
//   });

//   test("handles file upload and updates card component", () => {
//     render(<ProfilePage />);

//     const file = new File(["sample"], "sample.png", { type: "image/png" });
//     const fileInput = screen.getByLabelText("プロフィール画像");
//     fireEvent.change(fileInput, { target: { files: [file] } });

//     const imageElement = screen.getByAltText("プロフィール画像");
//     expect(imageElement.src).toContain("blob:");

//     const downloadLink = screen.getByText("画像をダウンロード");
//     expect(downloadLink.href).toContain("blob:");
//     expect(downloadLink.download).toBe("profile-image.png");
//   });
// });

describe("ProfilePage", () => {
  test("renders ProfilePage component", () => {
    render(<ProfilePage />);
    const titleElement = screen.getByText("プロフィール自動作成");
    expect(titleElement).toBeInTheDocument();
  });

  test("updates form values and card component on input change", () => {
    render(<ProfilePage />);

    const nameInput = screen.getByLabelText("お名前");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput).toHaveValue("John Doe");

    const birthdayInput = screen.getByLabelText("お誕生日");
    fireEvent.change(birthdayInput, { target: { value: "1990-01-01" } });
    expect(birthdayInput).toHaveValue("1990-01-01");

    const phoneInput = screen.getByLabelText("電話番号");
    fireEvent.change(phoneInput, { target: { value: "123-456-7890" } });
    expect(phoneInput).toHaveValue("123-456-7890");

    const birthdayElement = screen.getByTestId("birthDay");
    expect(birthdayElement).toHaveTextContent("お誕生: 1990-01-01");

    const phoneElement = screen.getByText(/電話番号:/);
    expect(phoneElement).toHaveTextContent("電話番号: 123-456-7890");
  });

  test("handles file upload and updates card component", () => {
    const createObjectURLMock = jest.fn();
    global.URL.createObjectURL = createObjectURLMock;

    render(<ProfilePage />);

    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    const fileInput = screen.getByLabelText("プロフィール画像");
    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(createObjectURLMock).toHaveBeenCalledWith(file);

    const imageElement = screen.getByAltText("プロフィール画像");
    expect(imageElement).toHaveAttribute(
      "src",
      createObjectURLMock.mock.results[0].value
    );
  });
});
