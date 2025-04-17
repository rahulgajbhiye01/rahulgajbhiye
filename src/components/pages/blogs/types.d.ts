/*Blogs Declarations */
export interface IBlog {
  id?: string;
  blogId: string;
  title: string;
  createdAt?: Date;
  author: string;
  category: string;
  keywords: string;
  imageUrl: string;
  article: string;
}

/*Blogs Declarations */
export interface IBlogMeta {
  title: string;
  createdAt: Date;
  category: string;
  keywords: string;
  imageUrl: string;
}
