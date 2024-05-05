import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import MovieForm from "./MovieForm";

afterEach(cleanup);

const onSubmit = jest.fn();

test('<MovieForm />', () => {
    const { getByText, getByLabelText } = render(<MovieForm submitForm={onSubmit} />);

    fireEvent.click(getByText('Submit'));

    //input the text hello into the text input
    fireEvent.change(getByLabelText('Text'), {
        target: { value: 'hello' }
    })

    expect(onSubmit).toHaveBeenCalledWith({ text: 'hello' });
})