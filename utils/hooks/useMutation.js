import { useState } from "react";
import { commitMutation } from "react-relay";
import initEnvironment from "../../lib/createRelayEnvironment";
import { useRouter } from "next/router";

function useMutation(mutationQuery) {
  const [successMessage, setSuccessMessage] = useState(null);
  const router = useRouter();

  const performMutation = (variables) => {
    const environment = initEnvironment();

    commitMutation(environment, {
      mutation: mutationQuery,
      variables,
      onCompleted: (response, errors) => {
        if (!errors) {
          setSuccessMessage("Mutation successful");

          router.push("/");
        }
      },
    });
  };

  const closeSnackbar = () => {
    setSuccessMessage(null);
  };

  return { successMessage, performMutation, closeSnackbar };
}

export default useMutation;
