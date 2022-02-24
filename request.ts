import axios from 'axios';

type Person = {
  name: string,
  height: string,
  mass: string
}

const main = async () => {
  const response = await axios.get<Person>('https://swapi.dev/api/people/1');
  console.log(response.data.name);
};

main();