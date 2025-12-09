export interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
  updated_at: string;
}

/**
 * 获取GitHub仓库信息
 * @param repo 仓库名，格式：owner/repo
 * @returns 仓库信息
 */
export async function getGitHubRepo(repo: string): Promise<GitHubRepo | null> {
  if (!repo) return null;

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        }),
      },
      next: { revalidate: 3600 }, // 缓存1小时
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching GitHub repo ${repo}:`, error);
    return null;
  }
}

/**
 * 批量获取多个GitHub仓库信息
 */
export async function getGitHubRepos(
  repos: string[]
): Promise<Map<string, GitHubRepo>> {
  const repoMap = new Map<string, GitHubRepo>();

  await Promise.all(
    repos.map(async (repo) => {
      if (repo) {
        const data = await getGitHubRepo(repo);
        if (data) {
          repoMap.set(repo, data);
        }
      }
    })
  );

  return repoMap;
}

