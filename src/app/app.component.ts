import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Furs Things First');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Furs Things First is a professional dog training business in Waterford, Ireland. We offer a variety of services and techniques to help you and your furry friend.',
      },
      {
        name: 'keywords',
        content:
          'dog, training, waterford, ireland, furs things first, obedience, agility, behavior, puppy, clicker, positive, reinforcement, socialization, crate, leash, manners, tricks, fun, games',
      },
      { name: 'author', content: 'Furs Things First' },
      { rel: 'canonical', href: 'https://fursthingsfirst.ie' },
      {
        name: 'og:title',
        content: 'Furs Things First - Dog Training in Waterford',
      },
      {
        name: 'og:description',
        content:
          'Furs Things First is a professional dog training business in Waterford, Ireland. We offer a variety of services and techniques to help you and your furry friend.',
      },
      { name: 'og:image', content: 'https://fursthingsfirst.ie/logo.png' },
      { name: 'og:url', content: 'https://fursthingsfirst.ie' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en_IE' },
      { name: 'fb:app_id', content: '61556219123886' },
      { name: 'fb:pages', content: '61556219123886' },
      { name: 'instagram:creator', content: '@furs_things_first' },
    ]);
  }
}
