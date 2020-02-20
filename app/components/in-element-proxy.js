import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";

export default class InElementProxyComponent extends Component {
  @tracked to

  get destination() {
    return document.querySelector(`[data-slot="${this.args.to}"]`);
  }
}
