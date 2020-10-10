# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root 'pages#home'
  get 'pages/my_todo_items'
end
