
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../components/SignInContainer';
// import { SignInForm  } from '../components/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();

      render(<SignInContainer onSubmit={onSubmit}/>)
      // render(<SignInForm onSubmit={onSubmit} />)

      screen.debug()
      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        fireEvent.changeText(screen.queryAllByRole('input')[0], 'kalle')
        fireEvent.changeText(screen.queryAllByRole('input')[1], 'password');

        fireEvent.press(screen.getByText(/sign in/i));
      });

      expect(onSubmit).toHaveBeenCalledTimes(1);

      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });


    });
  });
});