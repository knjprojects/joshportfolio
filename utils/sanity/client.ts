
//import { SanityDocument } from "next-sanity";
import { createClient, groq } from "next-sanity";
//import { Project } from "../../typings";

export const client = createClient({
  projectId: 'tqpo72wd',//process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'me',//process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-05-03",
  useCdn: true, // faster for portfolio
  token:"skS7JG6fCkh6uV7hph0Dg25U7nbAtoVsPCN0yjzrie7MVSXPWVVmb0AEZzwDXlRDDUuJDjnjjeTtUceBa8MCfJgDw9eTGrJlHdy81itOaju7Y0QVh91ovpJLGVmpi0GbgK09nNHoThGpt1M84VOrFeFVeBS9rjxlBxyQfK44vH8UEwlldneK"
})