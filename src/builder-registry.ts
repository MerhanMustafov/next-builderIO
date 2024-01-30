'use client';
import { Builder } from '@builder.io/react';
import Counter from './components/Counter/Counter';
import ServicesSection from './components/ServicesSection/ServicesSection';
import SelectText from './components/SelectText/SelectText';
import MessageFormSection from './components/MessageForm/MessageFormSection';

Builder.registerComponent(Counter, {
     name: 'Counter',
     inputs: [
          {
               name: 'initialCount',
               type: 'number',
          },
     ],
});

Builder.registerComponent(ServicesSection, {
     name: 'ServicesSection',
     inputs: [
          {
               name: 'services',
               type: 'list',
               subFields: [
                    {
                         name: 'label',
                         type: 'string',
                    },
               ],
          },
     ],
});
Builder.registerComponent(SelectText, {
     name: 'SelectText',
     inputs: [
          {
               name: 'selects',
               type: 'list',
               subFields: [
                    {
                         name: 'label',
                         type: 'string',
                    },
               ],
          },
     ],
});
Builder.registerComponent(MessageFormSection, {
     name: 'MessageFormSection',
     inputs: [
          {
               name: 'sectionTitle',
               type: 'string',
          },
          {
               name: 'subtitle',
               type: 'string',
          },
          {
               name: 'linkText',
               type: 'string',
          },
          {
               name: 'termsAndConditionsText',
               type: 'string',
          },
          {
               name: 'buttonText',
               type: 'string',
          },
          {
               name: 'inputFields',
               type: 'list',
               subFields: [
                    {
                         name: 'plh',
                         type: 'string',
                    },
                    {
                         name: 'type',
                         type: 'string',
                    },
                    {
                         name: 'isRequired',
                         type: 'boolean',
                    },
               ],
          },
     ],
});
