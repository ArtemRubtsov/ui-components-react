import { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

// Описание метаданных для Storybook
const meta: Meta<typeof Card> = {
  argTypes: {
    as: {
      control: 'radio', // Контрол выбора компонента (select)
      options: ['article', 'div', 'section'], // Опции для выбора динамического компонента
    },
    bgColors: {
      control: 'array', // Контрол для выбора цвета фона
      if: { arg: 'variant', eq: 'bgColor' },
    },
    fullWidth: {
      control: 'boolean', // Контрол для включения/выключения fullWidth
    },
    variant: {
      control: 'select', // Контрол для выбора варианта карточки
      options: ['withImg', 'withoutImg', 'default', 'BGcolor'], // Опции для выбора варианта
    },
  },
  component: Card, // Компонент, для которого создается история
  tags: ['autodocs'], // Мета-теги для автодокументации
  title: 'Components/Card', // Заголовок в интерфейсе Storybook
}

export default meta
type Story = StoryObj<typeof Card>

// Дефолтная история
export const Default: Story = {
  args: {
    as: 'article', // Тип компонента по умолчанию
    children: (
      <>
        <h4>Card Title</h4>
        <p>Card text with some details.</p>
        <a href={'#'}>More Info</a>
      </>
    ), // Дети для компонента (контент карточки)
    fullWidth: false, // Обычная ширина
    variant: 'default', // Вариант карточки по умолчанию
  },
}

// История для варианта с изображением
export const WithImage: Story = {
  args: {
    as: 'div', // Тип компонента - div
    children: (
      <>
        <h4>Card with Image</h4>
        <p>This card includes an image and some content.</p>
      </>
    ),
    fullWidth: true, // Полная ширина
    variant: 'withImg', // Указываем вариант с изображением
  },
}

// История для варианта без изображения
export const WithoutImage: Story = {
  args: {
    as: 'section', // Тип компонента - section
    children: (
      <>
        <h4>Card without Image</h4>
        <p>This is a card without an image and includes some text.</p>
      </>
    ),
    fullWidth: false, // Обычная ширина
    variant: 'withoutImg', // Указываем вариант без изображения
  },
}

export const BGcolorCard: Story = {
  args: {
    as: 'div',
    bgColor: ['#f0f0f0', '#ffcc00'], // Начальный цвет фона
    children: (
      <>
        <h4>Card with Background Color</h4>
        <p>Card content with customizable background color.</p>
      </>
    ),
    fullWidth: false,
    variant: 'BGcolor', // Вариант с изменяемым фоном
  },
}
