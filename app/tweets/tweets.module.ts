import { NgModule } from '@angular/core';

import { TweetsComponent } from './tweets.component';
import { TweetComponent }   from './tweet.component';
import { LikeComponent } from './like.component';


@NgModule({
    imports: [],
    exports: [],
    declarations: [TweetsComponent,TweetComponent,LikeComponent],
    providers: []
})
export class TweetsModule { }
