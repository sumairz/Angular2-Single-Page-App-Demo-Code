import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

    constructor() { }

    getContent(): string[] {
        return ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."];
    }

    getSpecialMessage() : string[] {
        return ["Donec at dui sit amet tellus porttitor condimentum. Morbi non eleifend tortor, eu dapibus dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vitae interdum mauris, non laoreet augue. Nulla semper pulvinar metus in semper. Vivamus sodales ligula sed lobortis tincidunt. Ut egestas, turpis ac congue congue, massa nisl ornare est, eget iaculis lacus nibh laoreet purus."];
    }
}