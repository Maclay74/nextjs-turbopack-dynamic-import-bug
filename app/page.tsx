import {promises as fs} from 'fs';

export default async function Home() {
  const files = await fs.readdir([process.cwd(), 'app', 'files'].join('/'));

  for (const fileName of files) {
    const {Name} = await import(`./files/${fileName}`) as { Name: string };
    console.log({Name, fileName})
  }

  return null;
}
