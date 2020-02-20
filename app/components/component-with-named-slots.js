import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class ComponentWithNamedSlotsComponent extends Component {
  get uid() {
    return guidFor(this);
  }
}
