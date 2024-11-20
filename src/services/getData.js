const getData = async () => {
  const data = await fetch(
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
  );
  const response = await data.json();
  return response;
};
export default getData;
