import { fireEvent, render } from '@testing-library/react';
import TextArea from '../components/TextArea';

/* global test, expect, jest */

const setup = () => {
  const settextString = jest.fn();

  const utils = render(
    <TextArea textString="" settextString={settextString} />
  );

  const textArea = utils.getByTestId('text-area');
  return {
    settextString,
    textArea,
    ...utils,
  };
};

test('when typing into text area, state change function should be called', () => {
  const { textArea, settextString } = setup();
  fireEvent.change(textArea, { target: { value: 'hello' } });
  expect(settextString).toHaveBeenCalled();
});
