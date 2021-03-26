import { Wow } from '../component/Wow';

export default {
    title: 'Example/Wow',
    component: Wow,
}

const Template = args => <Wow {...args}>Button</Wow>

export const Primary = Template.bind({});

Primary.args = {
    primary: true
}

export const Normal = Template.bind({});

Normal.args = {
    primary: false
}