import { Link, useRouteError } from "react-router";

const Error = () => {
  /**
   * useRouteError hook is used to access the error object
   * thrown during the routing process.
   */
  const error = useRouteError();
  console.error(error);

  /**
   *
   */

  return (
    <div>
      <h1>Oops! An Error Occurred</h1>
      <h2>
        {error?.status} - {error?.statusText}
      </h2>
      <p>{error?.error?.message}</p>
      <Link
        to={{
          pathname: "/card-detail/123",
          search: "?query=string",
          hash: "#hash",
        }}
      >
        Please check with adminsitrator for more details
      </Link>
    </div>
  );
};

export default Error;
