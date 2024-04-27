
import {
  render,
  screen,
  waitFor,
  userEvent,
  fireEvent
} from '@testing-library/react-native'

import SignInContainer from '../components/SignInContainer'

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const user = userEvent.setup({
        advanceTimers: () => jest.advanceTimersToNextTimer(),
      });
      const onSubmit = jest.fn()
      
      render(<SignInContainer onSubmit={onSubmit} />)

      screen.debug({ mapProps: ({ style, ...props }) => ({ props }) })

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kall')
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'passwor')
      // fireEvent.press(screen.getByText('Sign In'))

      // const usernameInput = screen.UNSAFE_getByProps({ "placeHolder": "Username" })
      // const passwordInput = screen.UNSAFE_getByProps({ "placeHolder": "Password" })

      // const usernameInput = screen.getByRole('input', { placeholder: 'Username'})
      // const passwordInput = screen.getByRole('input', { placeholder: 'Password'})

      // const usernameInput = screen.getByPlaceholderText('Username');
      // const passwordInput = screen.getByPlaceholderText('Password');


      const signInButton = screen.getByText(/sign in/i)

      // await user.type(usernameInput, 'kalle')
      // await user.type(passwordInput, 'password')
      await user.press(signInButton)

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        // expect(onSubmit).toHaveBeenCalledTimes(1)

        // onSubmit.mock.calls[0][0] contains the first argument of the first call
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        })

      })

     

    })
  })
})