import { browser } from 'protractor';
import { AppPageObject } from './page-objects/app.page-object';

describe('App', () => {

  let appPage: AppPageObject;

  beforeEach(() => {
    appPage = new AppPageObject();
  });

});