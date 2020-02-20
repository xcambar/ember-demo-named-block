import { helper } from '@ember/component/helper';

export default helper(function slotName(params/*, hash*/) {
  let [
    component,
    name
  ] = params
  return `${component.uid}-${name}`;
});
