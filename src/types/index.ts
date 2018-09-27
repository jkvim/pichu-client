
export class Author {
  id: string;
  username: string;
}

export class Comment {
  id: string;
  author: Author;
  content: string;
  likes: number;
  createDate: string;
}
