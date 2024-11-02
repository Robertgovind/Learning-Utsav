import https from "https";

const username = process.argv[2];

if (!username) {
  console.error(
    "Please provide a GitHub username, e.g., `node index.js <username>`"
  );
  process.exit(1);
}

const url = `https://api.github.com/users/${username}/events`;

const options = {
  headers: {
    "User-Agent": "github-activity-cli",
  },
};

function fetchGitHubActivity() {
  https
    .get(url, options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        if (res.statusCode !== 200) {
          console.error(
            `Error: Failed to fetch data. Status Code: ${res.statusCode}`
          );
          console.error(JSON.parse(data).message || "Unknown error occurred");
          return;
        }

        try {
          const events = JSON.parse(data);

          if (events.length === 0) {
            console.log("No recent activity found for this user.");
            return;
          }

          console.log(`Recent activity for GitHub user: ${username}`);
          events.forEach((event) => {
            console.log(event.payload.commits);
            let action = "";
            switch (event.type) {
              case "PushEvent":
                action = `Pushed ${event.payload.commits.length} commits to ${event.repo.name}`;
                break;
              case "IssuesEvent":
                action = `${
                  event.payload.action === "opened" ? "Opened" : "Closed"
                } an issue in ${event.repo.name}`;
                break;
              case "WatchEvent":
                action = `Starred ${event.repo.name}`;
                break;
              case "ForkEvent":
                action = `Forked ${event.repo.name}`;
                break;
              case "PullRequestEvent":
                action = `${
                  event.payload.action === "opened" ? "Opened" : "Closed"
                } a pull request in ${event.repo.name}`;
                break;
              default:
                action = `${event.type} in ${event.repo.name}`;
            }
            console.log(`- ${action}`);
          });
        } catch (err) {
          console.error("Error parsing response data:", err.message);
        }
      });
    })
    .on("error", (err) => {
      console.error("Error fetching data:", err.message);
    });
}

// Run the function
fetchGitHubActivity();
