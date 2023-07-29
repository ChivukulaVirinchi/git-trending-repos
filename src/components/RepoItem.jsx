import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";

export default function RepoItem(repo) {
  const [User, setUser] = useState({});
  const [showUserCard, setShowUserCard] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(repo.repo.owner.url);
      const data = await response.json();
      setUser(data);
    }
    if (showUserCard) {
      fetchUser();
    }
  });
  return (
    <>
      <div
        className={
          `p-6 text-lg border border-tprimary bg-darkBg
     text-tprimary` +
          (repo.number === 1 ? ` rounded-t-lg` : "") +
          (repo.number === 10 ? " rounded-b-lg" : "")
        }
      >
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4 text-gray-500 fill-current"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            data-view-component="true"
          >
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
          </svg>

          <HoverCard>
            <HoverCardTrigger>
              <a
                onMouseEnter={() => {
                  setShowUserCard(true);
                }}
                onMouseLeave={() => {
                  setShowUserCard(false);
                }}
                className="text-base text-blue-500 hover:underline"
                href={repo.repo.html_url}
              >
                {repo.repo.name}
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              {showUserCard && <UserCard user={User} />}
            </HoverCardContent>
          </HoverCard>

          <label className="rounded-full border border-gray-500 text-xs px-2 py-0.5">
            {repo.repo.private ? "Private" : "Public"}
          </label>
        </div>
        <p className="mt-2 text-sm text-left">{repo.repo.description}</p>
        <div className="flex mt-3 space-x-5">
          <label className="inline-flex text-xs">
            <h1
              className={
                `w-2 h-2 my-auto mr-1 rounded-full` +
                (repo.repo.language.toLowerCase() === "python"
                  ? " bg-python"
                  : "") +
                (repo.repo.language.toLowerCase() === "java"
                  ? " bg-java"
                  : "") +
                (repo.repo.language.toLowerCase() === "html"
                  ? " bg-html"
                  : "") +
                (repo.repo.language.toLowerCase() === "ruby"
                  ? " bg-ruby"
                  : "") +
                (repo.repo.language.toLowerCase() === "go" ? " bg-go" : "") +
                (repo.repo.language.toLowerCase() === "php" ? " bg-php" : "") +
                (repo.repo.language.toLowerCase() === "javascript"
                  ? " bg-javascript"
                  : "") +
                (repo.repo.language.toLowerCase() === "hcl" ? " bg-hcl" : "") +
                (repo.repo.language.toLowerCase() === "rust"
                  ? " bg-rust"
                  : "") +
                (repo.repo.language.toLowerCase() === "typescript"
                  ? " bg-typescript"
                  : "") +
                (repo.repo.language.toLowerCase() === "shell"
                  ? " bg-shell"
                  : "") +
                (repo.repo.language.toLowerCase() === "kotlin"
                  ? " bg-kotlin"
                  : "") +
                (repo.repo.language.toLowerCase() === "makefile"
                  ? " bg-makefile"
                  : "") +
                (repo.repo.language.toLowerCase() === "lua" ? " bg-lua" : "") +
                (repo.repo.language.toLowerCase() === "c" ? " bg-c" : "") +
                (repo.repo.language.toLowerCase() === "c++" ? " bg-c++" : "") +
                (repo.repo.language.toLowerCase() === "elixir"
                  ? " bg-elixir"
                  : "")
              }
            >
              {" "}
            </h1>

            {/* This is not how you would do it! */}

            {repo.repo.language}
          </label>
          <label className="inline-flex text-xs">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              className="w-3 h-3 my-auto mr-1 fill-current"
            >
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
            </svg>
            {repo.repo.stargazers_count}
          </label>
          <label className="inline-flex text-xs">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              className="w-4 h-4 my-auto mr-1 fill-current"
            >
              <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z" />
            </svg>
            MIT
          </label>
          <label className="inline-flex text-xs">
            <svg
              aria-label="fork"
              role="img"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              className="w-4 h-4 my-auto mr-1 fill-current"
            >
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
            </svg>
            {(repo.repo.forks / 1000).toFixed(1)}k
          </label>
          <label className="inline-flex text-xs">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              className="w-3 h-3 my-auto mr-1 fill-current"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z" />
            </svg>
            {repo.repo.open_issues_count}
          </label>
          <label className="inline-flex text-xs">
            <svg
              aria-hidden="true"
              className="w-3 h-3 my-auto mr-1 fill-current"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
            >
              <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
            </svg>
            {(repo.repo.watchers_count / 1000).toFixed(1)}k
          </label>
        </div>
      </div>
    </>
  );
}
