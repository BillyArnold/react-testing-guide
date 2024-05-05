import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import NewMovie from "./NewMovie";

afterEach(cleanup);

test('<NewMovie />', () => {
    const { debug, getByTestId, container, getByText } = render(<NewMovie />);
    const title = getByTestId('page-title');

    //expect(container.firstChild).toMatchSnapshot();

    expect(title.textContent).toBe('New Movie');

})