import { useEffect, useState } from "react";
import { fetchQuery } from "react-relay";
import initEnvironment from "../../lib/createRelayEnvironment";
import { editProductQuery } from "../../utils/queries";

function useEditProductData(id) {
  const [data, setData] = useState();

  useEffect(() => {
    if (id) {
      const variables = {
        id: Number(id),
      };

      const environment = initEnvironment();

      fetchQuery(environment, editProductQuery, variables)
        .toPromise()
        .then(setData);
    }
  }, [id]);

  return data;
}

export default useEditProductData;
