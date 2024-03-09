import { data } from "./data";

export function mockSearch(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "ok",
        totalResults: 2,
        articles: [
          {
            source: { id: null, name: "Mock News" },
            author: "Mock Author",
            title: `Mock Article 1 about ${query}`,
            description: `This is a mock description about ${query}`,
            url: "http://example.com",
            urlToImage: "http://example.com/image.jpg",
            publishedAt: new Date().toISOString(),
            content: `This is mock content about ${query}`,
          },
          {
            source: { id: null, name: "Mock News" },
            author: "Mock Author",
            title: `Mock Article 2 about ${query}`,
            description: `This is another mock description about ${query}`,
            url: "http://example.com",
            urlToImage: "http://example.com/image.jpg",
            publishedAt: new Date().toISOString(),
            content: `This is more mock content about ${query}`,
          },
        ],
      });
    }, 1000);
  });
}

export function mockTrendingRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export function getSearchResults(query) {
  return fetch(`https://newsapi.org/v2/everything?q=+${query}&sortBy=popularity&apiKey=577266e24cf74d529491d477a433bbdf&pageSize=20`)
}