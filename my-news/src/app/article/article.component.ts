import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article = {
    id: 0, title: "", subtitle: "", imageUrl: "", imageCaption: "", content: "", author: "", publishDate: "",categoryId: 0, statusId: 0,
    editor: ''
  };
  @Input() detail: boolean = false;
  @Input() backRoute: string = '';
  
  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
    console.log(this.detail)
  }

  goToDetail(id: number) {
    this.router.navigate(['/article', id, {backRoute: this.backRoute}]);
  }
  
  goBack() {
    this.router.navigate([this.backRoute]);
  }

}