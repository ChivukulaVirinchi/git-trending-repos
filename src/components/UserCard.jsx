import moment from "moment";

export default function UserCard(user) {
  return (
    <div className="z-50 p-4 text-left bg-white bg-opacity-100 border border-teal-100 rounded-lg shadow-xl max-w-sd ring-1 ring-gray-900/5">
      <div className="flex max-w-xs mx-auto space-x-3">
        <img
          src={user.user.avatar_url}
          className="w-12 h-12 border-2 rounded-full"
        />
        <div>
          <div className="flex items-start justify-between">
            <div>
              {" "}
              <a
                className="text-xl font-semibold text-left hover:text-blue-500"
                href={"#"}
              >
                {user.user.login}
              </a>
              <p className="overflow-hidden text-xs text-left truncate max-w-">
                {user.user.bio}
              </p>
            </div>
          </div>
          <div className="space-x-4">
            <label className="text-sm text-tprimary">
              Followers:{" "}
              <span className="font-medium text-t2primary">
                {user.user.followers}
              </span>
            </label>
            <label className="text-sm text-tprimary">
              Following:{" "}
              <span className="font-medium text-t2primary">
                {user.user.following}
              </span>
            </label>
          </div>

          {user.user.blog !== null ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="inline-flex w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              <a className="text-sm hover:text-blue-500" href={user.user.blog}>
                {user.user.blog}
              </a>
            </>
          ) : (
            ""
          )}
          <br />
          {user.user.company !== null ? (
            <>
              <svg
                className="inline-flex w-3 h-3 mr-2 fill-tprimary"
                viewBox="0 0 16 16"
                version="1.1"
                aria-hidden="true"
              >
                <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
              </svg>
              <a className="text-sm">{user.user.company}</a>
            </>
          ) : (
            ""
          )}

          <div className="flex items-end space-x-1 text-sm text-tprimary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 stroke-tprimary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            <label>{`${moment.utc(user.user.created_at).format("MMMM")} ${moment
              .utc(user.user.created_at)
              .format("YYYY")}`}</label>
          </div>
        </div>
      </div>
    </div>
  );
}
