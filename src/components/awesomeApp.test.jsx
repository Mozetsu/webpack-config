/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AwesomeApp from './AwesomeApp';

describe('AwesomeApp Component', () => {
  it('should have the awesome h1 element', () => {
    const { getByText } = render(<AwesomeApp />);
    expect(getByText('Awesome h1 element')).toBeInTheDocument();
  });

  it('should have the awesome span element', () => {
    const { getByText } = render(<AwesomeApp />);
    expect(getByText('This is an awesome span!')).toBeInTheDocument();
  });
});
