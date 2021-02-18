# Rails + React application [![Build ToDo App](https://github.com/ololo534/rails-react-app/actions/workflows/build.yml/badge.svg)](https://github.com/ololo534/rails-react-app/actions/workflows/build.yml)

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#Setup)

***

## General info
Full-stack web application for tracking completed tasks, as well as planning your time

***

## Technologies
* Ruby [2.7.1](https://github.com/ololo534/rails-react-app/blob/master/.ruby-version#L1)
* Rails [6.0.3](https://github.com/ololo534/rails-react-app/blob/master/Gemfile#L8)
* React [16.12.0](https://github.com/ololo534/rails-react-app/blob/master/package.json#L19)

## Dependencies
### For Rails
* gem 'devise'
* gem 'react-rails'

### For React
* axios
* jquery
* lodash
* lodash

### For testing
* gem 'rspec-rails'
* gem 'factory_bot_rails'
* gem 'capybara'

***

## Setup

```
    bundle install
    yarn install
    rails db:create
    rails db:seed
    rails s
```
