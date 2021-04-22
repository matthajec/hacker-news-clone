# Hacker News Clone
A React+Typescript site that fetches articles the hacker news API. You can see the top, new, and best articles.

## Built With
* React
* Typescript
* react-router-dom

## Challenges
* Fetching data in typescript. In other projects I used the native fetch API to get data and it was overly complicated using TypeScript. Because of that, for this project I decided to use ```axios``` to manage the API requests. It was very easy because I could just assign a type directly to the variable I was setting the response to, like so:
  ```typescript
        const stories: StoryData[] = await Promise.all(/* api requests here so they all run simultaneously */); 
  ```
  
 * Creating the loading overly. For this I used a portal. This was the best option because otherwise I would've had to worry about the CSS properties of the parents and I wouldn't have as much freedom as to where I could place the ```Loader``` component, or it would've been much more complicated.

* Handling data. To handle data I created a custom hook called ```useDataFetcher```. This hook takes in a type (top, new, or best) and returns the loading state as a boolean and the articles of that type.
