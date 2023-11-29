import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.jsx";
import { AutenthicationContainer } from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <AutenthicationContainer>
      <SignInForm />
      <SignUpForm />
    </AutenthicationContainer>
  );
};

export default Authentication;

//   useEffect(() => {
//     redirectionResults().then(async (response) => {
//       console.log(response);
//       response && (await createUserDocumentFromAuth(response.user));
//     });
//   }, []);

//   const redirectionResults = async () => {
//     return await getRedirectResult(auth);
//   };
