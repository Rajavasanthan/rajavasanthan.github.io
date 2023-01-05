import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  @Input() id: string | undefined;
  @Input() title: string | undefined;
  @Input() subTitle: string | undefined;
  @Input() summary: string | undefined;
  @Input() imageUrl: string | undefined;
  @Input() bannerImageUrl: string | undefined;
  @Input() changePosition: boolean | undefined;
  eventJson = [
    {
      id: "1",
      title: "First Event",
      subTitle: "First Event Sub Title",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id   aspernatur sint nulla autem ducimus impedit in, consequatur reiciendis  non.Optio error nesciunt pariatur deserunt magni, aliquam iure blanditiis delectus voluptate, quibusdam explicabo, maiores odio! Repellat officiis sequi recusandae laudantium quos modi, dolore impedit vero eum tempora id delectus est quae aut nisi, veritatis eius ab pariatur magni, ad laboriosam.Maxime consequuntur eius placeat voluptate tempore veritatis vitae, corrupti assumenda harum nam voluptatem ratione ab, dolore suscipit hic reprehenderit saepe",
      imageUrl: "https://dummyimage.com/350x300",
      bannerImageUrl: "https://dummyimage.com/1200x300"
    },
    {
      id: "2",
      title: "Second Event",
      subTitle: "Second Event Sub Title",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id   aspernatur sint nulla autem ducimus impedit in, consequatur reiciendis  non.Optio error nesciunt pariatur deserunt magni, aliquam iure blanditiis delectus voluptate, quibusdam explicabo, maiores odio! Repellat officiis sequi recusandae laudantium quos modi, dolore impedit vero eum tempora id delectus est quae aut nisi, veritatis eius ab pariatur magni, ad laboriosam.Maxime consequuntur eius placeat voluptate tempore veritatis vitae, corrupti assumenda harum nam voluptatem ratione ab, dolore suscipit hic reprehenderit saepe",
      imageUrl: "https://dummyimage.com/350x300",
      bannerImageUrl: "https://dummyimage.com/1200x300"
    },
    {
      id: "3",
      title: "Third Event",
      subTitle: "Third Event Sub Title",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id   aspernatur sint nulla autem ducimus impedit in, consequatur reiciendis  non.Optio error nesciunt pariatur deserunt magni, aliquam iure blanditiis delectus voluptate, quibusdam explicabo, maiores odio! Repellat officiis sequi recusandae laudantium quos modi, dolore impedit vero eum tempora id delectus est quae aut nisi, veritatis eius ab pariatur magni, ad laboriosam.Maxime consequuntur eius placeat voluptate tempore veritatis vitae, corrupti assumenda harum nam voluptatem ratione ab, dolore suscipit hic reprehenderit saepe",
      imageUrl: "https://dummyimage.com/350x300",
      bannerImageUrl: "https://dummyimage.com/1200x300"
    },
    {
      id: "4",
      title: "Fourth Event",
      subTitle: "Fourth Event Sub Title",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id   aspernatur sint nulla autem ducimus impedit in, consequatur reiciendis  non.Optio error nesciunt pariatur deserunt magni, aliquam iure blanditiis delectus voluptate, quibusdam explicabo, maiores odio! Repellat officiis sequi recusandae laudantium quos modi, dolore impedit vero eum tempora id delectus est quae aut nisi, veritatis eius ab pariatur magni, ad laboriosam.Maxime consequuntur eius placeat voluptate tempore veritatis vitae, corrupti assumenda harum nam voluptatem ratione ab, dolore suscipit hic reprehenderit saepe",
      imageUrl: "https://dummyimage.com/350x300",
      bannerImageUrl: "https://dummyimage.com/1200x300"
    },
    {
      id: "5",
      title: "Fifth Event",
      subTitle: "Fifth Event Sub Title",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id   aspernatur sint nulla autem ducimus impedit in, consequatur reiciendis  non.Optio error nesciunt pariatur deserunt magni, aliquam iure blanditiis delectus voluptate, quibusdam explicabo, maiores odio! Repellat officiis sequi recusandae laudantium quos modi, dolore impedit vero eum tempora id delectus est quae aut nisi, veritatis eius ab pariatur magni, ad laboriosam.Maxime consequuntur eius placeat voluptate tempore veritatis vitae, corrupti assumenda harum nam voluptatem ratione ab, dolore suscipit hic reprehenderit saepe",
      imageUrl: "https://dummyimage.com/350x300",
      bannerImageUrl: "https://dummyimage.com/1200x300"
    }
  ]
}
