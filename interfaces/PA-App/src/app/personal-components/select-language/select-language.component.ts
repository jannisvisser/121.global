import { Component } from '@angular/core';
import { PersonalComponent } from '../personal-component.interface';

import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { ConversationService } from 'src/app/services/conversation.service';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent implements PersonalComponent {
  public languages: any;
  public languageChoice: string;
  public languageChoiceName: string;
  public languageChoiceResult: string;
  public languageSelected = false;

  constructor(
    public storage: Storage,
    public translate: TranslateService,
    public conversationService: ConversationService
  ) { }

  ngOnInit() {
    this.languages = [
      {
        id: 'en',
        language: this.translate.instant('personal.select-language.option1'),
      },
      {
        id: 'la2',
        language: this.translate.instant('personal.select-language.option2'),
      },
      {
        id: 'la3',
        language: this.translate.instant('personal.select-language.option3'),
      },
    ];
  }

  public getLanguageName(languageId: string): string {
    const language = this.languages.find(item => {
      return item.id === languageId;
    });

    return language ? language.language : '';
  }

  private storeLanguage(languageChoice: any) {
    this.storage.set('languageChoice', languageChoice);
  }

  public changeLanguage($event) {
    this.languageChoice = $event.detail.value;
    this.languageSelected = false;

    this.storeLanguage(this.languageChoice);
    this.languageChoiceName = this.getLanguageName(this.languageChoice);
    this.languageChoiceResult = this.translate.instant('personal.select-language.result', {
      language: this.languageChoiceName,
    });
  }

  public submitLanguage() {
    this.languageSelected = true;

    this.complete();
  }

  getNextSection() {
    return 'initial-needs';
  }

  complete() {
    this.conversationService.onSectionCompleted({
      name: 'select-language',
      data: {
        languageChoice: this.languageChoice,
        languageChoiceName: this.languageChoiceName,
      },
      next: this.getNextSection(),
    });
  }
}