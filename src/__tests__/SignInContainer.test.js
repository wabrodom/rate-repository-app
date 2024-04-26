
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react-native';
import { expect, jest } from '@jest/globals';
import SignInContainer from '../components/SignInContainer';
// import { SignInForm  } from '../components/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();

     
      render(<SignInContainer onSubmit={onSubmit}/>)
      

      screen.debug({ mapProps: ({ style, ...props }) => ({ props }) } )

      const usernameInput = screen.UNSAFE_getByProps({ "placeHolder": "Username" });
      const passwordInput = screen.UNSAFE_getByProps({ "placeHolder": "Password" });
      const signInButton = screen.getByText(/sign in/i)

      act(() => {
        fireEvent.changeText(usernameInput, 'kalle');
        fireEvent.changeText(passwordInput, 'password');
        fireEvent.press(signInButton);
      })

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });

  
      });



    });
  });
});