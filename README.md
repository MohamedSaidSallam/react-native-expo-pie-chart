# react-native-expo-pie-chart

[![npm](https://img.shields.io/npm/v/react-native-expo-pie-chart)](https://www.npmjs.com/package/react-native-expo-pie-chart)
[![npm](https://img.shields.io/npm/dw/react-native-expo-pie-chart)](https://www.npmjs.com/package/react-native-expo-pie-chart)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-native-expo-pie-chart)](https://www.npmjs.com/package/react-native-expo-pie-chart)
[![GitHub issues](https://img.shields.io/github/issues-raw/TheDigitalPhoenixX/react-native-expo-pie-chart)](https://github.com/TheDigitalPhoenixX/react-native-expo-pie-chart/issues)
[![Npm Publish Workflow](https://github.com/TheDigitalPhoenixX/react-native-expo-pie-chart/actions/workflows/npmPublish.yml/badge.svg)](https://github.com/TheDigitalPhoenixX/react-native-expo-pie-chart/actions)
[![License][license-image]][license-url]

A customizable Pie Chart library that uses [react-native-svg][react-native-svg-link]. Can be used for react native & expo.

![Example](docs/example.png)

## Installation

Install using npm

```bash
npm i react-native-expo-pie-chart
```

> Please Note: [react-native-svg][react-native-svg-link] is required as peer dependencies. Install it according to their documentation.

## Usage

View it live: [Expo Snack](https://snack.expo.dev/@digitalphoenixx/7dfecf)

```jsx
import PieChart from 'react-native-expo-pie-chart';

<PieChart
    data={[
    {
        key: 'First Data',
        count: 20,
        color: 'blue',
    },
    {
        key: 'Second Data',
        count: 25,
        color: 'yellow',
    },
    {
        key: 'Third Data',
        count: 40,
        color: 'green',
    },
    {
        key: 'Forth Data',
        count: 35,
        color: 'orange',
    },
    ]}
    length={200}
/>
```

## Props

|         Name         |    Type     | Description                                                                           | Required |  Default  |
| :------------------: | :---------: | ------------------------------------------------------------------------------------- | :------: | :-------: |
|         data         | dataItem[]  |                                                                                       |    ✓     |           |
|        length        |   number    | the side length of the bounding square                                                |          |    150    |
|       rotation       |   number    | rotation of the pie chart                                                             |          |    -90    |
| zeroTotalCircleColor |   string    | the color of the complete circle to display if the total of data.count is zero        |          | '#F1F6F9' |
|    containerProps    |  ViewProps  | props for wrapper view component                                                      |          |           |
|       svgProps       |  SvgProps   | props for the svg component (read [react-native-svg][react-native-svg-link] docs))    |          |           |
|        gProps        |   GProps    | props for the g component (read [react-native-svg][react-native-svg-link] docs))      |          |           |
|     circleProps      | CircleProps | props for the circle component (read [react-native-svg][react-native-svg-link] docs)) |          |           |

### Data Item

| Name  |  Type  | Description                             |
| :---: | :----: | --------------------------------------- |
| color | string | the color of this item in the pie chart |
| count | number | the value of this item                  |
|  key  | string | unique key representing this item       |

## Developing

You can use the ``example`` app to develop the package.

To link the package in development, You can use [Yalc](https://github.com/wclr/yalc). Read through the ``installation`` and ``usage`` section in Yalc's documentation or use the following lines for a quick start:

```bash
npm i yalc -g

yalc publish

cd example
yalc add react-native-expo-pie-chart
npm install
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[license-image]: https://img.shields.io/badge/License-MIT-brightgreen.svg
[license-url]: https://opensource.org/licenses/MIT
[react-native-svg-link]: https://github.com/react-native-svg/react-native-svg
