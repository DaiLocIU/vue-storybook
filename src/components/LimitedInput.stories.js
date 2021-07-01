import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import LimitedInput from './LimitedInput.vue';

export default {
  title: 'Forms/LimitedInput',
  decorators: [() => "<div class='m-4'><story/></div>", withKnobs],
};

export const withAValue = () => ({
  render() {
    return <LimitedInput value="test"/>;
  },
});

export const ValueTooLong = () => ({
  render() {
    return <LimitedInput value="test VueSchool"/>;
  },
});

export const StoryForActions = () => ({
  render() {
    return <LimitedInput onInput={action('input')}/>;
  },
});

export const PropsLimit = () => ({
  props: {
    limit: { default: number('Props Limit', 12) },
  },
  render() {
    return <LimitedInput value="Hello VueSchools" limit={this.limit}/>;
  },
});

export const PropsDisable = () => ({
  props: {
    disabled: { default: boolean('Props Disabled', true) },
  },
  render() {
    return <LimitedInput value="Hello VueSchools" disabled={this.disabled}/>;
  },
});
