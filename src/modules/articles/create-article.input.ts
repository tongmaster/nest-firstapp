import { IsNotEmpty } from "class-validator";
export class CreateArticleInput {
  title: string;
  body: string;
}
