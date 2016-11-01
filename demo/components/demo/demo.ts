import {Component} from '@angular/core';

export interface IComponent {
  key: string;
  title?: string;
  readme?: string;
  html?: string;
  ts?: string;
  api?: string;
};

export const components: IComponent[] = [
  { key: 'badges' },
  { key: 'breadcrumbs' },
  { key: 'buttons' },
  { key: 'datatables' },
  { key: 'datepickers' },
  { key: 'forms' },
  { key: 'icons' },
  { key: 'images' },
  { key: 'lookups' },
  { key: 'menus' },
  { key: 'modals' },
  { key: 'notifications' },
  { key: 'paginations' },
  { key: 'pick' },
  { key: 'picklist' },
  { key: 'pills' },
  { key: 'popovers' },
  { key: 'ratings' },
  { key: 'sections' },
  { key: 'spinners' },
  { key: 'tabs' },
];

components.forEach(component => {
  const { key } = component;
  const path = 'components/' + key + '/' + key;
  component.html = require('!!prismjs?lang=markup!./' + path + '.html');
  component.ts = require('!!prismjs?lang=typescript!./' + path + '.ts')
                  .replace(/\{/g, `&#x007b;`).replace(/\}/g, `&#x007d;`);
  if (!component.title) {
    component.title = key.charAt(0).toUpperCase() + key.slice(1);
  }
  if (!component.readme) {
    component.readme = require('./components/' + key + '/README.md').replace(/\{/g, `&#x007b;`).replace(/\}/g, `&#x007d;`);
  }
  if (!component.api) {
    component.api = require('./components/' + key + '/API.md').replace(/\{/g, `&#x007b;`).replace(/\}/g, `&#x007d;`);
  }
});


@Component({
  templateUrl: './demo.pug',
})
export class DemoRoute {
  components = components;

  selectedTab: string[] = [];

  open(playground: any, key: string) {
    playground.open(this.getComponent(key));
  }

  getProp(key: string, prop: string) {
    return this.getComponent(key)[prop];
  }

  private getComponent(key: string): IComponent {
    for (var i = 0, ii = components.length; i < ii; i++) {
      if (components[i].key === key) {
        return components[i];
      }
    }
  }

}
