import { useState, useEffect } from "react";
import RepoItem from "./RepoItem";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RepoList() {
  const [Repos, setRepos] = useState([]);
  const [Language, setLanguage] = useState("javascript");

  useEffect(() => {
    async function fetchData() {
      const fullURL =
        "https://api.github.com" +
        "/" +
        `search/repositories?q=language:${Language}&per_page=10&sort=stars&order=desc&`;
      const options = {
        method: "GET",
      };
      const response = await fetch(fullURL, options);
      const res = await response.json();
      setRepos(res.items);
    }
    fetchData();
  }, [Language]);
  return (
    <>
      <Card className="w-[350px] mb-4">
        <CardHeader>
          <CardTitle>Select Language</CardTitle>
          <CardDescription>
            Select a language to see repositories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid items-center w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="text-left" htmlFor="language">
                  Language
                </Label>
                <Select onValueChange={setLanguage}>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select a Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="javascript">Javascript</SelectItem>
                    <SelectItem value="html">Html</SelectItem>
                    <SelectItem value="css">Css</SelectItem>
                    <SelectItem value="ruby">Ruby</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="php">Php</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="go">Go</SelectItem>
                    <SelectItem value="elixir">Elixir</SelectItem>
                    <SelectItem value="rust">Rust</SelectItem>
                    <SelectItem value="shell">Shell</SelectItem>
                    <SelectItem value="c">C</SelectItem>
                    <SelectItem value="c++">C++</SelectItem>
                    <SelectItem value="hcl">HCL</SelectItem>
                    <SelectItem value="kotlin">Kotlin</SelectItem>
                    <SelectItem value="makefile">Makefile</SelectItem>
                    <SelectItem value="lua">Lua</SelectItem>
                    <SelectItem value="typescript">Typescript</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      {Repos.map((repo, index) => (
        <RepoItem repo={repo} number={index + 1} key={index} />
      ))}
    </>
  );
}
