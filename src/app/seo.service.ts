import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  setMetaData(config: {
    title: string;
    description: string;
    keywords?: string;
    author?: string;
    image?: string;
    url?: string;
    type?: string;
    publishedDate?: string;
    modifiedDate?: string;
  }) {
    // Set Title
    this.title.setTitle(config.title);

    // Standard Meta Tags
    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }
    if (config.author) {
      this.meta.updateTag({ name: 'author', content: config.author });
    }
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph Tags
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
      this.meta.updateTag({ property: 'og:image:secure_url', content: config.image });
    }
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });

    // Twitter Card Tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description,
    });
    if (config.image) {
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }

    // Canonical URL
    this.setCanonicalURL(config.url);
  }

  setCanonicalURL(url?: string) {
    let link: HTMLLinkElement =
      this.doc.querySelector("link[rel='canonical']") ||
      this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', url || this.doc.URL);
  }

  setJsonLd(data: any) {
    let script = this.doc.querySelector("script[type='application/ld+json']");
    if (!script) {
      script = this.doc.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      this.doc.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
