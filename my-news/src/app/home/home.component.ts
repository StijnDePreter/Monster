import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  articles$ : Subscription = new Subscription();
  articles: Article[] = [];

  constructor(private articleService: ArticleService, 
    // private http: HttpClient
    ) { }
  ngOnDestroy(): void {
    this.articles$.unsubscribe();
  }

  ngOnInit(): void {
    
    this.articles$ = this.articleService.getArticles().subscribe(r => {this.articles = r})


    // hieronder een mogelijkse valide methode manier ----------------------
    // this.articleService.getArticles().subscribe(
    //   result => {
    //     this.articles = result;
    //   }
    // );
    //--------------------------------------------------

    // this.http.get("http://localhost:3000/articles").subscribe(
    //   result => {
    //     console.log(result)
    //   }
    // );
  }


}
