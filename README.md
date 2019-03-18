# NJUPT Esport System

![TIM图片20190318202352.png](https://i.loli.net/2019/03/18/5c8f8df0260ca.png)
## Introdction


Easy sports, for students and teachers to provide sports information service platform.It is jointly developed by nanyou yiban and the sports department of nanjing university of posts and telecommunications.The main users are students who need to query sports scores and daily running information, and teachers who need to provide information for students.

## Product architecture

![TIM截图20190309212031.png](https://i.loli.net/2019/03/09/5c83bdbf54e6a.png)

## Detailed function description

### Client

| number | Module      | function                                                                                                       |
| ------ | ----------- | -------------------------------------------------------------------------------------------------------------- |
| 1      | Query       | 1.Query the number of running 2.Check sports scores 3.Query physical test scores                               |
| 2      | News        | View the important notice of the sports department                                                             |
| 3      | Message     | 1. Apply for a running exercise reduction (picture upload)2. The number of running exercises and sports scores |
| 4      | Reservation | Reserve a venue for the stadium                                                                                |

### Prototype interface

![TIM截图20190309145125.png](https://i.loli.net/2019/03/09/5c83724da882f.png)
![TIM截图20190309145139.png](https://i.loli.net/2019/03/09/5c83724d73e0e.png)
![TIM截图20190309145219.png](https://i.loli.net/2019/03/09/5c83724de535f.png)
![TIM截图20190309145239.png](https://i.loli.net/2019/03/09/5c83724d912d3.png)

## Operating environment regulations

### platform

Webpage and easy-to-use app.

### equipment

The mobile phone is the main one, and the background is the PC and mobile phones.

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
