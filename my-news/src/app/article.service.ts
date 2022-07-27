// import { Injectable } from '@angular/core';
// import { Article } from './article';

// @Injectable({
//   providedIn: 'root'
// })
// export class ArticleService {

//   constructor() { }

//   getLatestArticles() : Article[] {
//     let articles: Article[] = [];

//     let article1: Article = {
//       id: 1,
//       title: "Title article",
//       subtitle: "Subtitle article",
//       imageUrl: "https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
//       imageCaption: "caption image",
//       content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
//       quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
//       dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
//       necessitatibus itaque explicabo?`,
//       author: "Michaël Cloots",
//       publishDate: "21/04/2022",
//       editor: "test1"
//     };

//     let article2: Article = {
//       id: 2,
//       title: "Title article 2",
//       subtitle: "Subtitle article 2",
//       imageUrl: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
//       imageCaption: "caption image 2",
//       content: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
//       quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
//       dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
//       necessitatibus itaque explicabo?`,
//       author: "Florian Smeyers",
//       publishDate: "10/04/2020",
//       editor: "test2"
//     };

//     const today = new Date()
//     let lastWeek = new Date(new Date().setDate(today.getDate() - 7));

//     let dateString1 = article1.publishDate 
//     let d = dateString1.split("/");
//     let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);
//     // let dateString1 = article1.publishDate 
//     // let date1 = new Date(dateString1);
//     console.log(dateString1)
//     console.log(lastWeek)
//     if(dat >= lastWeek) {
//       articles.push(article1);
//     }

//     let dateString2 = article2.publishDate 
 
//     let d2 = dateString2.split("/");
//     let dat2 = new Date(d2[2] + '/' + d[1] + '/' + d[0]);
//     // let date2 = new Date(dateString2);
//     if(dat2 >= lastWeek) {
//       articles.push(article2);
//     }

    

//     return articles;

//   }

//   getArticles() : Article[] {
//     let articles: Article[] = [];

//     let article1: Article = {
//       id: 1,
//       title: "Title article",
//       subtitle: "Subtitle article",
//       imageUrl: "https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
//       imageCaption: "caption image",
//       content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
//       quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
//       dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
//       necessitatibus itaque explicabo?`,
//       author: "Michaël Cloots",
//       publishDate: "21/04/2022",
//       editor: "test1"
//     };

//     let article2: Article = {
//       id: 2,
//       title: "Title article 2",
//       subtitle: "Subtitle article 2",
//       imageUrl: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
//       imageCaption: "caption image 2",
//       content: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
//       quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
//       dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
//       necessitatibus itaque explicabo?`,
//       author: "Florian Smeyers",
//       publishDate: "30/11/2020",
//       editor: ""
//     };

//     articles.push(article1);
//     articles.push(article2);

//     return articles;

//   }


// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Article } from './article';
import { switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [];

  constructor(private http: HttpClient) {
    

    let article1: Article = {
      id: 1,
      title: "Title article",
      subtitle: "Subtitle article",
      imageUrl: "https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
      imageCaption: "caption image",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
      quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
      dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
      necessitatibus itaque explicabo?`,
      author: "Michaël Cloots",
      publishDate: "28/11/2020",
      editor: '',
      categoryId: 0,
      statusId: 3,
    };

    let article2: Article = {
      id: 2,
      title: "Title article 2",
      subtitle: "Subtitle article 2",
      imageUrl: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
      imageCaption: "caption image 2",
      content: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
      quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
      dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
      necessitatibus itaque explicabo?`,
      author: "Florian Smeyers",
      publishDate: "30/11/2020",
      editor: '',
      categoryId: 0,
      statusId: 1,
    };

    this.articles.push(article1);
    this.articles.push(article2);

  }



  getArticles(): Observable<Article[]> {
    return timer(1,5000).pipe(switchMap(()=>this.http.get<Article[]>("http://localhost:3000/articles")))
    // return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  getArticleById(id: number) : Observable<Article> {
    return this.http.get<Article>("http://localhost:3000/articles/" + id);
    // return this.articles.find(a=>a.id === id) ?? null;
  }

  getLatestArticles() : Article[] {
    let articles: Article[] = [];

    let article1: Article = {
      id: 1,
      title: "Title article",
      subtitle: "Subtitle article",
      imageUrl: "https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
      imageCaption: "caption image",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
      quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
      dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
      necessitatibus itaque explicabo?`,
      author: "Michaël Cloots",
      publishDate: "21/04/2022",
      editor: "test1",
      categoryId: 0,
      statusId: 1,
    };

    let article2: Article = {
      id: 2,
      title: "Title article 2",
      subtitle: "Subtitle article 2",
      imageUrl: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
      imageCaption: "caption image 2",
      content: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
      quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
      dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
      necessitatibus itaque explicabo?`,
      author: "Florian Smeyers",
      publishDate: "10/04/2020",
      editor: "test2",
      categoryId: 0,
      statusId: 3,
    };

    const today = new Date()
    let lastWeek = new Date(new Date().setDate(today.getDate() - 700));

    let dateString1 = article1.publishDate 
    let d = dateString1.split("/");
    let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);
    // let dateString1 = article1.publishDate 
    // let date1 = new Date(dateString1);
    console.log(dateString1)
    console.log(lastWeek)
    if(dat >= lastWeek) {
      articles.push(article1);
    }

    let dateString2 = article2.publishDate 

    let d2 = dateString2.split("/");
    let dat2 = new Date(d2[2] + '/' + d[1] + '/' + d[0]);
    // let date2 = new Date(dateString2);
    if(dat2 >= lastWeek) {
      articles.push(article2);
    }
    return articles;

  }

  

}
