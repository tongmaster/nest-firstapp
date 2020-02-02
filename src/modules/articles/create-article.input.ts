import { IsNotEmpty } from "class-validator";
export class CreateArticleInput {
  @IsNotEmpty()
  title: string;
  body: string;
}
