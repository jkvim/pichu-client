
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

export class Topic {
  id: string;
  title: string;
  category: string;
  author: Author;
  commentCount: number;
  visitCount: number;
  lastActivity: string;
}