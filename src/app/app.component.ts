import { Component, OnInit } from '@angular/core';
import { MasterService } from './master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular Assignments';
  allQuotes: [];
  quotesInView = [];
  pageSize = 15;
  constructor(private masterService: MasterService) {}
  ngOnInit(): void {
    this.masterService.getQuotes().then((json: { quotes: [] }) => {
      this.allQuotes = json.quotes;
      for (let i = 0; i < this.pageSize; i++) {
        this.quotesInView.push(this.allQuotes[i]);
      }
    });
    this.addScrollPagination();
  }
  addScrollPagination() {
    window.addEventListener('scroll', (e) => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.scrollHeight
      ) {
        console.log('Reached bottom of the page.');
        this.pushMorePosts();
      }
    });
  }

  pushMorePosts() {
    for (let i = 0; i < this.pageSize; i++) {
      this.quotesInView.push(this.getRandomQuote());
    }
  }
  getRandomQuote() {
    let max = this.allQuotes.length - 1;
    let min = 0;
    let randomIndex = Math.random() * (max - min) + min;

    return this.allQuotes[parseInt(randomIndex.toString())];
  }
}
