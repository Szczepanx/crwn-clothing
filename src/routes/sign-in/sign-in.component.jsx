import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  //   useEffect(() => {
  //     redirectionResults().then(async (response) => {
  //       console.log(response);
  //       response && (await createUserDocumentFromAuth(response.user));
  //     });
  //   }, []);

  //   const redirectionResults = async () => {
  //     return await getRedirectResult(auth);
  //   };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Account</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
